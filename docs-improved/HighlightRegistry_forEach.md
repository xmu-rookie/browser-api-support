# HighlightRegistry.forEach API 兼容性数据

## 基本信息

- **API名称**: `HighlightRegistry.forEach`
- **MDN文档**: [HighlightRegistry.forEach](https://developer.mozilla.org/docs/Web/API/HighlightRegistry/forEach)
- **标签**: `web-features:highlight`

## 使用示例

### 基本用法

```javascript
// HighlightRegistry.forEach 使用示例
// 请查阅MDN文档了解具体用法
console.log('HighlightRegistry.forEach API');
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
// 检查HighlightRegistry.forEach是否支持
function isHighlightRegistryForEachSupported() {
    return 'forEach' in highlightregistry && typeof highlightregistry.forEach === 'function';
}

if (isHighlightRegistryForEachSupported()) {
    console.log('HighlightRegistry.forEach 支持');
    // 使用HighlightRegistry.forEach
} else {
    console.log('HighlightRegistry.forEach 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HighlightRegistry.forEach polyfill
if (!highlightregistry.forEach) {
    // 在这里添加polyfill实现
    console.log('加载HighlightRegistry.forEach polyfill');
}
```

