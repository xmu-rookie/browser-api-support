# XMLHttpRequest.abort_event API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.abort_event`
- **MDN文档**: [XMLHttpRequest.abort_event](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestEventTarget/abort_event)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#event-xhr-abort,https://xhr.spec.whatwg.org/#handler-xhr-onabort)
- **标签**: `web-features:xhr`
- **描述**: `abort` event

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.abort_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.abort_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1.3 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.abort_event是否支持
function isXMLHttpRequestAbort_eventSupported() {
    return 'abort_event' in xmlhttprequest && typeof xmlhttprequest.abort_event === 'function';
}

if (isXMLHttpRequestAbort_eventSupported()) {
    console.log('XMLHttpRequest.abort_event 支持');
    // 使用XMLHttpRequest.abort_event
} else {
    console.log('XMLHttpRequest.abort_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.abort_event polyfill
if (!xmlhttprequest.abort_event) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.abort_event polyfill');
}
```

