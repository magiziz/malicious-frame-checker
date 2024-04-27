/** @jsxImportSource frog/jsx */

import { Reaction } from "@/components/Reaction";
import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";
import path from "path";
import { readFileSync } from "fs";
import { Blowfish } from "@/lib/Blowfish";
import { Main } from "@/components/Main";

const fontPath = path.resolve("public/gt-medium.otf");
const gtMedium = readFileSync(fontPath);

const app = new Frog({
  basePath: "/api",
  imageOptions: {
    fonts: [
      {
        name: "gt-medium",
        data: gtMedium,
        style: "normal",
        weight: 500,
      },
    ],
  },
});

app.frame("/", async (c) => {
  return c.res({
    image: <Main title="Enter website URL below 👇" />,
    intents: [
      <TextInput placeholder="Website URL..." />,
      <Button action="/check">🔍 Check</Button>,
    ],
  });
});

app.frame("/check", async (c) => {
  const { inputText } = c;

  const { hasAnalyzed, malicious } = await Blowfish.isMalicious(
    inputText as string
  );

  if (!hasAnalyzed) {
    return c.res({
      image: (
        <Main title="Analysis failed 😒. Please try another website or check back later" />
      ),
      intents: [<Button action="/">🔄 Try again</Button>],
    });
  }

  return c.res({
    image: <Reaction isMalicious={malicious} />,
    intents: [<Button action="/">🔄 Reset</Button>],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
