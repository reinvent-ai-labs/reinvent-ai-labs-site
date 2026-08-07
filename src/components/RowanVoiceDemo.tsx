import { useEffect, useRef } from "react";

type Speaker = "rowan" | "customer";

type ConversationMessage = {
  speaker: Speaker;
  text: string;
};

type TimelineMessage = ConversationMessage & {
  words: string[];
  start: number;
  duration: number;
  end: number;
};

type JsonTokenType =
  | "key"
  | "string"
  | "number"
  | "boolean"
  | "punct";

type JsonToken = {
  text: string;
  type: JsonTokenType;
};

type SpeechState = {
  active: boolean;
  amount: number;
  opacity?: number;
};

type Glass = {
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;
};

const CYAN = "#36DEDE";
const SALMON = "#FA8072";
const GREEN = "#54E38E";

/* ============================================================
   CONVERSATION
============================================================ */

const conversation: ConversationMessage[] = [
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

/* ============================================================
   JSON TOKENS
============================================================ */

const JSON_LINES: JsonToken[][] = [
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

/* ============================================================
   TIMING
============================================================ */

const AFTER_CONVERSATION_PAUSE = 400;

const TRANSCRIPT_FADE_DURATION = 850;

const JSON_ENTRANCE_DELAY = 180;
const JSON_BUILD_DURATION = 3100;
const JSON_HOLD_DURATION = 650;
const JSON_FADE_DURATION = 700;

const SEND_DURATION = 1650;

const SUCCESS_DURATION = 3200;

const LOOP_PAUSE = 1000;

/* ============================================================
   COMPONENT
============================================================ */

export function RowanVoiceDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const ctx = context;

    let width = 1;
    let height = 1;

    let animationFrame = 0;

    let sceneStart = performance.now();

    let scrollY = 0;
    let targetScrollY = 0;

    const timeline = buildTimeline();

    const conversationEnd =
      timeline[timeline.length - 1]?.end ?? 0;

    const transcriptFadeStart =
      conversationEnd + AFTER_CONVERSATION_PAUSE;

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

    const totalDuration =
      successStart +
      SUCCESS_DURATION +
      LOOP_PAUSE;

    const totalJsonCharacters =
      getJSONCharacterCount();

    /* ========================================================
       RESIZE
    ======================================================== */

    function resize() {
      const rect =
        container.getBoundingClientRect();

      width =
        Math.max(
          rect.width,
          1
        );

      height =
        Math.max(
          rect.height,
          1
        );

      const dpr =
        Math.min(
          window.devicePixelRatio || 1,
          2
        );

      canvas.width =
        Math.floor(
          width * dpr
        );

      canvas.height =
        Math.floor(
          height * dpr
        );

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    }

    const resizeObserver =
      new ResizeObserver(() => {
        resize();
      });

    resizeObserver.observe(
      container
    );

    resize();

    /* ========================================================
       MAIN LOOP
    ======================================================== */

    function frame(now: number) {
      let elapsed =
        now -
        sceneStart;

      if (
        elapsed >
        totalDuration
      ) {
        sceneStart =
          now;

        elapsed = 0;

        scrollY = 0;
        targetScrollY = 0;
      }

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      ctx.fillStyle =
        "#000000";

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      const glass =
        getGlass();

      const phase =
        getPhase(
          elapsed
        );

      const speech =
        getSpeechState(
          elapsed,
          now
        );

      drawGlass(
        glass,
        phase,
        elapsed
      );

      if (
        phase ===
        "conversation"
      ) {
        drawTranscript(
          glass,
          elapsed,
          1,
          0
        );

        drawMic(
          glass,
          speech
        );
      } else if (
        phase ===
        "transcriptFade"
      ) {
        drawTranscriptFade(
          glass,
          elapsed
        );
      } else if (
        phase ===
        "json"
      ) {
        drawJSON(
          glass,
          elapsed
        );
      } else if (
        phase ===
        "jsonFade"
      ) {
        drawJSONFade(
          glass,
          elapsed
        );
      } else if (
        phase ===
        "sending"
      ) {
        drawSending(
          glass,
          elapsed
        );
      } else {
        drawSuccess(
          glass,
          elapsed
        );
      }

      animationFrame =
        requestAnimationFrame(
          frame
        );
    }

    animationFrame =
      requestAnimationFrame(
        frame
      );

    /* ========================================================
       GLASS LAYOUT
    ======================================================== */

    function getGlass(): Glass {
      /*
        Tall / phone-like visual.

        Roughly 0.58 width : 1 height.
      */

      let glassHeight =
        Math.min(
          height * 0.94,
          720
        );

      let glassWidth =
        glassHeight *
        0.58;

      if (
        glassWidth >
        width * 0.90
      ) {
        glassWidth =
          width * 0.90;

        glassHeight =
          glassWidth /
          0.58;
      }

      return {
        w:
          glassWidth,

        h:
          glassHeight,

        x:
          width / 2 -
          glassWidth / 2,

        y:
          height / 2 -
          glassHeight / 2,

        r:
          Math.max(
            24,
            glassWidth *
            0.07
          ),
      };
    }

    /* ========================================================
       PHASE
    ======================================================== */

    function getPhase(
      elapsed: number
    ) {
      if (
        elapsed <
        transcriptFadeStart
      ) {
        return "conversation";
      }

      if (
        elapsed <
        jsonStart
      ) {
        return "transcriptFade";
      }

      if (
        elapsed <
        jsonFadeStart
      ) {
        return "json";
      }

      if (
        elapsed <
        sendStart
      ) {
        return "jsonFade";
      }

      if (
        elapsed <
        successStart
      ) {
        return "sending";
      }

      return "success";
    }

    /* ========================================================
       GLASS
    ======================================================== */

    function drawGlass(
      glass: Glass,
      phase: string,
      elapsed: number
    ) {
      let codeMode = 0;

      if (
        phase === "json" ||
        phase === "jsonFade"
      ) {
        codeMode = 1;
      }

      if (
        phase === "sending"
      ) {
        const p =
          clamp(
            (
              elapsed -
              sendStart
            ) /
            520
          );

        codeMode =
          1 -
          smootherStep(p);
      }

      ctx.save();

      /*
        Main material
      */

      ctx.shadowBlur = 10;

      ctx.shadowColor =
        "rgba(255,255,255,0.025)";

      ctx.fillStyle =
        "rgba(9,13,18,0.52)";

      ctx.strokeStyle =
        "rgba(235,242,255,0.17)";

      ctx.lineWidth =
        1;

      roundedRectPath(
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
        Neutral glass reflection
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
        0.16,
        "rgba(255,255,255,0.019)"
      );

      reflection.addColorStop(
        0.48,
        "rgba(255,255,255,0.003)"
      );

      reflection.addColorStop(
        1,
        "rgba(255,255,255,0.017)"
      );

      ctx.fillStyle =
        reflection;

      fillGlass(
        glass
      );

      /*
        ReInvent cyan:
        bottom-left, blended.
      */

      const cyanGradient =
        ctx.createLinearGradient(
          glass.x,
          glass.y +
          glass.h,
          glass.x +
          glass.w *
          0.76,
          glass.y +
          glass.h *
          0.24
        );

      cyanGradient.addColorStop(
        0,
        "rgba(54,222,222,0.11)"
      );

      cyanGradient.addColorStop(
        0.18,
        "rgba(54,222,222,0.055)"
      );

      cyanGradient.addColorStop(
        0.42,
        "rgba(54,222,222,0.014)"
      );

      cyanGradient.addColorStop(
        1,
        "rgba(54,222,222,0)"
      );

      ctx.fillStyle =
        cyanGradient;

      fillGlass(
        glass
      );

      /*
        ReInvent salmon:
        top-right, blended.
      */

      const salmonGradient =
        ctx.createLinearGradient(
          glass.x +
          glass.w,
          glass.y,
          glass.x +
          glass.w *
          0.24,
          glass.y +
          glass.h *
          0.76
        );

      salmonGradient.addColorStop(
        0,
        "rgba(250,128,114,0.105)"
      );

      salmonGradient.addColorStop(
        0.18,
        "rgba(250,128,114,0.052)"
      );

      salmonGradient.addColorStop(
        0.42,
        "rgba(250,128,114,0.013)"
      );

      salmonGradient.addColorStop(
        1,
        "rgba(250,128,114,0)"
      );

      ctx.fillStyle =
        salmonGradient;

      fillGlass(
        glass
      );

      /*
        During JSON, the ENTIRE glass darkens.

        There is no code card inside it.
      */

      if (
        codeMode >
        0
      ) {
        ctx.fillStyle =
          `rgba(0,0,0,${
            0.77 *
            codeMode
          })`;

        fillGlass(
          glass
        );
      }

      /*
        Premium glass top rim
      */

      const topEdge =
        ctx.createLinearGradient(
          glass.x,
          glass.y,
          glass.x +
          glass.w,
          glass.y
        );

      topEdge.addColorStop(
        0,
        "rgba(255,255,255,0)"
      );

      topEdge.addColorStop(
        0.15,
        "rgba(255,255,255,0.10)"
      );

      topEdge.addColorStop(
        0.50,
        "rgba(255,255,255,0.20)"
      );

      topEdge.addColorStop(
        0.85,
        "rgba(255,255,255,0.10)"
      );

      topEdge.addColorStop(
        1,
        "rgba(255,255,255,0)"
      );

      ctx.strokeStyle =
        topEdge;

      ctx.lineWidth =
        0.7;

      ctx.beginPath();

      ctx.moveTo(
        glass.x +
        28,
        glass.y +
        1
      );

      ctx.lineTo(
        glass.x +
        glass.w -
        28,
        glass.y +
        1
      );

      ctx.stroke();

      ctx.restore();
    }

    function fillGlass(
      glass: Glass
    ) {
      roundedRectPath(
        glass.x + 1,
        glass.y + 1,
        glass.w - 2,
        glass.h - 2,
        glass.r - 1
      );

      ctx.fill();
    }

    /* ========================================================
       TRANSCRIPT
    ======================================================== */

    function drawTranscript(
      glass: Glass,
      elapsed: number,
      opacity = 1,
      lift = 0
    ) {
      const margin =
        glass.w *
        0.068;

      const clipX =
        glass.x +
        margin;

      const clipY =
        glass.y +
        margin;

      const clipW =
        glass.w -
        margin * 2;

      const clipH =
        glass.h -
        glass.w *
        0.28;

      const blocks =
        timeline
          .filter(
            (message) =>
              elapsed >=
              message.start
          )
          .map(
            (message) =>
              buildTranscriptBlock(
                glass,
                message,
                elapsed
              )
          );

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
          22
        );

      scrollY +=
        (
          targetScrollY -
          scrollY
        ) *
        0.012;

      ctx.save();

      roundedRectPath(
        clipX,
        clipY,
        clipW,
        clipH,
        glass.r -
        8
      );

      ctx.clip();

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

    function buildTranscriptBlock(
      glass: Glass,
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
        clampBetween(
          glass.w *
          0.052,
          16,
          23
        );

      const lineHeight =
        fontSize *
        1.30;

      ctx.font =
        `700 ${fontSize}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`;

      const progress =
        clamp(
          (
            elapsed -
            message.start
          ) /
          message.duration
        );

      const wordPosition =
        progress *
        (
          message.words.length +
          1.8
        );

      const lines: {
        words: {
          text: string;
          index: number;
          width: number;
        }[];
        width: number;
      }[] = [];

      let line: {
        text: string;
        index: number;
        width: number;
      }[] = [];

      let lineWidth = 0;

      const spaceWidth =
        ctx.measureText(
          " "
        ).width;

      for (
        let i = 0;
        i <
        message.words.length;
        i++
      ) {
        const word =
          message.words[i];

        const wordWidth =
          ctx.measureText(
            word
          ).width;

        const projected =
          line.length === 0
            ? wordWidth
            : lineWidth +
              spaceWidth +
              wordWidth;

        if (
          projected >
            blockWidth &&
          line.length >
            0
        ) {
          lines.push({
            words:
              line,
            width:
              lineWidth,
          });

          line = [];
          lineWidth = 0;
        }

        line.push({
          text:
            word,
          index:
            i,
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
        line.length >
        0
      ) {
        lines.push({
          words:
            line,
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
      block: ReturnType<
        typeof buildTranscriptBlock
      >,
      y: number,
      globalOpacity: number
    ) {
      ctx.save();

      ctx.font =
        `700 ${block.fontSize}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`;

      ctx.textBaseline =
        "top";

      const spaceWidth =
        ctx.measureText(
          " "
        ).width;

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

        const lineY =
          y +
          lineIndex *
          block.lineHeight;

        for (
          const word of line.words
        ) {
          const relative =
            block.wordPosition -
            word.index;

          /*
            Wide overlapping reveal for smoother STT.
          */

          const reveal =
            clamp(
              relative /
              3.6
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

          ctx.fillStyle =
            `rgba(247,248,250,${
              eased *
              globalOpacity
            })`;

          ctx.fillText(
            word.text,
            cursorX,
            lineY +
            (
              1 -
              eased
            ) *
            0.25
          );

          cursorX +=
            word.width +
            spaceWidth;
        }
      }

      ctx.restore();
    }

    /* ========================================================
       TRANSCRIPT FADE
    ======================================================== */

    function drawTranscriptFade(
      glass: Glass,
      elapsed: number
    ) {
      const progress =
        clamp(
          (
            elapsed -
            transcriptFadeStart
          ) /
          TRANSCRIPT_FADE_DURATION
        );

      const eased =
        smootherStep(
          progress
        );

      drawTranscript(
        glass,
        conversationEnd,
        1 - eased,
        eased *
        18
      );

      if (
        progress <
        0.62
      ) {
        drawMic(
          glass,
          {
            active: false,
            amount: 0,
            opacity:
              1 -
              smootherStep(
                clamp(
                  progress /
                  0.62
                )
              ),
          }
        );
      }
    }

    /* ========================================================
       JSON
    ======================================================== */

    function drawJSON(
      glass: Glass,
      elapsed: number
    ) {
      const progress =
        clamp(
          (
            elapsed -
            jsonStart
          ) /
          JSON_BUILD_DURATION
        );

      /*
        Smooth progression.
        No blinking cursor.
      */

      const reveal =
        smootherStep(
          clamp(
            remap(
              progress,
              0.03,
              0.90,
              0,
              1
            )
          )
        );

      const visibleCharacters =
        Math.floor(
          totalJsonCharacters *
          reveal
        );

      const entrance =
        smootherStep(
          clamp(
            progress /
            0.10
          )
        );

      drawSyntaxJSON(
        glass,
        visibleCharacters,
        entrance,
        0
      );
    }

    function drawJSONFade(
      glass: Glass,
      elapsed: number
    ) {
      const progress =
        clamp(
          (
            elapsed -
            jsonFadeStart
          ) /
          JSON_FADE_DURATION
        );

      const eased =
        smootherStep(
          progress
        );

      /*
        JSON completely disappears before
        the POS transmission state.
      */

      drawSyntaxJSON(
        glass,
        totalJsonCharacters,
        1 - eased,
        eased *
        15
      );
    }

    function drawSyntaxJSON(
      glass: Glass,
      visibleCharacters: number,
      opacity: number,
      lift: number
    ) {
      ctx.save();

      const fontSize =
        clampBetween(
          glass.w *
          0.028,
          10,
          12.5
        );

      const lineHeight =
        fontSize *
        1.52;

      ctx.font =
        `500 ${fontSize}px SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace`;

      ctx.textBaseline =
        "top";

      /*
        Clip code to the single main glass.
      */

      roundedRectPath(
        glass.x + 8,
        glass.y + 8,
        glass.w - 16,
        glass.h - 16,
        glass.r - 8
      );

      ctx.clip();

      const startX =
        glass.x +
        glass.w *
        0.060;

      const startY =
        glass.y +
        glass.w *
        0.065 -
        lift;

      let charactersUsed = 0;

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

        const lineY =
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
            ctx.restore();
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

          ctx.fillStyle =
            getTokenColor(
              token.type,
              opacity
            );

          ctx.fillText(
            visibleText,
            cursorX,
            lineY
          );

          cursorX +=
            ctx.measureText(
              visibleText
            ).width;

          charactersUsed +=
            charsToShow;

          if (
            charsToShow <
            token.text.length
          ) {
            ctx.restore();
            return;
          }
        }

        charactersUsed +=
          1;
      }

      ctx.restore();
    }

    function getTokenColor(
      type: JsonTokenType,
      opacity: number
    ) {
      /*
        Actual code-style syntax palette.

        Keys = cyan
        Strings = salmon
        Numbers = ice blue
        Boolean = green
        Punctuation = cool gray
      */

      if (
        type === "key"
      ) {
        return `rgba(54,222,222,${opacity})`;
      }

      if (
        type === "string"
      ) {
        return `rgba(250,128,114,${opacity})`;
      }

      if (
        type === "number"
      ) {
        return `rgba(165,214,255,${opacity})`;
      }

      if (
        type === "boolean"
      ) {
        return `rgba(84,227,142,${opacity})`;
      }

      return `rgba(180,188,198,${opacity})`;
    }

    /* ========================================================
       SEND TO POS
    ======================================================== */

    function drawSending(
      glass: Glass,
      elapsed: number
    ) {
      const progress =
        clamp(
          (
            elapsed -
            sendStart
          ) /
          SEND_DURATION
        );

      const entrance =
        smootherStep(
          clamp(
            progress /
            0.28
          )
        );

      const centerX =
        glass.x +
        glass.w /
        2;

      const centerY =
        glass.y +
        glass.h *
        0.48;

      ctx.save();

      ctx.textAlign =
        "center";

      ctx.textBaseline =
        "middle";

      const fontSize =
        clampBetween(
          glass.w *
          0.050,
          17,
          22
        );

      ctx.font =
        `700 ${fontSize}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`;

      ctx.fillStyle =
        `rgba(247,248,250,${entrance})`;

      ctx.fillText(
        "Sending to restaurant POS",
        centerX,
        centerY
      );

      /*
        Minimal animated ellipsis.
      */

      const dots =
        Math.floor(
          performance.now() /
          320
        ) %
        4;

      ctx.font =
        `400 14px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`;

      ctx.fillStyle =
        `rgba(185,192,201,${
          entrance *
          0.72
        })`;

      ctx.fillText(
        ".".repeat(
          dots
        ),
        centerX,
        centerY + 31
      );

      ctx.restore();
    }

    /* ========================================================
       SUCCESS
    ======================================================== */

    function drawSuccess(
      glass: Glass,
      elapsed: number
    ) {
      const progress =
        clamp(
          (
            elapsed -
            successStart
          ) /
          SUCCESS_DURATION
        );

      const cx =
        glass.x +
        glass.w /
        2;

      const cy =
        glass.y +
        glass.h *
        0.41;

      /*
        Green circle
      */

      const circleProgress =
        smootherStep(
          clamp(
            progress /
            0.22
          )
        );

      ctx.save();

      ctx.shadowBlur =
        7 +
        circleProgress *
        12;

      ctx.shadowColor =
        "rgba(84,227,142,0.42)";

      ctx.strokeStyle =
        `rgba(84,227,142,${
          circleProgress
        })`;

      ctx.lineWidth =
        2.4;

      ctx.beginPath();

      ctx.arc(
        cx,
        cy,
        36 *
        circleProgress,
        0,
        Math.PI * 2
      );

      ctx.stroke();

      ctx.shadowBlur = 0;

      /*
        Animated check
      */

      const checkProgress =
        smootherStep(
          clamp(
            remap(
              progress,
              0.10,
              0.34,
              0,
              1
            )
          )
        );

      drawCheck(
        cx,
        cy,
        checkProgress
      );

      ctx.restore();

      /*
        Confirmation text
      */

      const textProgress =
        smootherStep(
          clamp(
            remap(
              progress,
              0.20,
              0.48,
              0,
              1
            )
          )
        );

      ctx.save();

      ctx.textAlign =
        "center";

      ctx.textBaseline =
        "middle";

      const titleSize =
        clampBetween(
          glass.w *
          0.065,
          23,
          29
        );

      ctx.font =
        `700 ${titleSize}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`;

      ctx.fillStyle =
        `rgba(247,248,250,${textProgress})`;

      ctx.fillText(
        "Order sent",
        cx,
        cy + 78
      );

      const subSize =
        clampBetween(
          glass.w *
          0.029,
          10,
          12.5
        );

      ctx.font =
        `400 ${subSize}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`;

      ctx.fillStyle =
        `rgba(185,192,201,${
          textProgress *
          0.90
        })`;

      ctx.fillText(
        "Saffron House POS confirmed receipt",
        cx,
        cy + 111
      );

      ctx.font =
        `500 9.5px SFMono-Regular, Menlo, Monaco, Consolas, monospace`;

      ctx.fillStyle =
        `rgba(84,227,142,${
          textProgress *
          0.90
        })`;

      ctx.fillText(
        "ORDER  •  RWN-2471",
        cx,
        cy + 140
      );

      ctx.restore();
    }

    function drawCheck(
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

      ctx.strokeStyle =
        GREEN;

      ctx.lineWidth =
        4;

      ctx.lineCap =
        "round";

      ctx.beginPath();

      if (
        progress <=
        0.42
      ) {
        const p =
          progress /
          0.42;

        ctx.moveTo(
          x1,
          y1
        );

        ctx.lineTo(
          lerp(
            x1,
            x2,
            p
          ),
          lerp(
            y1,
            y2,
            p
          )
        );
      } else {
        ctx.moveTo(
          x1,
          y1
        );

        ctx.lineTo(
          x2,
          y2
        );

        const p =
          remap(
            progress,
            0.42,
            1,
            0,
            1
          );

        ctx.lineTo(
          lerp(
            x2,
            x3,
            p
          ),
          lerp(
            y2,
            y3,
            p
          )
        );
      }

      ctx.stroke();
    }

    /* ========================================================
       MICROPHONE
    ======================================================== */

    function drawMic(
      glass: Glass,
      speech: SpeechState
    ) {
      const cx =
        glass.x +
        glass.w /
        2;

      const cy =
        glass.y +
        glass.h -
        glass.w *
        0.105;

      const opacity =
        speech.opacity ??
        1;

      const buttonSize =
        clampBetween(
          glass.w *
          0.115,
          44,
          54
        );

      drawMicRing(
        cx,
        cy,
        buttonSize,
        speech,
        opacity
      );

      ctx.save();

      ctx.globalAlpha =
        opacity;

      ctx.fillStyle =
        "#F8F9FA";

      ctx.beginPath();

      ctx.arc(
        cx,
        cy,
        buttonSize /
        2,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /*
        Mic glyph
      */

      const scale =
        buttonSize /
        54;

      ctx.strokeStyle =
        "#0A0E12";

      ctx.lineWidth =
        2;

      ctx.lineCap =
        "round";

      roundedRectPath(
        cx -
        4.5 *
        scale,
        cy -
        10 *
        scale,
        9 *
        scale,
        16 *
        scale,
        6
      );

      ctx.stroke();

      ctx.beginPath();

      ctx.arc(
        cx,
        cy,
        10 *
        scale,
        0,
        Math.PI
      );

      ctx.stroke();

      ctx.beginPath();

      ctx.moveTo(
        cx,
        cy +
        11 *
        scale
      );

      ctx.lineTo(
        cx,
        cy +
        17 *
        scale
      );

      ctx.stroke();

      ctx.restore();
    }

    function drawMicRing(
      cx: number,
      cy: number,
      buttonSize: number,
      speech: SpeechState,
      opacity: number
    ) {
      const extra =
        speech.active
          ? mapRange(
              speech.amount,
              0.15,
              1,
              2,
              8
            )
          : 2;

      const radius =
        buttonSize /
        2 +
        extra;

      const thickness =
        speech.active
          ? mapRange(
              speech.amount,
              0.15,
              1,
              2.8,
              4
            )
          : 2.7;

      ctx.save();

      ctx.globalAlpha =
        opacity;

      let gradient:
        CanvasGradient;

      if (
        typeof
        ctx.createConicGradient ===
        "function"
      ) {
        gradient =
          ctx.createConicGradient(
            -Math.PI /
            2,
            cx,
            cy
          );

        gradient.addColorStop(
          0,
          CYAN
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
          SALMON
        );

        gradient.addColorStop(
          1,
          CYAN
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
          CYAN
        );

        gradient.addColorStop(
          0.5,
          "#F4E5DE"
        );

        gradient.addColorStop(
          1,
          SALMON
        );
      }

      ctx.strokeStyle =
        gradient;

      ctx.lineWidth =
        thickness;

      /*
        Only a tiny surrounding bloom.
      */

      ctx.shadowBlur =
        speech.active
          ? 4 +
            speech.amount *
            2
          : 3;

      ctx.shadowColor =
        "rgba(255,180,170,0.36)";

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

    /* ========================================================
       TIMELINE
    ======================================================== */

    function buildTimeline(): TimelineMessage[] {
      const output:
        TimelineMessage[] = [];

      let cursor = 0;

      for (
        const message of conversation
      ) {
        const words =
          message.text
            .trim()
            .split(/\s+/);

        const msPerWord =
          message.speaker ===
          "rowan"
            ? 155
            : 165;

        const duration =
          Math.max(
            words.length *
            msPerWord,
            900
          );

        output.push({
          ...message,
          words,
          start:
            cursor,
          duration,
          end:
            cursor +
            duration,
        });

        cursor +=
          duration +
          430;
      }

      return output;
    }

    function getSpeechState(
      elapsed: number,
      now: number
    ): SpeechState {
      for (
        const message of timeline
      ) {
        if (
          elapsed >=
            message.start &&
          elapsed <=
            message.end
        ) {
          const t =
            now *
            0.0105;

          const energy =
            0.58 +
            Math.sin(t) *
            0.17 +
            Math.sin(
              t *
              2.23 +
              0.7
            ) *
            0.10 +
            Math.sin(
              t *
              4.17 +
              2.5
            ) *
            0.06;

          return {
            active: true,
            amount:
              clampBetween(
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

    /* ========================================================
       JSON COUNT
    ======================================================== */

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

    /* ========================================================
       HELPERS
    ======================================================== */

    function roundedRectPath(
      x: number,
      y: number,
      w: number,
      h: number,
      radius: number
    ) {
      const r =
        Math.min(
          radius,
          w / 2,
          h / 2
        );

      ctx.beginPath();

      ctx.moveTo(
        x + r,
        y
      );

      ctx.lineTo(
        x +
        w -
        r,
        y
      );

      ctx.quadraticCurveTo(
        x + w,
        y,
        x + w,
        y + r
      );

      ctx.lineTo(
        x + w,
        y +
        h -
        r
      );

      ctx.quadraticCurveTo(
        x + w,
        y + h,
        x +
        w -
        r,
        y + h
      );

      ctx.lineTo(
        x + r,
        y + h
      );

      ctx.quadraticCurveTo(
        x,
        y + h,
        x,
        y +
        h -
        r
      );

      ctx.lineTo(
        x,
        y + r
      );

      ctx.quadraticCurveTo(
        x,
        y,
        x + r,
        y
      );

      ctx.closePath();
    }

    function clamp(
      value: number
    ) {
      return Math.max(
        0,
        Math.min(
          1,
          value
        )
      );
    }

    function clampBetween(
      value: number,
      min: number,
      max: number
    ) {
      return Math.max(
        min,
        Math.min(
          max,
          value
        )
      );
    }

    function smootherStep(
      value: number
    ) {
      const x =
        clamp(
          value
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

    function lerp(
      start: number,
      end: number,
      value: number
    ) {
      return (
        start +
        (
          end -
          start
        ) *
        value
      );
    }

    function remap(
      value: number,
      inputMin: number,
      inputMax: number,
      outputMin: number,
      outputMax: number
    ) {
      return (
        outputMin +
        (
          value -
          inputMin
        ) /
        (
          inputMax -
          inputMin
        ) *
        (
          outputMax -
          outputMin
        )
      );
    }

    function mapRange(
      value: number,
      inputMin: number,
      inputMax: number,
      outputMin: number,
      outputMax: number
    ) {
      const normalized =
        clamp(
          (
            value -
            inputMin
          ) /
          (
            inputMax -
            inputMin
          )
        );

      return lerp(
        outputMin,
        outputMax,
        normalized
      );
    }

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative
        h-[650px]
        w-full
        overflow-hidden
        bg-black
        sm:h-[690px]
        lg:h-[720px]
      "
    >
      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          block
          h-full
          w-full
        "
      />
    </div>
  );
}
