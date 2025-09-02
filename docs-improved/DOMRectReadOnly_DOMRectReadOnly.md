# DOMRectReadOnly.DOMRectReadOnly API 兼容性数据

## 基本信息

- **API名称**: `DOMRectReadOnly.DOMRectReadOnly`
- **MDN文档**: [DOMRectReadOnly.DOMRectReadOnly](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/DOMRectReadOnly)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-domrectreadonly-domrectreadonly)
- **标签**: `web-features:dom-geometry`
- **描述**: `DOMRectReadOnly()` constructor

## 使用示例

### 基本用法

```javascript
// DOMRectReadOnly.DOMRectReadOnly 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMRectReadOnly.DOMRectReadOnly API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 62 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 62

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMRectReadOnly.DOMRectReadOnly是否支持
function isDOMRectReadOnlyDOMRectReadOnlySupported() {
    return 'DOMRectReadOnly' in domrectreadonly && typeof domrectreadonly.DOMRectReadOnly === 'function';
}

if (isDOMRectReadOnlyDOMRectReadOnlySupported()) {
    console.log('DOMRectReadOnly.DOMRectReadOnly 支持');
    // 使用DOMRectReadOnly.DOMRectReadOnly
} else {
    console.log('DOMRectReadOnly.DOMRectReadOnly 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMRectReadOnly.DOMRectReadOnly polyfill
if (!domrectreadonly.DOMRectReadOnly) {
    // 在这里添加polyfill实现
    console.log('加载DOMRectReadOnly.DOMRectReadOnly polyfill');
}
```

