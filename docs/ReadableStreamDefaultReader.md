# ReadableStreamDefaultReader API 兼容性数据

## 基本信息

- **API名称**: `ReadableStreamDefaultReader`
- **MDN文档**: [ReadableStreamDefaultReader](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#default-reader-class)
- **标签**: `web-features:streams`

## 使用示例

### 基本用法

```javascript
// ReadableStreamDefaultReader 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReadableStreamDefaultReader API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| deno | 未知 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 43

### deno


### Firefox

- **支持版本**: 65

### Node.js


### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReadableStreamDefaultReader是否支持
function isReadableStreamDefaultReaderSupported() {
    return 'ReadableStreamDefaultReader' in window || typeof ReadableStreamDefaultReader !== 'undefined';
}

if (isReadableStreamDefaultReaderSupported()) {
    console.log('ReadableStreamDefaultReader 支持');
    // 使用ReadableStreamDefaultReader
} else {
    console.log('ReadableStreamDefaultReader 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReadableStreamDefaultReader polyfill
if (!window.ReadableStreamDefaultReader) {
    // 在这里添加polyfill实现
    console.log('加载ReadableStreamDefaultReader polyfill');
}
```

