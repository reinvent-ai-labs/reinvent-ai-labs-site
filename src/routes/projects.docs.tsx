import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/docs")({
  beforeLoad: () => {
    throw redirect({ to: "/projects" });
  },
});
