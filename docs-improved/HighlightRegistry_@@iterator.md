# HighlightRegistry.@@iterator API 兼容性数据

## 基本信息

- **API名称**: `HighlightRegistry.@@iterator`
- **标签**: `web-features:highlight`
- **描述**: [Symbol.iterator]

## 使用示例

### 基本用法

```javascript
// HighlightRegistry.@@iterator 使用示例
// 请查阅MDN文档了解具体用法
console.log('HighlightRegistry.@@iterator API');
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
// 检查HighlightRegistry.@@iterator是否支持
function isHighlightRegistry@@iteratorSupported() {
    return '@@iterator' in highlightregistry && typeof highlightregistry.@@iterator === 'function';
}

if (isHighlightRegistry@@iteratorSupported()) {
    console.log('HighlightRegistry.@@iterator 支持');
    // 使用HighlightRegistry.@@iterator
} else {
    console.log('HighlightRegistry.@@iterator 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HighlightRegistry.@@iterator polyfill
if (!highlightregistry.@@iterator) {
    // 在这里添加polyfill实现
    console.log('加载HighlightRegistry.@@iterator polyfill');
}
```

