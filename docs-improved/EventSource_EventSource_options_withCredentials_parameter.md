# EventSource.EventSource.options_withCredentials_parameter API 兼容性数据

## 基本信息

- **API名称**: `EventSource.EventSource.options_withCredentials_parameter`
- **标签**: `web-features:server-sent-events`
- **描述**: `options.withCredentials` parameter

## 使用示例

### 基本用法

```javascript
// EventSource.EventSource.options_withCredentials_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventSource.EventSource.options_withCredentials_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.38 |  |
| Edge | 同主版本 |  |
| Firefox | 11 |  |
| Firefox Android | 45 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 2.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 26

### Deno

- **支持版本**: 1.38

### Firefox

- **支持版本**: 11

### Firefox Android

- **支持版本**: 45

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 7

### Samsung Internet

- **支持版本**: 2.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查EventSource.EventSource.options_withCredentials_parameter是否支持
function isEventSourceEventSourceSupported() {
    return 'EventSource' in eventsource && typeof eventsource.EventSource === 'function';
}

if (isEventSourceEventSourceSupported()) {
    console.log('EventSource.EventSource.options_withCredentials_parameter 支持');
    // 使用EventSource.EventSource.options_withCredentials_parameter
} else {
    console.log('EventSource.EventSource.options_withCredentials_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EventSource.EventSource.options_withCredentials_parameter polyfill
if (!eventsource.EventSource) {
    // 在这里添加polyfill实现
    console.log('加载EventSource.EventSource.options_withCredentials_parameter polyfill');
}
```

