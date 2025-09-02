# URLSearchParams.delete API 兼容性数据

## 基本信息

- **API名称**: `URLSearchParams.delete`
- **MDN文档**: [URLSearchParams.delete](https://developer.mozilla.org/docs/Web/API/URLSearchParams/delete)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#dom-urlsearchparams-delete)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URLSearchParams.delete 使用示例
// 请查阅MDN文档了解具体用法
console.log('URLSearchParams.delete API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 17 |  |
| Firefox | 29 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 6.13.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
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

### Node.js

- **支持版本**: 6.13.0

### Safari

- **支持版本**: 14
- **支持版本**: 10.1
- **移除版本**: 14
- **部分实现**: 是
- **注意事项**:
  - Removing a non-existent query parameter doesn't remove `?` from the URL. See [bug 193022](https://webkit.org/b/193022).

## 相关子API

该API包含以下子功能：

- **value_parameter**: `value` parameter

