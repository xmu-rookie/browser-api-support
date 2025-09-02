# WebTransport.createUnidirectionalStream API 兼容性数据

## 基本信息

- **API名称**: `WebTransport.createUnidirectionalStream`
- **MDN文档**: [WebTransport.createUnidirectionalStream](https://developer.mozilla.org/docs/Web/API/WebTransport/createUnidirectionalStream)
- **规范文档**: [查看规范](https://w3c.github.io/webtransport/#dom-webtransport-createunidirectionalstream)
- **标签**: `web-features:webtransport`

## 使用示例

### 基本用法

```javascript
// WebTransport.createUnidirectionalStream 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebTransport.createUnidirectionalStream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 97 |  |
| Chrome Android | 同主版本 |  |
| Deno | 2.2 |  |
| Edge | 同主版本 |  |
| Firefox | 114 | Returns a `WritableStream` instead of a `WebTransportSendStream`. |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 97

### Deno

- **支持版本**: 2.2
- **需要标志**: 
  - --unstable-net: true

### Firefox

- **支持版本**: 114
- **部分实现**: 是
- **注意事项**:
  - Returns a `WritableStream` instead of a `WebTransportSendStream`.

### Safari

- **支持版本**: 18.4
- **需要标志**: 
  - WebTransport: true

## 相关子API

该API包含以下子功能：

- **byob_readers**: BYOB reader support
- **options_sendOrder_parameter**: `options.sendOrder` parameter

