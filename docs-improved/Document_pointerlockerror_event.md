# Document.pointerlockerror_event API 兼容性数据

## 基本信息

- **API名称**: `Document.pointerlockerror_event`
- **MDN文档**: [Document.pointerlockerror_event](https://developer.mozilla.org/docs/Web/API/Document/pointerlockerror_event)
- **规范文档**: [查看规范](https://w3c.github.io/pointerlock/#pointerlockchange-and-pointerlockerror-events,https://w3c.github.io/pointerlock/#dom-document-onpointerlockerror)
- **标签**: `web-features:pointer-lock`
- **描述**: `pointerlockerror` event

## 使用示例

### 基本用法

```javascript
// Document.pointerlockerror_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.pointerlockerror_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 36 |  |
| Chrome Android | 不支持 |  |
| Edge | 13 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 36
- **支持版本**: 22
- **移除版本**: 38
- **前缀**: webkit

### Chrome Android

- **支持版本**: 不支持

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 50
- **支持版本**: 14
- **移除版本**: 50
- **前缀**: moz

### Safari

- **支持版本**: 10.1

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.pointerlockerror_event是否支持
function isDocumentPointerlockerror_eventSupported() {
    return 'pointerlockerror_event' in document && typeof document.pointerlockerror_event === 'function';
}

if (isDocumentPointerlockerror_eventSupported()) {
    console.log('Document.pointerlockerror_event 支持');
    // 使用Document.pointerlockerror_event
} else {
    console.log('Document.pointerlockerror_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.pointerlockerror_event polyfill
if (!document.pointerlockerror_event) {
    // 在这里添加polyfill实现
    console.log('加载Document.pointerlockerror_event polyfill');
}
```

