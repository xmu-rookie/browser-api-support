# Blob.bytes API 兼容性数据

## 基本信息

- **API名称**: `Blob.bytes`
- **MDN文档**: [Blob.bytes](https://developer.mozilla.org/docs/Web/API/Blob/bytes)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#dom-blob-bytes)
- **标签**: `web-features:file`

## 使用示例

### 基本用法

```javascript
// Blob.bytes 使用示例
// 请查阅MDN文档了解具体用法
console.log('Blob.bytes API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.1.9 |  |
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.45 |  |
| Edge | 同主版本 |  |
| Firefox | 128 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 22.3.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.1.9

### Chrome

- **支持版本**: 不支持

### Deno

- **支持版本**: 1.45

### Firefox

- **支持版本**: 128

### Node.js

- **支持版本**: 22.3.0
- **支持版本**: 20.16.0
- **移除版本**: 21.0.0

### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查Blob.bytes是否支持
function isBlobBytesSupported() {
    return 'bytes' in blob && typeof blob.bytes === 'function';
}

if (isBlobBytesSupported()) {
    console.log('Blob.bytes 支持');
    // 使用Blob.bytes
} else {
    console.log('Blob.bytes 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Blob.bytes polyfill
if (!blob.bytes) {
    // 在这里添加polyfill实现
    console.log('加载Blob.bytes polyfill');
}
```

