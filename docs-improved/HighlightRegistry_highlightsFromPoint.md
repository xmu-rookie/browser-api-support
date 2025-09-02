# HighlightRegistry.highlightsFromPoint API 兼容性数据

## 基本信息

- **API名称**: `HighlightRegistry.highlightsFromPoint`
- **MDN文档**: [HighlightRegistry.highlightsFromPoint](https://developer.mozilla.org/docs/Web/API/HighlightRegistry/highlightsFromPoint)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-highlight-api-1/#dom-highlightregistry-highlightsfrompoint)
- **标签**: `web-features:highlight`

## 使用示例

### 基本用法

```javascript
// HighlightRegistry.highlightsFromPoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('HighlightRegistry.highlightsFromPoint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 140 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 140

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HighlightRegistry.highlightsFromPoint是否支持
function isHighlightRegistryHighlightsFromPointSupported() {
    return 'highlightsFromPoint' in highlightregistry && typeof highlightregistry.highlightsFromPoint === 'function';
}

if (isHighlightRegistryHighlightsFromPointSupported()) {
    console.log('HighlightRegistry.highlightsFromPoint 支持');
    // 使用HighlightRegistry.highlightsFromPoint
} else {
    console.log('HighlightRegistry.highlightsFromPoint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HighlightRegistry.highlightsFromPoint polyfill
if (!highlightregistry.highlightsFromPoint) {
    // 在这里添加polyfill实现
    console.log('加载HighlightRegistry.highlightsFromPoint polyfill');
}
```

