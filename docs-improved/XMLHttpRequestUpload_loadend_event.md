# XMLHttpRequestUpload.loadend_event API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequestUpload.loadend_event`
- **MDN文档**: [XMLHttpRequestUpload.loadend_event](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestEventTarget/loadend_event)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#event-xhr-loadend,https://xhr.spec.whatwg.org/#handler-xhr-onloadend)
- **标签**: `web-features:xhr`
- **描述**: `loadend` event

## 使用示例

### 基本用法

```javascript
// XMLHttpRequestUpload.loadend_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequestUpload.loadend_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 18 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 18

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequestUpload.loadend_event是否支持
function isXMLHttpRequestUploadLoadend_eventSupported() {
    return 'loadend_event' in xmlhttprequestupload && typeof xmlhttprequestupload.loadend_event === 'function';
}

if (isXMLHttpRequestUploadLoadend_eventSupported()) {
    console.log('XMLHttpRequestUpload.loadend_event 支持');
    // 使用XMLHttpRequestUpload.loadend_event
} else {
    console.log('XMLHttpRequestUpload.loadend_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequestUpload.loadend_event polyfill
if (!xmlhttprequestupload.loadend_event) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequestUpload.loadend_event polyfill');
}
```

