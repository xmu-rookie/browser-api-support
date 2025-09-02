# structuredClone API 兼容性数据

## 基本信息

- **API名称**: `structuredClone`
- **MDN文档**: [structuredClone](https://developer.mozilla.org/docs/Web/API/Window/structuredClone)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone)
- **标签**: `web-features:structured-clone`

## 使用示例

### 基本用法

```javascript
// structuredClone 使用示例
// 请查阅MDN文档了解具体用法
console.log('structuredClone API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 98 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.14 | The `message` parameter does not support cloning `Blob` values. |
| Edge | 同主版本 |  |
| Firefox | 94 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 17.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 98

### Deno

- **支持版本**: 1.14
- **注意事项**:
  - The `message` parameter does not support cloning `Blob` values.
- **支持版本**: 1.13
- **移除版本**: 1.14
- **部分实现**: 是
- **注意事项**:
  - The `message` parameter does not support cloning `Blob` values.
  - The `transfer` parameter does not accept `ArrayBuffer` items. Passing an `ArrayBuffer` results in an error being thrown.

### Firefox

- **支持版本**: 94

### Node.js

- **支持版本**: 17.0.0

### Safari

- **支持版本**: 15.4

