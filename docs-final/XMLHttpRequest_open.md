# XMLHttpRequest.open API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.open`
- **MDN文档**: [XMLHttpRequest.open](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/open)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#the-open()-method)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.open 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.open API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | Starting in Firefox 30, synchronous requests on the main thread have been deprecated due to their ne... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
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
- **注意事项**:
  - Starting in Firefox 30, synchronous requests on the main thread have been deprecated due to their negative impact on performance and the user experience. Therefore, the `async` parameter may not be `false` except in a `Worker`.

### Internet Explorer

- **支持版本**: 5

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1.2

