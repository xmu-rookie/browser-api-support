# DOMRect.fromRect_static API 兼容性数据

## 基本信息

- **API名称**: `DOMRect.fromRect_static`
- **MDN文档**: [DOMRect.fromRect_static](https://developer.mozilla.org/docs/Web/API/DOMRect/fromRect_static)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-domrect-fromrect)
- **标签**: `web-features:dom-geometry`
- **描述**: `fromRect()` static method

## 使用示例

### 基本用法

```javascript
// DOMRect.fromRect_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMRect.fromRect_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
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

- **支持版本**: 69

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMRect.fromRect_static是否支持
function isDOMRectFromRect_staticSupported() {
    return 'fromRect_static' in domrect && typeof domrect.fromRect_static === 'function';
}

if (isDOMRectFromRect_staticSupported()) {
    console.log('DOMRect.fromRect_static 支持');
    // 使用DOMRect.fromRect_static
} else {
    console.log('DOMRect.fromRect_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMRect.fromRect_static polyfill
if (!domrect.fromRect_static) {
    // 在这里添加polyfill实现
    console.log('加载DOMRect.fromRect_static polyfill');
}
```

