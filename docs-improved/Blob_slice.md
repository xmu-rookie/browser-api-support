# Blob.slice API 兼容性数据

## 基本信息

- **API名称**: `Blob.slice`
- **MDN文档**: [Blob.slice](https://developer.mozilla.org/docs/Web/API/Blob/slice)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#dfn-slice)
- **标签**: `web-features:file`
- **描述**: `slice()`

## 使用示例

### 基本用法

```javascript
// Blob.slice 使用示例
// 请查阅MDN文档了解具体用法
console.log('Blob.slice API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 21 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 13 | Before Firefox 12, there was a bug that affected the behavior of `Blob.slice()`; it did not work for... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 15.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 21
- **支持版本**: 5
- **移除版本**: 25
- **前缀**: webkit

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 13
- **注意事项**:
  - Before Firefox 12, there was a bug that affected the behavior of `Blob.slice()`; it did not work for `start` and `end` positions outside the range of signed 64-bit values; it has now been fixed to support unsigned 64-bit values.
- **支持版本**: 5
- **移除版本**: 13
- **前缀**: moz

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 15.7.0
- **支持版本**: 14.18.0
- **移除版本**: 15.0.0

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 7
- **支持版本**: 6
- **移除版本**: 7
- **前缀**: webkit

## 兼容性检查代码

### 特性检测

```javascript
// 检查Blob.slice是否支持
function isBlobSliceSupported() {
    return 'slice' in blob && typeof blob.slice === 'function';
}

if (isBlobSliceSupported()) {
    console.log('Blob.slice 支持');
    // 使用Blob.slice
} else {
    console.log('Blob.slice 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Blob.slice polyfill
if (!blob.slice) {
    // 在这里添加polyfill实现
    console.log('加载Blob.slice polyfill');
}
```

