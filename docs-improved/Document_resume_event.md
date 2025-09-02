# Document.resume_event API 兼容性数据

## 基本信息

- **API名称**: `Document.resume_event`
- **规范文档**: [查看规范](https://wicg.github.io/page-lifecycle/#dom-document-onresume)
- **标签**: `web-features:page-lifecycle`
- **描述**: `resume` event

## 使用示例

### 基本用法

```javascript
// Document.resume_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.resume_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 68 |  |
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

- **支持版本**: 68

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.resume_event是否支持
function isDocumentResume_eventSupported() {
    return 'resume_event' in document && typeof document.resume_event === 'function';
}

if (isDocumentResume_eventSupported()) {
    console.log('Document.resume_event 支持');
    // 使用Document.resume_event
} else {
    console.log('Document.resume_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.resume_event polyfill
if (!document.resume_event) {
    // 在这里添加polyfill实现
    console.log('加载Document.resume_event polyfill');
}
```

