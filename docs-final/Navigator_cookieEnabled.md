# Navigator.cookieEnabled API 兼容性数据

## 基本信息

- **API名称**: `Navigator.cookieEnabled`
- **MDN文档**: [Navigator.cookieEnabled](https://developer.mozilla.org/docs/Web/API/Navigator/cookieEnabled)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-cookieenabled-dev)
- **标签**: `web-features:cookie-enabled`

## 使用示例

### 基本用法

```javascript
// Navigator.cookieEnabled 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.cookieEnabled API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 8, `navigator.cookieEnabled` would report the wrong result if a site exception was in... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 | `navigator.cookieEnabled` returns `true` even if the browser is set to block cookies (for example, i... |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 18 |  |
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
  - Before Firefox 8, `navigator.cookieEnabled` would report the wrong result if a site exception was in place for the page on which the check was performed. This has been fixed.

### Internet Explorer

- **支持版本**: 4
- **注意事项**:
  - `navigator.cookieEnabled` returns `true` even if the browser is set to block cookies (for example, if the page is in the _Restricted sites_ security zone).

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 18
- **支持版本**: 1
- **移除版本**: 18
- **部分实现**: 是
- **注意事项**:
  - Returns `true` even if the browser is set to block cookies if `navigator.cookieEnabled` is invoked inside a third-party `iframe`)

