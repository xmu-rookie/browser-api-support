# URL.search API 兼容性数据

## 基本信息

- **API名称**: `URL.search`
- **MDN文档**: [URL.search](https://developer.mozilla.org/docs/Web/API/URL/search)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#dom-url-search)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URL.search 使用示例
// 请查阅MDN文档了解具体用法
console.log('URL.search API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 32 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 13 |  |
| Firefox | 22 | Before Firefox 53, `pathname` and `search` returned wrong values for custom protocols. Given `protoc... |
| Firefox Android | 同主版本 |  |
| Node.js | 6.13.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 32

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 22
- **注意事项**:
  - Before Firefox 53, `pathname` and `search` returned wrong values for custom protocols. Given `protocol:host/x?a=true&amp;b=false`, `pathname` would return "/x?a=true&amp;b=false" and `search` would return "", rather than "/x" and "?a=true&amp;b=false" respectively. See [bug 1310483](https://bugzil.la/1310483).

### Node.js

- **支持版本**: 6.13.0

### Safari

- **支持版本**: 10

