# Document.readystatechange_event API 兼容性数据

## 基本信息

- **API名称**: `Document.readystatechange_event`
- **MDN文档**: [Document.readystatechange_event](https://developer.mozilla.org/docs/Web/API/Document/readystatechange_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-readystatechange)
- **标签**: `web-features:dom`
- **描述**: `readystatechange` event

## 使用示例

### 基本用法

```javascript
// Document.readystatechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.readystatechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 9

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.readystatechange_event是否支持
function isDocumentReadystatechange_eventSupported() {
    return 'readystatechange_event' in document && typeof document.readystatechange_event === 'function';
}

if (isDocumentReadystatechange_eventSupported()) {
    console.log('Document.readystatechange_event 支持');
    // 使用Document.readystatechange_event
} else {
    console.log('Document.readystatechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.readystatechange_event polyfill
if (!document.readystatechange_event) {
    // 在这里添加polyfill实现
    console.log('加载Document.readystatechange_event polyfill');
}
```

