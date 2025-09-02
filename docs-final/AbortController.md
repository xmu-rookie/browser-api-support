# AbortController API 兼容性数据

## 基本信息

- **API名称**: `AbortController`
- **MDN文档**: [AbortController](https://developer.mozilla.org/docs/Web/API/AbortController)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#interface-abortcontroller)
- **标签**: `web-features:aborting`

## 使用示例

### 基本用法

```javascript
// AbortController 使用示例
// 请查阅MDN文档了解具体用法
console.log('AbortController API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 16 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 14.17.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 66

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 57

### Node.js

- **支持版本**: 14.17.0

### Safari

- **支持版本**: 12.1
- **支持版本**: 11.1
- **移除版本**: 12.1
- **部分实现**: 是
- **注意事项**:
  - Even though `window.AbortController` is defined, it doesn't really abort `fetch` requests. See [bug 174980](https://webkit.org/b/174980).

