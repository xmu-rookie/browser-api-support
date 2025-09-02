# Document.browsingTopics API 兼容性数据

## 基本信息

- **API名称**: `Document.browsingTopics`
- **MDN文档**: [Document.browsingTopics](https://developer.mozilla.org/docs/Web/API/Document/browsingTopics)

## 使用示例

### 基本用法

```javascript
// Document.browsingTopics 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.browsingTopics API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
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

- **支持版本**: 126

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.browsingTopics是否支持
function isDocumentBrowsingTopicsSupported() {
    return 'browsingTopics' in document && typeof document.browsingTopics === 'function';
}

if (isDocumentBrowsingTopicsSupported()) {
    console.log('Document.browsingTopics 支持');
    // 使用Document.browsingTopics
} else {
    console.log('Document.browsingTopics 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.browsingTopics polyfill
if (!document.browsingTopics) {
    // 在这里添加polyfill实现
    console.log('加载Document.browsingTopics polyfill');
}
```

