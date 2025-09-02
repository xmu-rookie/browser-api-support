# DOMRectReadOnly.left API 兼容性数据

## 基本信息

- **API名称**: `DOMRectReadOnly.left`
- **MDN文档**: [DOMRectReadOnly.left](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/left)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-domrectreadonly-left)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMRectReadOnly.left 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMRectReadOnly.left API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 9.5 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 2 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 9.5

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4

### WebView Android

- **支持版本**: 2

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMRectReadOnly.left是否支持
function isDOMRectReadOnlyLeftSupported() {
    return 'left' in domrectreadonly && typeof domrectreadonly.left === 'function';
}

if (isDOMRectReadOnlyLeftSupported()) {
    console.log('DOMRectReadOnly.left 支持');
    // 使用DOMRectReadOnly.left
} else {
    console.log('DOMRectReadOnly.left 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMRectReadOnly.left polyfill
if (!domrectreadonly.left) {
    // 在这里添加polyfill实现
    console.log('加载DOMRectReadOnly.left polyfill');
}
```

