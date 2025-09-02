# EventSource.worker_support API 兼容性数据

## 基本信息

- **API名称**: `EventSource.worker_support`
- **标签**: `web-features:server-sent-events`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// EventSource.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventSource.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.38 |  |
| Edge | 同主版本 |  |
| Firefox | 133 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤15 |  |
| Opera Android | ≤14 |  |
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

- **支持版本**: 133
- **支持版本**: 53
- **移除版本**: 133
- **部分实现**: 是
- **注意事项**:
  - Not supported in service workers.

### Opera

- **支持版本**: ≤15

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查EventSource.worker_support是否支持
function isEventSourceWorker_supportSupported() {
    return 'worker_support' in eventsource && typeof eventsource.worker_support === 'function';
}

if (isEventSourceWorker_supportSupported()) {
    console.log('EventSource.worker_support 支持');
    // 使用EventSource.worker_support
} else {
    console.log('EventSource.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EventSource.worker_support polyfill
if (!eventsource.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载EventSource.worker_support polyfill');
}
```

