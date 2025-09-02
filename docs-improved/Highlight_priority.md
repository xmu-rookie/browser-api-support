# Highlight.priority API 兼容性数据

## 基本信息

- **API名称**: `Highlight.priority`
- **MDN文档**: [Highlight.priority](https://developer.mozilla.org/docs/Web/API/Highlight/priority)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-highlight-api/#dom-highlight-priority)
- **标签**: `web-features:highlight`

## 使用示例

### 基本用法

```javascript
// Highlight.priority 使用示例
// 请查阅MDN文档了解具体用法
console.log('Highlight.priority API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 105 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 140 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
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
// 检查Highlight.priority是否支持
function isHighlightPrioritySupported() {
    return 'priority' in highlight && typeof highlight.priority === 'function';
}

if (isHighlightPrioritySupported()) {
    console.log('Highlight.priority 支持');
    // 使用Highlight.priority
} else {
    console.log('Highlight.priority 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Highlight.priority polyfill
if (!highlight.priority) {
    // 在这里添加polyfill实现
    console.log('加载Highlight.priority polyfill');
}
```

