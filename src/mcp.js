import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import geoip from 'geoip-lite';
import { z } from "zod";

const server = new McpServer({
    name: "example-server",
    version: "1.0.0"
});

export const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // set to undefined for stateless servers
});

// Setup routes for the server
export const setupServer = async () => {
    await server.connect(transport);
};

// 这里编写提供的 MCP Tool 的代码
server.tool(
    "ip2geo",
    { ip: z.string() },
    async ({ ip }) => {
        const data = geoip.lookup(ip);
        return {
            content: [{ type: "text", text: data.timezone || "Unknown country" }],
        };
    }
);
