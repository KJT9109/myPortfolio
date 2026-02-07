import fs from "node:fs";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";

const FEED_URL = "https://kjt9109.tistory.com/rss"; // 필요하면 /rss/xml로 바꿔

async function main() {
  const res = await fetch(FEED_URL, { headers: { "User-Agent": "github-actions" } });
  if (!res.ok) throw new Error(`Failed to fetch RSS: ${res.status} ${res.statusText}`);
  const xml = await res.text();

  const parser = new XMLParser({ ignoreAttributes: false });
  const data = parser.parse(xml);

  const items = (data?.rss?.channel?.item ?? []).slice(0, 6).map((it) => ({
    title: it.title,
    link: it.link,
    pubDate: it.pubDate,
    description: (it.description || "").replace(/<[^>]*>/g, "").slice(0, 160),
  }));

  const outDir = path.join(process.cwd(), "public");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "posts.json"), JSON.stringify({ items }, null, 2), "utf-8");

  console.log(`Wrote ${items.length} posts to public/posts.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

