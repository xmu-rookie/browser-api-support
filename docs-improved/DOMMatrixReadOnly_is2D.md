# DOMMatrixReadOnly.is2D API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrixReadOnly.is2D`
- **MDN文档**: [DOMMatrixReadOnly.is2D](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/is2D)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dommatrixreadonly-is2d)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMMatrixReadOnly.is2D 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrixReadOnly.is2D API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 33 |  |
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

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMMatrixReadOnly.is2D是否支持
function isDOMMatrixReadOnlyIs2DSupported() {
    return 'is2D' in dommatrixreadonly && typeof dommatrixreadonly.is2D === 'function';
}

if (isDOMMatrixReadOnlyIs2DSupported()) {
    console.log('DOMMatrixReadOnly.is2D 支持');
    // 使用DOMMatrixReadOnly.is2D
} else {
    console.log('DOMMatrixReadOnly.is2D 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrixReadOnly.is2D polyfill
if (!dommatrixreadonly.is2D) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrixReadOnly.is2D polyfill');
}
```

