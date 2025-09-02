# EventSource.close API 兼容性数据

## 基本信息

- **API名称**: `EventSource.close`
- **MDN文档**: [EventSource.close](https://developer.mozilla.org/docs/Web/API/EventSource/close)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/server-sent-events.html#dom-eventsource-close-dev)
- **标签**: `web-features:server-sent-events`

## 使用示例

### 基本用法

```javascript
// EventSource.close 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventSource.close API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.38 |  |
| Edge | 同主版本 |  |
| Firefox | 6 |  |
| Firefox Android | 45 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

### Deno

- **支持版本**: 1.38

### Firefox

- **支持版本**: 6

### Firefox Android

- **支持版本**: 45

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查EventSource.close是否支持
function isEventSourceCloseSupported() {
    return 'close' in eventsource && typeof eventsource.close === 'function';
}

if (isEventSourceCloseSupported()) {
    console.log('EventSource.close 支持');
    // 使用EventSource.close
} else {
    console.log('EventSource.close 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EventSource.close polyfill
if (!eventsource.close) {
    // 在这里添加polyfill实现
    console.log('加载EventSource.close polyfill');
}
```

