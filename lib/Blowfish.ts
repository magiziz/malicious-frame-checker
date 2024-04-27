import { createEvmClient, Languages } from "@blowfishxyz/api-client/v20230605";
import { getValidtedWebsiteUrl } from "./domain";

const client = createEvmClient({
  basePath: "https://api.blowfish.xyz",
  apiKey: process.env.BLOWFISH_API_KEY,
  chainFamily: "ethereum",
  chainNetwork: "mainnet",
});

export class Blowfish {
  static isMalicious = async (url: string) => {
    const validatedUrl = getValidtedWebsiteUrl(url);
    const domains = await client.scanDomains([validatedUrl]).catch(() => {
      return [];
    });

    if (!domains.length) {
      return { hasAnalyzed: false, malicious: false };
    }

    return { hasAnalyzed: true, malicious: (domains[0]?.riskScore || 0) > 0 };
  };
}
