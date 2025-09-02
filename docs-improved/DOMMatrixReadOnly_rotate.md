# DOMMatrixReadOnly.rotate API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrixReadOnly.rotate`
- **MDN文档**: [DOMMatrixReadOnly.rotate](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/rotate)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dommatrixreadonly-rotate)
- **标签**: `web-features:dom-geometry`
- **描述**: `rotate()`

## 使用示例

### 基本用法

```javascript
// DOMMatrixReadOnly.rotate 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrixReadOnly.rotate API');
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
// 检查DOMMatrixReadOnly.rotate是否支持
function isDOMMatrixReadOnlyRotateSupported() {
    return 'rotate' in dommatrixreadonly && typeof dommatrixreadonly.rotate === 'function';
}

if (isDOMMatrixReadOnlyRotateSupported()) {
    console.log('DOMMatrixReadOnly.rotate 支持');
    // 使用DOMMatrixReadOnly.rotate
} else {
    console.log('DOMMatrixReadOnly.rotate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrixReadOnly.rotate polyfill
if (!dommatrixreadonly.rotate) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrixReadOnly.rotate polyfill');
}
```

