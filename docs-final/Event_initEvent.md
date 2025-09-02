# Event.initEvent API 兼容性数据

## 基本信息

- **API名称**: `Event.initEvent`
- **MDN文档**: [Event.initEvent](https://developer.mozilla.org/docs/Web/API/Event/initEvent)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-event-initevent)

## 使用示例

### 基本用法

```javascript
// Event.initEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.initEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 17 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 19.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 17
- **支持版本**: 1
- **移除版本**: 17
- **部分实现**: 是
- **注意事项**:
  - Before Firefox 17, a call to this method after the dispatching of the event raised an exception instead of doing nothing.

### Internet Explorer

- **支持版本**: 9

### Node.js

- **支持版本**: 19.5.0

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

