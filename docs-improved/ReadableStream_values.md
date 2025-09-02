# ReadableStream.values API 兼容性数据

## 基本信息

- **API名称**: `ReadableStream.values`
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#readablestream)
- **标签**: `web-features:async-iterable-streams`

## 使用示例

### 基本用法

```javascript
// ReadableStream.values 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReadableStream.values API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 124 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.35 |  |
| Edge | 同主版本 |  |
| Firefox | 110 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.5.0 |  |
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

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 124

### Deno

- **支持版本**: 1.35

### Firefox

- **支持版本**: 110

### Node.js

- **支持版本**: 16.5.0

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReadableStream.values是否支持
function isReadableStreamValuesSupported() {
    return 'values' in readablestream && typeof readablestream.values === 'function';
}

if (isReadableStreamValuesSupported()) {
    console.log('ReadableStream.values 支持');
    // 使用ReadableStream.values
} else {
    console.log('ReadableStream.values 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReadableStream.values polyfill
if (!readablestream.values) {
    // 在这里添加polyfill实现
    console.log('加载ReadableStream.values polyfill');
}
```

