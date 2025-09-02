# DOMMatrixReadOnly.scale3d API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrixReadOnly.scale3d`
- **MDN文档**: [DOMMatrixReadOnly.scale3d](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/scale3d)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dommatrixreadonly-scale3d)
- **标签**: `web-features:dom-geometry`
- **描述**: `scale3d()`

## 使用示例

### 基本用法

```javascript
// DOMMatrixReadOnly.scale3d 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrixReadOnly.scale3d API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 33 | Starting in Firefox 69, the first parameter (`scale`) is now optional with a default value of 1, per... |
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
  - Starting in Firefox 69, the first parameter (`scale`) is now optional with a default value of 1, per the specification. Previously it was required.

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMMatrixReadOnly.scale3d是否支持
function isDOMMatrixReadOnlyScale3dSupported() {
    return 'scale3d' in dommatrixreadonly && typeof dommatrixreadonly.scale3d === 'function';
}

if (isDOMMatrixReadOnlyScale3dSupported()) {
    console.log('DOMMatrixReadOnly.scale3d 支持');
    // 使用DOMMatrixReadOnly.scale3d
} else {
    console.log('DOMMatrixReadOnly.scale3d 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrixReadOnly.scale3d polyfill
if (!dommatrixreadonly.scale3d) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrixReadOnly.scale3d polyfill');
}
```

