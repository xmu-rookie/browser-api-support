# BroadcastChannel API 兼容性数据

## 基本信息

- **API名称**: `BroadcastChannel`
- **MDN文档**: [BroadcastChannel](https://developer.mozilla.org/docs/Web/API/BroadcastChannel)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/web-messaging.html#broadcasting-to-other-browsing-contexts)
- **标签**: `web-features:broadcast-channel`

## 使用示例

### 基本用法

```javascript
// BroadcastChannel 使用示例
// 请查阅MDN文档了解具体用法
console.log('BroadcastChannel API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 54 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.11 |  |
| Edge | 同主版本 |  |
| Firefox | 38 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
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

- **支持版本**: 54

### Deno

- **支持版本**: 1.11
- **需要标志**: 
  - --unstable-broadcast-channel: true

### Firefox

- **支持版本**: 38

### Node.js

- **支持版本**: 18.0.0
- **支持版本**: 15.4.0
- **移除版本**: 18.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `worker_threads` module.

### Safari

- **支持版本**: 15.4

