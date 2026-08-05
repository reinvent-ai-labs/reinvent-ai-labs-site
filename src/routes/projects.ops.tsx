import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/ops")({
  beforeLoad: () => {
    throw redirect({ to: "/projects" });
  },
});
