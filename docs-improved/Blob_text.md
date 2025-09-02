# Blob.text API 兼容性数据

## 基本信息

- **API名称**: `Blob.text`
- **MDN文档**: [Blob.text](https://developer.mozilla.org/docs/Web/API/Blob/text)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#dom-blob-text)
- **标签**: `web-features:file`
- **描述**: `text()`

## 使用示例

### 基本用法

```javascript
// Blob.text 使用示例
// 请查阅MDN文档了解具体用法
console.log('Blob.text API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 76 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 15.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 14.5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 76

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 69

### Node.js

- **支持版本**: 15.7.0
- **支持版本**: 14.18.0
- **移除版本**: 15.0.0

### Safari

- **支持版本**: 14

### Safari iOS

- **支持版本**: 14.5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Blob.text是否支持
function isBlobTextSupported() {
    return 'text' in blob && typeof blob.text === 'function';
}

if (isBlobTextSupported()) {
    console.log('Blob.text 支持');
    // 使用Blob.text
} else {
    console.log('Blob.text 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Blob.text polyfill
if (!blob.text) {
    // 在这里添加polyfill实现
    console.log('加载Blob.text polyfill');
}
```

