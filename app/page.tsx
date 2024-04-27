import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(`${process.env.HOST_URL}/api`);
  return {
    other: frameTags,
  };
}

export default function Home() {
  return null;
}
