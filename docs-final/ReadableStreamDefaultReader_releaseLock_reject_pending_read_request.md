# ReadableStreamDefaultReader.releaseLock.reject_pending_read_request API 兼容性数据

## 基本信息

- **API名称**: `ReadableStreamDefaultReader.releaseLock.reject_pending_read_request`
- **标签**: `web-features:streams`
- **描述**: `releaseLock()` rejects pending read requests

## 使用示例

### 基本用法

```javascript
// ReadableStreamDefaultReader.releaseLock.reject_pending_read_request 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReadableStreamDefaultReader.releaseLock.reject_pending_read_request API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 105 | Before version 105, `releaseLock()` throws instead of rejecting. |
| Chrome Android | 同主版本 |  |
| Deno | 1.18 |  |
| Edge | 同主版本 |  |
| Firefox | 102 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.9.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 105
- **注意事项**:
  - Before version 105, `releaseLock()` throws instead of rejecting.

### Deno

- **支持版本**: 1.18

### Firefox

- **支持版本**: 102

### Node.js

- **支持版本**: 18.9.0

### Safari

- **支持版本**: 17

