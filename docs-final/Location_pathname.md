# Location.pathname API 兼容性数据

## 基本信息

- **API名称**: `Location.pathname`
- **MDN文档**: [Location.pathname](https://developer.mozilla.org/docs/Web/API/Location/pathname)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-location-pathname-dev)
- **标签**: `web-features:location`

## 使用示例

### 基本用法

```javascript
// Location.pathname 使用示例
// 请查阅MDN文档了解具体用法
console.log('Location.pathname API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.7 |  |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 53, the `pathname` property returned wrong parts of the URL. For example, for a URL o... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 3 | Internet Explorer does not provide the leading slash character in the `pathname` (`docs/Web/API/Loca... |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.7
- **需要标志**: 
  - --location [url]: true

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Before Firefox 53, the `pathname` property returned wrong parts of the URL. For example, for a URL of `https://z.com/x?a=true&amp;b=false`, `pathname` would return "/x?a=true&amp;b=false" rather than "/x".

### Internet Explorer

- **支持版本**: 3
- **注意事项**:
  - Internet Explorer does not provide the leading slash character in the `pathname` (`docs/Web/API/Location` instead of `/docs/Web/API/Location`).

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

