import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// サーバーインスタンスを作成
const server = new McpServer({
  name: "genius-lyrics-search",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// ツールを登録
server.tool(
  "search",
  "Search for a song and get a link to its lyrics page on Genius.",
  {
    q: z.string().describe("The song title to search for."),
  },
  async (input) => {
    console.error(`[Server] Executing 'search' tool for: ${input.q}`);
    
    // ダミーのレスポンスを返す
    const dummyResponse = {
      song_title: "Dummy Song Title",
      genius_url: "https://genius.com/dummy-song-lyrics",
      lyrics_snippet: "These are not the real lyrics you are looking for..."
    };

    // ツールハンドラの戻り値は content プロパティを持つ必要がある
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(dummyResponse, null, 2),
        }
      ]
    };
  }
);

// サーバーを起動
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Genius Lyrics Search MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});