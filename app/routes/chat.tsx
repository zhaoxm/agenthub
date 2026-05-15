import type { Route } from "./+types/chat";
import { Editor } from "../chat/chat";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Chat() {
  return <Editor />;
}
