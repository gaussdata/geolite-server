# geolite-server-mcp

简单地理位置服务，提供 IP 地址转换为地理位置信息，支持 MCP Server 模式

## 配置文件

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

## 效果展示

![](https://www.gausszhou.top/static/data/i/github/geolite-server-mcp.webp)