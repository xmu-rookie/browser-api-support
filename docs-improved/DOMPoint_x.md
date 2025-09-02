# DOMPoint.x API 兼容性数据

## 基本信息

- **API名称**: `DOMPoint.x`
- **MDN文档**: [DOMPoint.x](https://developer.mozilla.org/docs/Web/API/DOMPoint/x)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dompointreadonly-x)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMPoint.x 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMPoint.x API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
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

- **支持版本**: 31

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMPoint.x是否支持
function isDOMPointXSupported() {
    return 'x' in dompoint && typeof dompoint.x === 'function';
}

if (isDOMPointXSupported()) {
    console.log('DOMPoint.x 支持');
    // 使用DOMPoint.x
} else {
    console.log('DOMPoint.x 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMPoint.x polyfill
if (!dompoint.x) {
    // 在这里添加polyfill实现
    console.log('加载DOMPoint.x polyfill');
}
```

