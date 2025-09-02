# XMLHttpRequest.timeout_event API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.timeout_event`
- **MDN文档**: [XMLHttpRequest.timeout_event](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestEventTarget/timeout_event)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#event-xhr-timeout,https://xhr.spec.whatwg.org/#handler-xhr-ontimeout)
- **标签**: `web-features:xhr`
- **描述**: `timeout` event

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.timeout_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.timeout_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 29 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 12 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 8 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 29

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 12

### Internet Explorer

- **支持版本**: 8

### Safari

- **支持版本**: 7

### Samsung Internet

- **支持版本**: 1.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.timeout_event是否支持
function isXMLHttpRequestTimeout_eventSupported() {
    return 'timeout_event' in xmlhttprequest && typeof xmlhttprequest.timeout_event === 'function';
}

if (isXMLHttpRequestTimeout_eventSupported()) {
    console.log('XMLHttpRequest.timeout_event 支持');
    // 使用XMLHttpRequest.timeout_event
} else {
    console.log('XMLHttpRequest.timeout_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.timeout_event polyfill
if (!xmlhttprequest.timeout_event) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.timeout_event polyfill');
}
```

