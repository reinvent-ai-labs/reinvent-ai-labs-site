import { useEffect, useRef } from "react";
import p5 from "p5";

export function RowanVoiceDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const COLORS = {
        bg: "#000000",
        white: "#F7F8FA",
        softWhite: "#D8DDE4",
        muted: "#8C949F",
        cyan: "#36DEDE",
        salmon: "#FA8072",
        green: "#54E38E",
      };

      const conversation = [
        {
          speaker: "rowan",
          text: "Good evening. Thank you for calling Saffron House. How can I help you today?",
        },
        {
          speaker: "customer",
          text: "Hi, I'd like to place an order for dinner.",
        },
        {
          speaker: "rowan",
          text: "Absolutely. What would you like me to get started for you?",
        },
        {
          speaker: "customer",
          text: "I'd like two butter chicken, one garlic naan, one basmati rice, and a mango lassi.",
        },
        {
          speaker: "rowan",
          text: "Perfect. I have two butter chicken, one garlic naan, one basmati rice, and one mango lassi.",
        },
        {
          speaker: "rowan",
          text: "Would you like anything else with your order?",
        },
        {
          speaker: "customer",
          text: "No, that's everything.",
        },
        {
          speaker: "rowan",
          text: "Perfect. I'll take care of that for you.",
        },
      ];

      type JSONTokenType =
        | "key"
        | "string"
        | "number"
        | "boolean"
        | "punct";

      type JSONToken = {
        text: string;
        type: JSONTokenType;
      };

      const JSON_LINES: JSONToken[][] = [
        [{ text: "{", type: "punct" }],

        [
          { text: '  "order"', type: "key" },
          { text: ": ", type: "punct" },
          { text: "{", type: "punct" },
        ],

        [
          { text: '    "channel"', type: "key" },
          { text: ": ", type: "punct" },
          { text: '"voice"', type: "string" },
          { text: ",", type: "punct" },
        ],

        [
          { text: '    "type"', type: "key" },
          { text: ": ", type: "punct" },
          { text: '"pickup"', type: "string" },
          { text: ",", type: "punct" },
        ],

        [
          { text: '    "items"', type: "key" },
          { text: ": ", type: "punct" },
          { text: "[", type: "punct" },
        ],

        [{ text: "      {", type: "punct" }],

        [
          { text: '        "name"', type: "key" },
          { text: ": ", type: "punct" },
          { text: '"Butter Chicken"', type: "string" },
          { text: ",", type: "punct" },
        ],

        [
          { text: '        "quantity"', type: "key" },
          { text: ": ", type: "punct" },
          { text: "2", type: "number" },
        ],

        [{ text: "      },", type: "punct" }],

        [{ text: "      {", type: "punct" }],

        [
          { text: '        "name"', type: "key" },
          { text: ": ", type: "punct" },
          { text: '"Garlic Naan"', type: "string" },
          { text: ",", type: "punct" },
        ],

        [
          { text: '        "quantity"', type: "key" },
          { text: ": ", type: "punct" },
          { text: "1", type: "number" },
        ],

        [{ text: "      },", type: "punct" }],

        [{ text: "      {", type: "punct" }],

        [
          { text: '        "name"', type: "key" },
          { text: ": ", type: "punct" },
          { text: '"Basmati Rice"', type: "string" },
          { text: ",", type: "punct" },
        ],

        [
          { text: '        "quantity"', type: "key" },
          { text: ": ", type: "punct" },
          { text: "1", type: "number" },
        ],

        [{ text: "      },", type: "punct" }],

        [{ text: "      {", type: "punct" }],

        [
          { text: '        "name"', type: "key" },
          { text: ": ", type: "punct" },
          { text: '"Mango Lassi"', type: "string" },
          { text: ",", type: "punct" },
        ],

        [
          { text: '        "quantity"', type: "key" },
          { text: ": ", type: "punct" },
          { text: "1", type: "number" },
        ],

        [{ text: "      }", type: "punct" }],

        [{ text: "    ],", type: "punct" }],

        [
          { text: '    "confirmed"', type: "key" },
          { text: ": ", type: "punct" },
          { text: "true", type: "boolean" },
        ],

        [{ text: "  }", type: "punct" }],

        [{ text: "}", type: "punct" }],
      ];

      type TimelineMessage = {
        speaker: string;
        text: string;
        words: string[];
        start: number;
        duration: number;
        end: number;
      };

      let timeline: TimelineMessage[] = [];

      let sceneStart = 0;
      let conversationEnd = 0;

      const AFTER_CONVERSATION_PAUSE = 400;
      const TRANSCRIPT_FADE_DURATION = 850;
      const JSON_ENTRANCE_DELAY = 180;
      const JSON_BUILD_DURATION = 3100;
      const JSON_HOLD_DURATION = 650;
      const JSON_FADE_DURATION = 700;
      const SEND_DURATION = 1600;
      const SUCCESS_DURATION = 3000;
      const LOOP_PAUSE = 850;

      let totalSceneDuration = 0;

      const glass = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        r: 30,
      };

      let scrollY = 0;
      let targetScrollY = 0;

      function getContainerSize() {
        const el = containerRef.current;

        return {
          width: Math.max(el?.clientWidth ?? 360, 1),
          height: Math.max(el?.clientHeight ?? 640, 1),
        };
      }

      p.setup = () => {
        const size = getContainerSize();

        const canvas = p.createCanvas(size.width, size.height);

        canvas.parent(containerRef.current!);

        p.pixelDensity(
          Math.min(window.devicePixelRatio || 1, 2)
        );

        p.textFont(
          '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif'
        );

        buildTimeline();
        calculateSceneDuration();

        sceneStart = p.millis();
      };

      p.draw = () => {
        p.background(0);

        calculateLayout();

        let elapsed = p.millis() - sceneStart;

        if (elapsed > totalSceneDuration) {
          sceneStart = p.millis();

          elapsed = 0;

          scrollY = 0;
          targetScrollY = 0;
        }

        const phase = getPhase(elapsed);
        const speech = getSpeechState(elapsed);

        drawGlassPanel(phase, elapsed);

        if (phase === "conversation") {
          drawTranscript(elapsed, 1, 0);
          drawMic(speech);
        } else if (phase === "transcriptFade") {
          drawTranscriptTransition(elapsed);
        } else if (phase === "json") {
          drawJSONState(elapsed, 1);
        } else if (phase === "jsonFade") {
          drawJSONFade(elapsed);
        } else if (phase === "sending") {
          drawSendingState(elapsed);
        } else if (phase === "success") {
          drawSuccessState(elapsed);
        }
      };

      function calculateLayout() {
        /*
          The canvas itself already has a tall,
          website-friendly aspect ratio.

          We leave breathing room around the glass
          rather than stretching it edge-to-edge.
        */

        glass.h = Math.min(
          p.height * 0.92,
          760
        );

        glass.w = Math.min(
          p.width * 0.88,
          glass.h * 0.60
        );

        /*
          If the column isn't extremely tall,
          don't force strict 9:16.

          This gives us a premium device-ish slab
          while still fitting naturally in desktop layout.
        */

        glass.x =
          p.width / 2 -
          glass.w / 2;

        glass.y =
          p.height / 2 -
          glass.h / 2;

        glass.r =
          Math.max(
            24,
            glass.w * 0.075
          );
      }

      function buildTimeline() {
        timeline = [];

        let cursor = 0;

        for (
          let i = 0;
          i < conversation.length;
          i++
        ) {
          const message =
            conversation[i];

          const words =
            message.text
              .trim()
              .split(/\s+/);

          const msPerWord =
            message.speaker === "rowan"
              ? 155
              : 165;

          const duration =
            Math.max(
              words.length *
                msPerWord,
              900
            );

          timeline.push({
            ...message,
            words,
            start: cursor,
            duration,
            end:
              cursor +
              duration,
          });

          cursor +=
            duration +
            430;
        }

        conversationEnd =
          timeline[
            timeline.length - 1
          ].end;
      }

      function getTimes() {
        const transcriptFadeStart =
          conversationEnd +
          AFTER_CONVERSATION_PAUSE;

        const jsonStart =
          transcriptFadeStart +
          TRANSCRIPT_FADE_DURATION +
          JSON_ENTRANCE_DELAY;

        const jsonFadeStart =
          jsonStart +
          JSON_BUILD_DURATION +
          JSON_HOLD_DURATION;

        const sendStart =
          jsonFadeStart +
          JSON_FADE_DURATION;

        const successStart =
          sendStart +
          SEND_DURATION;

        return {
          transcriptFadeStart,
          jsonStart,
          jsonFadeStart,
          sendStart,
          successStart,
        };
      }

      function getPhase(elapsed: number) {
        const t =
          getTimes();

        if (
          elapsed <
          t.transcriptFadeStart
        ) {
          return "conversation";
        }

        if (
          elapsed <
          t.jsonStart
        ) {
          return "transcriptFade";
        }

        if (
          elapsed <
          t.jsonFadeStart
        ) {
          return "json";
        }

        if (
          elapsed <
          t.sendStart
        ) {
          return "jsonFade";
        }

        if (
          elapsed <
          t.successStart
        ) {
          return "sending";
        }

        return "success";
      }

      function calculateSceneDuration() {
        const t =
          getTimes();

        totalSceneDuration =
          t.successStart +
          SUCCESS_DURATION +
          LOOP_PAUSE;
      }

      function getSpeechState(
        elapsed: number
      ) {
        for (
          let i = 0;
          i < timeline.length;
          i++
        ) {
          const message =
            timeline[i];

          if (
            elapsed >= message.start &&
            elapsed <= message.end
          ) {
            const t =
              p.millis() *
              0.0105;

            const energy =
              0.58 +
              p.sin(t) * 0.17 +
              p.sin(
                t * 2.23 + 0.7
              ) *
                0.10 +
              p.sin(
                t * 4.17 + 2.5
              ) *
                0.06;

            return {
              active: true,
              amount:
                p.constrain(
                  energy,
                  0.15,
                  1
                ),
            };
          }
        }

        return {
          active: false,
          amount: 0,
        };
      }

      /* ======================================================
         GLASS
      ====================================================== */

      function drawGlassPanel(
        phase: string,
        elapsed: number
      ) {
        const ctx =
          p.drawingContext as CanvasRenderingContext2D;

        let codeMode = 0;

        if (
          phase === "json" ||
          phase === "jsonFade"
        ) {
          codeMode = 1;
        } else if (
          phase === "sending"
        ) {
          const t =
            getTimes();

          const phaseProgress =
            p.constrain(
              (
                elapsed -
                t.sendStart
              ) /
                520,
              0,
              1
            );

          codeMode =
            1 -
            smootherStep(
              phaseProgress
            );
        }

        p.push();

        /*
          Main glass body.
        */

        ctx.shadowBlur = 12;

        ctx.shadowColor =
          "rgba(255,255,255,0.03)";

        ctx.fillStyle =
          "rgba(8,12,17,0.50)";

        ctx.strokeStyle =
          "rgba(235,242,255,0.18)";

        ctx.lineWidth = 1;

        roundedRectPath(
          ctx,
          glass.x,
          glass.y,
          glass.w,
          glass.h,
          glass.r
        );

        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;

        /*
          Neutral reflection.
        */

        const reflection =
          ctx.createLinearGradient(
            glass.x,
            glass.y,
            glass.x +
              glass.w,
            glass.y +
              glass.h
          );

        reflection.addColorStop(
          0,
          "rgba(255,255,255,0.065)"
        );

        reflection.addColorStop(
          0.18,
          "rgba(255,255,255,0.020)"
        );

        reflection.addColorStop(
          0.52,
          "rgba(255,255,255,0.003)"
        );

        reflection.addColorStop(
          1,
          "rgba(255,255,255,0.017)"
        );

        ctx.fillStyle =
          reflection;

        fillGlass(ctx);

        /*
          Cyan bottom-left refraction.
        */

        const cyan =
          ctx.createLinearGradient(
            glass.x,
            glass.y +
              glass.h,
            glass.x +
              glass.w *
                0.74,
            glass.y +
              glass.h *
                0.22
          );

        cyan.addColorStop(
          0,
          "rgba(54,222,222,0.10)"
        );

        cyan.addColorStop(
          0.20,
          "rgba(54,222,222,0.050)"
        );

        cyan.addColorStop(
          0.48,
          "rgba(54,222,222,0.010)"
        );

        cyan.addColorStop(
          1,
          "rgba(54,222,222,0)"
        );

        ctx.fillStyle = cyan;

        fillGlass(ctx);

        /*
          Salmon top-right refraction.
        */

        const salmon =
          ctx.createLinearGradient(
            glass.x +
              glass.w,
            glass.y,
            glass.x +
              glass.w *
                0.26,
            glass.y +
              glass.h *
                0.78
          );

        salmon.addColorStop(
          0,
          "rgba(250,128,114,0.095)"
        );

        salmon.addColorStop(
          0.20,
          "rgba(250,128,114,0.047)"
        );

        salmon.addColorStop(
          0.48,
          "rgba(250,128,114,0.009)"
        );

        salmon.addColorStop(
          1,
          "rgba(250,128,114,0)"
        );

        ctx.fillStyle = salmon;

        fillGlass(ctx);

        /*
          When JSON is visible,
          the entire glass becomes a
          darker code surface.

          Still NO nested code box.
        */

        if (codeMode > 0) {
          ctx.fillStyle =
            `rgba(0,0,0,${
              0.72 *
              codeMode
            })`;

          fillGlass(ctx);
        }

        /*
          Premium top rim.
        */

        const edge =
          ctx.createLinearGradient(
            glass.x,
            glass.y,
            glass.x +
              glass.w,
            glass.y
          );

        edge.addColorStop(
          0,
          "rgba(255,255,255,0)"
        );

        edge.addColorStop(
          0.16,
          "rgba(255,255,255,0.10)"
        );

        edge.addColorStop(
          0.50,
          "rgba(255,255,255,0.19)"
        );

        edge.addColorStop(
          0.84,
          "rgba(255,255,255,0.10)"
        );

        edge.addColorStop(
          1,
          "rgba(255,255,255,0)"
        );

        ctx.strokeStyle = edge;

        ctx.lineWidth = 0.7;

        ctx.beginPath();

        ctx.moveTo(
          glass.x + 26,
          glass.y + 1
        );

        ctx.lineTo(
          glass.x +
            glass.w -
            26,
          glass.y + 1
        );

        ctx.stroke();

        p.pop();
      }

      function fillGlass(
        ctx: CanvasRenderingContext2D
      ) {
        roundedRectPath(
          ctx,
          glass.x + 1,
          glass.y + 1,
          glass.w - 2,
          glass.h - 2,
          glass.r - 1
        );

        ctx.fill();
      }

      /* ======================================================
         TRANSCRIPT
      ====================================================== */

      function drawTranscript(
        elapsed: number,
        opacity = 1,
        lift = 0
      ) {
        const margin =
          glass.w *
          0.07;

        const clipX =
          glass.x + margin;

        const clipY =
          glass.y + margin;

        const clipW =
          glass.w -
          margin * 2;

        const clipH =
          glass.h -
          glass.w *
            0.27;

        const blocks: any[] = [];

        for (
          let i = 0;
          i < timeline.length;
          i++
        ) {
          const message =
            timeline[i];

          if (
            elapsed <
            message.start
          ) {
            continue;
          }

          blocks.push(
            buildTranscriptBlock(
              message,
              elapsed
            )
          );
        }

        let totalHeight = 0;

        for (
          const block of blocks
        ) {
          totalHeight +=
            block.height +
            glass.w *
              0.09;
        }

        targetScrollY =
          Math.max(
            0,
            totalHeight -
              clipH +
              24
          );

        scrollY +=
          (
            targetScrollY -
            scrollY
          ) *
          0.012;

        const ctx =
          p.drawingContext as CanvasRenderingContext2D;

        ctx.save();

        roundedRectClip(
          ctx,
          clipX,
          clipY,
          clipW,
          clipH,
          glass.r - 7
        );

        let y =
          glass.y +
          glass.w *
            0.10 -
          scrollY -
          lift;

        for (
          const block of blocks
        ) {
          drawTranscriptBlock(
            block,
            y,
            opacity
          );

          y +=
            block.height +
            glass.w *
              0.09;
        }

        ctx.restore();
      }

      function drawTranscriptTransition(
        elapsed: number
      ) {
        const t =
          getTimes();

        const phaseProgress =
          p.constrain(
            (
              elapsed -
              t.transcriptFadeStart
            ) /
              TRANSCRIPT_FADE_DURATION,
            0,
            1
          );

        const eased =
          smootherStep(
            phaseProgress
          );

        drawTranscript(
          conversationEnd,
          1 - eased,
          eased * 18
        );

        if (
          phaseProgress <
          0.62
        ) {
          drawMic({
            active: false,
            amount: 0,
            opacity:
              1 -
              smootherStep(
                p.constrain(
                  phaseProgress /
                    0.62,
                  0,
                  1
                )
              ),
          });
        }
      }

      function buildTranscriptBlock(
        message: TimelineMessage,
        elapsed: number
      ) {
        const isRowan =
          message.speaker ===
          "rowan";

        const blockWidth =
          glass.w *
          0.84;

        const sideMargin =
          glass.w *
          0.065;

        const x =
          isRowan
            ? glass.x +
              sideMargin
            : glass.x +
              glass.w -
              blockWidth -
              sideMargin;

        const fontSize =
          p.constrain(
            glass.w *
              0.052,
            16,
            24
          );

        const lineHeight =
          fontSize *
          1.30;

        p.textSize(fontSize);

        p.textStyle(
          p.BOLD
        );

        const progress =
          p.constrain(
            (
              elapsed -
              message.start
            ) /
              message.duration,
            0,
            1
          );

        const wordPosition =
          progress *
          (
            message.words.length +
            1.8
          );

        const lines: any[] = [];

        let line: any[] = [];

        let lineWidth = 0;

        const spaceWidth =
          p.textWidth(" ");

        for (
          let i = 0;
          i < message.words.length;
          i++
        ) {
          const word =
            message.words[i];

          const wordWidth =
            p.textWidth(
              word
            );

          const projected =
            line.length === 0
              ? wordWidth
              : lineWidth +
                spaceWidth +
                wordWidth;

          if (
            projected >
              blockWidth &&
            line.length > 0
          ) {
            lines.push({
              words: line,
              width:
                lineWidth,
            });

            line = [];

            lineWidth = 0;
          }

          line.push({
            text: word,
            index: i,
            width:
              wordWidth,
          });

          lineWidth =
            line.length === 1
              ? wordWidth
              : lineWidth +
                spaceWidth +
                wordWidth;
        }

        if (
          line.length > 0
        ) {
          lines.push({
            words: line,
            width:
              lineWidth,
          });
        }

        return {
          isRowan,
          x,
          width:
            blockWidth,
          fontSize,
          lineHeight,
          lines,
          wordPosition,
          height:
            lines.length *
            lineHeight,
        };
      }

      function drawTranscriptBlock(
        block: any,
        y: number,
        globalOpacity: number
      ) {
        p.push();

        p.textSize(
          block.fontSize
        );

        p.textStyle(
          p.BOLD
        );

        p.textAlign(
          p.LEFT,
          p.TOP
        );

        for (
          let lineIndex = 0;
          lineIndex <
          block.lines.length;
          lineIndex++
        ) {
          const line =
            block.lines[
              lineIndex
            ];

          let cursorX =
            block.isRowan
              ? block.x
              : block.x +
                block.width -
                line.width;

          const yy =
            y +
            lineIndex *
              block.lineHeight;

          for (
            const word of line.words
          ) {
            const relative =
              block.wordPosition -
              word.index;

            const reveal =
              p.constrain(
                relative / 3.6,
                0,
                1
              );

            if (
              reveal <= 0
            ) {
              continue;
            }

            const eased =
              smootherStep(
                reveal
              );

            p.fill(
              247,
              248,
              250,
              eased *
                globalOpacity *
                255
            );

            p.text(
              word.text,
              cursorX,
              yy +
                (
                  1 -
                  eased
                ) *
                  0.25
            );

            cursorX +=
              word.width +
              p.textWidth(" ");
          }
        }

        p.pop();
      }

      /* ======================================================
         JSON
      ====================================================== */

      function drawJSONState(
        elapsed: number,
        opacity: number
      ) {
        const t =
          getTimes();

        const progress =
          p.constrain(
            (
              elapsed -
              t.jsonStart
            ) /
              JSON_BUILD_DURATION,
            0,
            1
          );

        const reveal =
          smootherStep(
            p.constrain(
              p.map(
                progress,
                0.03,
                0.90,
                0,
                1
              ),
              0,
              1
            )
          );

        const totalCharacters =
          getJSONCharacterCount();

        const visibleCharacters =
          Math.floor(
            totalCharacters *
              reveal
          );

        const entrance =
          smootherStep(
            p.constrain(
              progress /
                0.10,
              0,
              1
            )
          );

        drawSyntaxHighlightedJSON(
          visibleCharacters,
          opacity * entrance,
          0
        );
      }

      function drawJSONFade(
        elapsed: number
      ) {
        const t =
          getTimes();

        const phaseProgress =
          p.constrain(
            (
              elapsed -
              t.jsonFadeStart
            ) /
              JSON_FADE_DURATION,
            0,
            1
          );

        const eased =
          smootherStep(
            phaseProgress
          );

        drawSyntaxHighlightedJSON(
          getJSONCharacterCount(),
          1 - eased,
          eased * 14
        );
      }

      function getJSONCharacterCount() {
        let count = 0;

        for (
          const line of JSON_LINES
        ) {
          for (
            const token of line
          ) {
            count +=
              token.text.length;
          }

          count += 1;
        }

        return count;
      }

      function drawSyntaxHighlightedJSON(
        visibleCharacters: number,
        opacity: number,
        lift: number
      ) {
        p.push();

        p.textFont(
          'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
        );

        p.textStyle(
          p.NORMAL
        );

        p.textAlign(
          p.LEFT,
          p.TOP
        );

        const fontSize =
          p.constrain(
            glass.w *
              0.026,
            9.5,
            13
          );

        const lineHeight =
          fontSize *
          1.48;

        p.textSize(
          fontSize
        );

        const startX =
          glass.x +
          glass.w *
            0.065;

        const startY =
          glass.y +
          glass.w *
            0.07 -
          lift;

        let charactersUsed =
          0;

        for (
          let lineIndex = 0;
          lineIndex <
          JSON_LINES.length;
          lineIndex++
        ) {
          const line =
            JSON_LINES[
              lineIndex
            ];

          let cursorX =
            startX;

          const y =
            startY +
            lineIndex *
              lineHeight;

          for (
            const token of line
          ) {
            const remaining =
              visibleCharacters -
              charactersUsed;

            if (
              remaining <= 0
            ) {
              p.pop();
              return;
            }

            const charsToShow =
              Math.min(
                token.text.length,
                remaining
              );

            const visibleText =
              token.text.substring(
                0,
                charsToShow
              );

            setJSONColor(
              token.type,
              opacity
            );

            p.text(
              visibleText,
              cursorX,
              y
            );

            cursorX +=
              p.textWidth(
                visibleText
              );

            charactersUsed +=
              charsToShow;

            if (
              charsToShow <
              token.text.length
            ) {
              p.pop();
              return;
            }
          }

          charactersUsed +=
            1;
        }

        p.pop();
      }

      function setJSONColor(
        type: JSONTokenType,
        opacity: number
      ) {
        const a =
          p.constrain(
            opacity,
            0,
            1
          ) *
          255;

        if (
          type === "key"
        ) {
          p.fill(
            54,
            222,
            222,
            a
          );
        } else if (
          type === "string"
        ) {
          p.fill(
            250,
            128,
            114,
            a
          );
        } else if (
          type === "number"
        ) {
          p.fill(
            165,
            214,
            255,
            a
          );
        } else if (
          type === "boolean"
        ) {
          p.fill(
            84,
            227,
            142,
            a
          );
        } else {
          p.fill(
            185,
            192,
            201,
            a
          );
        }
      }

      /* ======================================================
         POS SEND
      ====================================================== */

      function drawSendingState(
        elapsed: number
      ) {
        const t =
          getTimes();

        const progress =
          p.constrain(
            (
              elapsed -
              t.sendStart
            ) /
              SEND_DURATION,
            0,
            1
          );

        const entrance =
          smootherStep(
            p.constrain(
              progress /
                0.28,
              0,
              1
            )
          );

        const centerX =
          glass.x +
          glass.w / 2;

        const centerY =
          glass.y +
          glass.h *
            0.48;

        p.push();

        p.textFont(
          '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif'
        );

        p.textAlign(
          p.CENTER,
          p.CENTER
        );

        p.textStyle(
          p.BOLD
        );

        p.textSize(
          p.constrain(
            glass.w *
              0.048,
            16,
            22
          )
        );

        p.fill(
          247,
          248,
          250,
          entrance *
            255
        );

        p.text(
          "Sending to restaurant POS",
          centerX,
          centerY
        );

        const dots =
          Math.floor(
            p.millis() /
              320
          ) %
          4;

        p.textStyle(
          p.NORMAL
        );

        p.textSize(14);

        p.fill(
          185,
          191,
          200,
          entrance *
            175
        );

        p.text(
          ".".repeat(
            dots
          ),
          centerX,
          centerY + 30
        );

        p.pop();
      }

      /* ======================================================
         SUCCESS
      ====================================================== */

      function drawSuccessState(
        elapsed: number
      ) {
        const t =
          getTimes();

        const progress =
          p.constrain(
            (
              elapsed -
              t.successStart
            ) /
              SUCCESS_DURATION,
            0,
            1
          );

        const cx =
          glass.x +
          glass.w / 2;

        const cy =
          glass.y +
          glass.h *
            0.41;

        const circleProgress =
          smootherStep(
            p.constrain(
              progress /
                0.22,
              0,
              1
            )
          );

        p.push();

        const ctx =
          p.drawingContext as CanvasRenderingContext2D;

        ctx.shadowBlur =
          7 +
          circleProgress *
            12;

        ctx.shadowColor =
          "rgba(84,227,142,0.42)";

        p.noFill();

        p.stroke(
          84,
          227,
          142,
          circleProgress *
            255
        );

        p.strokeWeight(2.4);

        p.ellipse(
          cx,
          cy,
          72 *
            circleProgress,
          72 *
            circleProgress
        );

        ctx.shadowBlur = 0;

        const checkProgress =
          smootherStep(
            p.constrain(
              p.map(
                progress,
                0.10,
                0.34,
                0,
                1
              ),
              0,
              1
            )
          );

        drawAnimatedCheck(
          cx,
          cy,
          checkProgress
        );

        p.pop();

        const textProgress =
          smootherStep(
            p.constrain(
              p.map(
                progress,
                0.20,
                0.48,
                0,
                1
              ),
              0,
              1
            )
          );

        p.push();

        p.textAlign(
          p.CENTER,
          p.CENTER
        );

        p.textStyle(
          p.BOLD
        );

        p.textSize(
          p.constrain(
            glass.w *
              0.064,
            21,
            29
          )
        );

        p.fill(
          247,
          248,
          250,
          textProgress *
            255
        );

        p.text(
          "Order sent",
          cx,
          cy + 76
        );

        p.textStyle(
          p.NORMAL
        );

        p.textSize(
          p.constrain(
            glass.w *
              0.029,
            10,
            12
          )
        );

        p.fill(
          185,
          192,
          201,
          textProgress *
            220
        );

        p.text(
          "Saffron House POS confirmed receipt",
          cx,
          cy + 108
        );

        p.textFont(
          'SFMono-Regular, Menlo, Monaco, Consolas, monospace'
        );

        p.textSize(9.5);

        p.fill(
          84,
          227,
          142,
          textProgress *
            220
        );

        p.text(
          "ORDER  •  RWN-2471",
          cx,
          cy + 137
        );

        p.pop();
      }

      function drawAnimatedCheck(
        cx: number,
        cy: number,
        progress: number
      ) {
        if (
          progress <= 0
        ) {
          return;
        }

        const x1 =
          cx - 15;

        const y1 =
          cy;

        const x2 =
          cx - 5;

        const y2 =
          cy + 11;

        const x3 =
          cx + 18;

        const y3 =
          cy - 15;

        p.stroke(
          84,
          227,
          142,
          255
        );

        p.strokeWeight(4);

        p.strokeCap(
          p.ROUND
        );

        if (
          progress <=
          0.42
        ) {
          const phaseProgress =
            progress /
            0.42;

          p.line(
            x1,
            y1,
            p.lerp(
              x1,
              x2,
              phaseProgress
            ),
            p.lerp(
              y1,
              y2,
              phaseProgress
            )
          );
        } else {
          p.line(
            x1,
            y1,
            x2,
            y2
          );

          const phaseProgress =
            p.map(
              progress,
              0.42,
              1,
              0,
              1
            );

          p.line(
            x2,
            y2,
            p.lerp(
              x2,
              x3,
              phaseProgress
            ),
            p.lerp(
              y2,
              y3,
              phaseProgress
            )
          );
        }
      }

      /* ======================================================
         MIC
      ====================================================== */

      function drawMic(
        speech: {
          active: boolean;
          amount: number;
          opacity?: number;
        }
      ) {
        const cx =
          glass.x +
          glass.w / 2;

        const cy =
          glass.y +
          glass.h -
          glass.w *
            0.11;

        const opacity =
          speech.opacity ??
          1;

        drawMicPulse(
          cx,
          cy,
          speech,
          opacity
        );

        p.push();

        const buttonSize =
          p.constrain(
            glass.w *
              0.115,
            44,
            54
          );

        p.fill(
          248,
          249,
          250,
          opacity *
            255
        );

        p.noStroke();

        p.ellipse(
          cx,
          cy,
          buttonSize,
          buttonSize
        );

        p.stroke(
          10,
          14,
          18,
          opacity *
            255
        );

        p.strokeWeight(2);

        p.noFill();

        const scale =
          buttonSize / 54;

        p.rect(
          cx -
            4.5 *
              scale,
          cy -
            10 *
              scale,
          9 * scale,
          16 * scale,
          6
        );

        p.arc(
          cx,
          cy,
          20 * scale,
          20 * scale,
          0,
          p.PI
        );

        p.line(
          cx,
          cy +
            11 *
              scale,
          cx,
          cy +
            17 *
              scale
        );

        p.pop();
      }

      function drawMicPulse(
        cx: number,
        cy: number,
        speech: {
          active: boolean;
          amount: number;
        },
        opacity = 1
      ) {
        const ctx =
          p.drawingContext as CanvasRenderingContext2D;

        const buttonRadius =
          p.constrain(
            glass.w *
              0.0575,
            22,
            27
          );

        const extra =
          speech.active
            ? p.map(
                speech.amount,
                0.15,
                1,
                2,
                8,
                true
              )
            : 2;

        const radius =
          buttonRadius +
          extra;

        const thickness =
          speech.active
            ? p.map(
                speech.amount,
                0.15,
                1,
                2.8,
                4,
                true
              )
            : 2.7;

        ctx.save();

        let gradient:
          CanvasGradient;

        if (
          typeof
            ctx.createConicGradient ===
          "function"
        ) {
          gradient =
            ctx.createConicGradient(
              -Math.PI / 2,
              cx,
              cy
            );

          gradient.addColorStop(
            0,
            COLORS.cyan
          );

          gradient.addColorStop(
            0.22,
            "#5BE7E7"
          );

          gradient.addColorStop(
            0.40,
            "#C0F0EA"
          );

          gradient.addColorStop(
            0.51,
            "#F4E5DE"
          );

          gradient.addColorStop(
            0.65,
            "#FFB0A4"
          );

          gradient.addColorStop(
            0.82,
            COLORS.salmon
          );

          gradient.addColorStop(
            1,
            COLORS.cyan
          );
        } else {
          gradient =
            ctx.createLinearGradient(
              cx - radius,
              cy,
              cx + radius,
              cy
            );

          gradient.addColorStop(
            0,
            COLORS.cyan
          );

          gradient.addColorStop(
            0.5,
            "#F4E5DE"
          );

          gradient.addColorStop(
            1,
            COLORS.salmon
          );
        }

        ctx.globalAlpha =
          opacity;

        ctx.strokeStyle =
          gradient;

        ctx.lineWidth =
          thickness;

        ctx.shadowBlur =
          speech.active
            ? 4 +
              speech.amount *
                2.5
            : 3;

        ctx.shadowColor =
          "rgba(255,180,170,0.38)";

        ctx.beginPath();

        ctx.arc(
          cx,
          cy,
          radius,
          0,
          Math.PI * 2
        );

        ctx.stroke();

        ctx.restore();
      }

      /* ======================================================
         HELPERS
      ====================================================== */

      function roundedRectPath(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        r: number
      ) {
        const radius =
          Math.min(
            r,
            w / 2,
            h / 2
          );

        ctx.beginPath();

        ctx.moveTo(
          x + radius,
          y
        );

        ctx.lineTo(
          x +
            w -
            radius,
          y
        );

        ctx.quadraticCurveTo(
          x + w,
          y,
          x + w,
          y + radius
        );

        ctx.lineTo(
          x + w,
          y +
            h -
            radius
        );

        ctx.quadraticCurveTo(
          x + w,
          y + h,
          x +
            w -
            radius,
          y + h
        );

        ctx.lineTo(
          x + radius,
          y + h
        );

        ctx.quadraticCurveTo(
          x,
          y + h,
          x,
          y +
            h -
            radius
        );

        ctx.lineTo(
          x,
          y + radius
        );

        ctx.quadraticCurveTo(
          x,
          y,
          x + radius,
          y
        );

        ctx.closePath();
      }

      function roundedRectClip(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        r: number
      ) {
        roundedRectPath(
          ctx,
          x,
          y,
          w,
          h,
          r
        );

        ctx.clip();
      }

      function smootherStep(
        x: number
      ) {
        x =
          p.constrain(
            x,
            0,
            1
          );

        return (
          x *
          x *
          x *
          (
            x *
            (
              x *
                6 -
              15
            ) +
            10
          )
        );
      }

      /*
        Resize canvas to its React parent,
        NOT to windowWidth/windowHeight.
      */

      p.windowResized = () => {
        const size =
          getContainerSize();

        p.resizeCanvas(
          size.width,
          size.height
        );
      };
    };

    const instance =
      new p5(
        sketch,
        containerRef.current
      );

    /*
      ResizeObserver matters because your
      Tailwind grid can change size even when
      windowResized hasn't fired.
    */

    const observer =
      new ResizeObserver(() => {
        const el =
          containerRef.current;

        if (!el) return;

        instance.resizeCanvas(
          el.clientWidth,
          el.clientHeight
        );
      });

    observer.observe(
      containerRef.current
    );

    return () => {
      observer.disconnect();
      instance.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative
        h-[680px]
        w-full
        overflow-hidden
        bg-black
        sm:h-[720px]
        lg:h-[760px]
      "
    />
  );
}
