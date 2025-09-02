# Document.scrollend_event API 兼容性数据

## 基本信息

- **API名称**: `Document.scrollend_event`
- **MDN文档**: [Document.scrollend_event](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#eventdef-document-scrollend,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onscrollend)
- **标签**: `web-features:scrollend`
- **描述**: `scrollend` event

## 使用示例

### 基本用法

```javascript
// Document.scrollend_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.scrollend_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 114 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 109 |  |
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

- **支持版本**: 114

### Firefox

- **支持版本**: 109

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.scrollend_event是否支持
function isDocumentScrollend_eventSupported() {
    return 'scrollend_event' in document && typeof document.scrollend_event === 'function';
}

if (isDocumentScrollend_eventSupported()) {
    console.log('Document.scrollend_event 支持');
    // 使用Document.scrollend_event
} else {
    console.log('Document.scrollend_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.scrollend_event polyfill
if (!document.scrollend_event) {
    // 在这里添加polyfill实现
    console.log('加载Document.scrollend_event polyfill');
}
```

