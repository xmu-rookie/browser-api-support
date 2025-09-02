# DOMPoint.fromPoint_static API 兼容性数据

## 基本信息

- **API名称**: `DOMPoint.fromPoint_static`
- **MDN文档**: [DOMPoint.fromPoint_static](https://developer.mozilla.org/docs/Web/API/DOMPoint/fromPoint_static)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dompoint-frompoint)
- **标签**: `web-features:dom-geometry`
- **描述**: `fromPoint()` static method

## 使用示例

### 基本用法

```javascript
// DOMPoint.fromPoint_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMPoint.fromPoint_static API');
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
// 检查DOMPoint.fromPoint_static是否支持
function isDOMPointFromPoint_staticSupported() {
    return 'fromPoint_static' in dompoint && typeof dompoint.fromPoint_static === 'function';
}

if (isDOMPointFromPoint_staticSupported()) {
    console.log('DOMPoint.fromPoint_static 支持');
    // 使用DOMPoint.fromPoint_static
} else {
    console.log('DOMPoint.fromPoint_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMPoint.fromPoint_static polyfill
if (!dompoint.fromPoint_static) {
    // 在这里添加polyfill实现
    console.log('加载DOMPoint.fromPoint_static polyfill');
}
```

