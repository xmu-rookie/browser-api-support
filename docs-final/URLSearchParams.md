# URLSearchParams API 兼容性数据

## 基本信息

- **API名称**: `URLSearchParams`
- **MDN文档**: [URLSearchParams](https://developer.mozilla.org/docs/Web/API/URLSearchParams)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#urlsearchparams)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URLSearchParams 使用示例
// 请查阅MDN文档了解具体用法
console.log('URLSearchParams API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 17 |  |
| Firefox | 29 | Before version 57 single quotes in URLs were escaped (see [bug 1386683](https://bugzil.la/1386683)). |
| Firefox Android | 同主版本 |  |
| Node.js | 10.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 49

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 29
- **注意事项**:
  - Before version 57 single quotes in URLs were escaped (see [bug 1386683](https://bugzil.la/1386683)).

### Node.js

- **支持版本**: 10.0.0
- **支持版本**: 7.5.0
- **移除版本**: 10.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `url` module.
- **支持版本**: 7.0.0
- **移除版本**: 7.5.0
- **部分实现**: 是
- **注意事项**:
  - Only available as an internal instance, but can be accessed via the `searchParams` property of the `URL` interface.
- **支持版本**: 6.13.0
- **移除版本**: 7.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `url` module.

### Safari

- **支持版本**: 10.1

