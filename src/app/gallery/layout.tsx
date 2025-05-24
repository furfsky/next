import type { Metadata } from "next";
import Gallery from "./page.tsx";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryLayout() {
  return <Gallery />;
}
