# Response.body.readable_byte_stream API 兼容性数据

## 基本信息

- **API名称**: `Response.body.readable_byte_stream`
- **标签**: `web-features:fetch`
- **描述**: `body` is a readable byte stream

## 使用示例

### 基本用法

```javascript
// Response.body.readable_byte_stream 使用示例
// 请查阅MDN文档了解具体用法
console.log('Response.body.readable_byte_stream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 不支持 |  |
| Chrome | 116 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 102 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 不支持

### Chrome

- **支持版本**: 116

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 102

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Response.body.readable_byte_stream是否支持
function isResponseBodySupported() {
    return 'body' in response && typeof response.body === 'function';
}

if (isResponseBodySupported()) {
    console.log('Response.body.readable_byte_stream 支持');
    // 使用Response.body.readable_byte_stream
} else {
    console.log('Response.body.readable_byte_stream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Response.body.readable_byte_stream polyfill
if (!response.body) {
    // 在这里添加polyfill实现
    console.log('加载Response.body.readable_byte_stream polyfill');
}
```

