# XMLHttpRequest.load_event API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.load_event`
- **MDN文档**: [XMLHttpRequest.load_event](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestEventTarget/load_event)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#event-xhr-load,https://xhr.spec.whatwg.org/#handler-xhr-onload)
- **标签**: `web-features:xhr`
- **描述**: `load` event

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.load_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.load_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.load_event是否支持
function isXMLHttpRequestLoad_eventSupported() {
    return 'load_event' in xmlhttprequest && typeof xmlhttprequest.load_event === 'function';
}

if (isXMLHttpRequestLoad_eventSupported()) {
    console.log('XMLHttpRequest.load_event 支持');
    // 使用XMLHttpRequest.load_event
} else {
    console.log('XMLHttpRequest.load_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.load_event polyfill
if (!xmlhttprequest.load_event) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.load_event polyfill');
}
```

