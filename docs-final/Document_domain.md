# Document.domain API 兼容性数据

## 基本信息

- **API名称**: `Document.domain`
- **MDN文档**: [Document.domain](https://developer.mozilla.org/docs/Web/API/Document/domain)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/browsers.html#relaxing-the-same-origin-restriction)

## 使用示例

### 基本用法

```javascript
// Document.domain 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.domain API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Since Chrome 115, setting `domain` has no effect, unless the website has opted into [origin-keyed ag... |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 69 | From Firefox 62, if the domain cannot be identified, `domain` returns an empty string instead of `nu... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
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
- **注意事项**:
  - Since Chrome 115, setting `domain` has no effect, unless the website has opted into [origin-keyed agent clusters](https://developer.mozilla.org/docs/Web/HTTP/Headers/Origin-Agent-Cluster).

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 69
- **注意事项**:
  - From Firefox 62, if the domain cannot be identified, `domain` returns an empty string instead of `null`. See [bug 819475](https://bugzil.la/819475).
- **支持版本**: 1
- **移除版本**: 69
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

