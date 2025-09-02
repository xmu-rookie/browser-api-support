# Blob API 兼容性数据

## 基本信息

- **API名称**: `Blob`
- **MDN文档**: [Blob](https://developer.mozilla.org/docs/Web/API/Blob)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#blob-section)
- **标签**: `web-features:file`

## 使用示例

### 基本用法

```javascript
// Blob 使用示例
// 请查阅MDN文档了解具体用法
console.log('Blob API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 5

### deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 10

### Node.js


### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查Blob是否支持
function isBlobSupported() {
    return 'Blob' in window || typeof Blob !== 'undefined';
}

if (isBlobSupported()) {
    console.log('Blob 支持');
    // 使用Blob
} else {
    console.log('Blob 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Blob polyfill
if (!window.Blob) {
    // 在这里添加polyfill实现
    console.log('加载Blob polyfill');
}
```

