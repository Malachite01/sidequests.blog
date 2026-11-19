import {
  index,
  route,
} from "@react-router/dev/routes";

// add routes here and in react-router.config.ts
export default [
  index("routes/home.tsx"),
  route("software", "routes/software.tsx"),
  route("hardware", "routes/hardware.tsx"),
  route("blog", "routes/blog.tsx"),
  route("showcase", "routes/showcase.tsx"),
  route("webRbuttons", "routes/webRbuttons.tsx"),
  route("guestbook", "routes/guestbook.tsx"),
];