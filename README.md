# geolite-server-mcp

简单地理信息转换服务 支持 MCP

## 客户端配置文件

```json
{
  "mcpServers": {
    "geoLocationService": {
      "name": "地理位置服务",
      "type": "streamableHttp",
      "description": "提供 IP 地址转换为地理位置信息",
      "isActive": true,
      "baseUrl": "http://localhost:3000/mcp",
      "disabledTools": []
    }
  }
}
```