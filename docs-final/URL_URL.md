# URL.URL API 兼容性数据

## 基本信息

- **API名称**: `URL.URL`
- **MDN文档**: [URL.URL](https://developer.mozilla.org/docs/Web/API/URL/URL)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#dom-url-url)
- **标签**: `web-features:url`
- **描述**: `URL()` constructor

## 使用示例

### 基本用法

```javascript
// URL.URL 使用示例
// 请查阅MDN文档了解具体用法
console.log('URL.URL API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 19 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 | Before Edge 79, query arguments in the base URL argument are removed when calling the `URL` construc... |
| Firefox | 26 | Before version 122, `host`, `hostname`, and `port` were not parsed for unknown protocols/schemes. |
| Firefox Android | 同主版本 |  |
| Node.js | 6.13.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 19

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12
- **注意事项**:
  - Before Edge 79, query arguments in the base URL argument are removed when calling the `URL` constructor.

### Firefox

- **支持版本**: 26
- **注意事项**:
  - Before version 122, `host`, `hostname`, and `port` were not parsed for unknown protocols/schemes.

### Node.js

- **支持版本**: 6.13.0

### Safari

- **支持版本**: 14.1
- **支持版本**: 6
- **移除版本**: 14.1
- **部分实现**: 是
- **注意事项**:
  - Before Safari 14.1, calling the `URL` constructor with a base URL whose value is `undefined` caused Safari to throw a `TypeError`, see [bug 216841](https://webkit.org/b/216841).

