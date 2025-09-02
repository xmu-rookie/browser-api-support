# WritableStream.WritableStream API 兼容性数据

## 基本信息

- **API名称**: `WritableStream.WritableStream`
- **MDN文档**: [WritableStream.WritableStream](https://developer.mozilla.org/docs/Web/API/WritableStream/WritableStream)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ref-for-ws-constructor④)
- **标签**: `web-features:streams`
- **描述**: `WritableStream()` constructor

## 使用示例

### 基本用法

```javascript
// WritableStream.WritableStream 使用示例
// 请查阅MDN文档了解具体用法
console.log('WritableStream.WritableStream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 16 |  |
| Firefox | 100 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 47 |  |
| Opera Android | 44 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 59

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 100

### Node.js

- **支持版本**: 16.5.0

### Opera

- **支持版本**: 47

### Opera Android

- **支持版本**: 44

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查WritableStream.WritableStream是否支持
function isWritableStreamWritableStreamSupported() {
    return 'WritableStream' in writablestream && typeof writablestream.WritableStream === 'function';
}

if (isWritableStreamWritableStreamSupported()) {
    console.log('WritableStream.WritableStream 支持');
    // 使用WritableStream.WritableStream
} else {
    console.log('WritableStream.WritableStream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WritableStream.WritableStream polyfill
if (!writablestream.WritableStream) {
    // 在这里添加polyfill实现
    console.log('加载WritableStream.WritableStream polyfill');
}
```

