# Highlight API 兼容性数据

## 基本信息

- **API名称**: `Highlight`
- **MDN文档**: [Highlight](https://developer.mozilla.org/docs/Web/API/Highlight)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-highlight-api/#highlight)
- **标签**: `web-features:highlight`

## 使用示例

### 基本用法

```javascript
// Highlight 使用示例
// 请查阅MDN文档了解具体用法
console.log('Highlight API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 105 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 140 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 105

### Firefox

- **支持版本**: 140

### Safari

- **支持版本**: 17.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Highlight是否支持
function isHighlightSupported() {
    return 'Highlight' in window || typeof Highlight !== 'undefined';
}

if (isHighlightSupported()) {
    console.log('Highlight 支持');
    // 使用Highlight
} else {
    console.log('Highlight 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Highlight polyfill
if (!window.Highlight) {
    // 在这里添加polyfill实现
    console.log('加载Highlight polyfill');
}
```

