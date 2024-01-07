import express from 'express';
import rateLimit from 'express-rate-limit'
import geoip from 'geoip-lite';

const app = express();

// 限制 IP 访问频率
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 一分钟内
  max: 300, // 最多访问 300 次
  message: '访问过于频繁，请稍后再试。',
});

// 应用限制 IP 访问频率中间件
app.use(limiter);

// JSON 解析
app.use(express.json())

// cors 跨域
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  // next
  next();
});

// 当客户端以get方式访问/路由时
app.get("/", (req, res) => {
  res.send("Hello Express");
});

// 查询
app.post("/ip2geo", (req, res) => {
  const { ip } = req.body
  const data =  geoip.lookup(ip)
  res.send({
    code: 200,
    message: 'success',
    data: data
  });
});

// 程序监听3000端口
app.listen(3000, () => {
  console.log('服务器已启动，端口号为 3000');
});