# DOMMatrixReadOnly.scale API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrixReadOnly.scale`
- **MDN文档**: [DOMMatrixReadOnly.scale](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/scale)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dommatrixreadonly-scale)
- **标签**: `web-features:dom-geometry`
- **描述**: `scale()`

## 使用示例

### 基本用法

```javascript
// DOMMatrixReadOnly.scale 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrixReadOnly.scale API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 33 | Firefox 69 introduced support for the modern six-parameter syntax for `scale()`. Previously, it only... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 33
- **注意事项**:
  - Firefox 69 introduced support for the modern six-parameter syntax for `scale()`. Previously, it only supported the older three-parameter syntax: `scale(scaleX[, originX][, originY]]])`.

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMMatrixReadOnly.scale是否支持
function isDOMMatrixReadOnlyScaleSupported() {
    return 'scale' in dommatrixreadonly && typeof dommatrixreadonly.scale === 'function';
}

if (isDOMMatrixReadOnlyScaleSupported()) {
    console.log('DOMMatrixReadOnly.scale 支持');
    // 使用DOMMatrixReadOnly.scale
} else {
    console.log('DOMMatrixReadOnly.scale 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrixReadOnly.scale polyfill
if (!dommatrixreadonly.scale) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrixReadOnly.scale polyfill');
}
```

