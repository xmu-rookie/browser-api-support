# XMLHttpRequest.readystatechange_event API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.readystatechange_event`
- **MDN文档**: [XMLHttpRequest.readystatechange_event](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/readystatechange_event)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#event-xhr-readystatechange,https://xhr.spec.whatwg.org/#handler-xhr-onreadystatechange)
- **标签**: `web-features:xhr`
- **描述**: `readystatechange` event

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.readystatechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.readystatechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 1.2 |  |
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

- **支持版本**: 5

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.readystatechange_event是否支持
function isXMLHttpRequestReadystatechange_eventSupported() {
    return 'readystatechange_event' in xmlhttprequest && typeof xmlhttprequest.readystatechange_event === 'function';
}

if (isXMLHttpRequestReadystatechange_eventSupported()) {
    console.log('XMLHttpRequest.readystatechange_event 支持');
    // 使用XMLHttpRequest.readystatechange_event
} else {
    console.log('XMLHttpRequest.readystatechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.readystatechange_event polyfill
if (!xmlhttprequest.readystatechange_event) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.readystatechange_event polyfill');
}
```

