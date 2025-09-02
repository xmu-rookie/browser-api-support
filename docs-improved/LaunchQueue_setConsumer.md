# LaunchQueue.setConsumer API 兼容性数据

## 基本信息

- **API名称**: `LaunchQueue.setConsumer`
- **MDN文档**: [LaunchQueue.setConsumer](https://developer.mozilla.org/docs/Web/API/LaunchQueue/setConsumer)
- **规范文档**: [查看规范](https://wicg.github.io/web-app-launch/#dom-launchqueue-setconsumer)
- **标签**: `web-features:app-launch-handler`

## 使用示例

### 基本用法

```javascript
// LaunchQueue.setConsumer 使用示例
// 请查阅MDN文档了解具体用法
console.log('LaunchQueue.setConsumer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 102

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查LaunchQueue.setConsumer是否支持
function isLaunchQueueSetConsumerSupported() {
    return 'setConsumer' in launchqueue && typeof launchqueue.setConsumer === 'function';
}

if (isLaunchQueueSetConsumerSupported()) {
    console.log('LaunchQueue.setConsumer 支持');
    // 使用LaunchQueue.setConsumer
} else {
    console.log('LaunchQueue.setConsumer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// LaunchQueue.setConsumer polyfill
if (!launchqueue.setConsumer) {
    // 在这里添加polyfill实现
    console.log('加载LaunchQueue.setConsumer polyfill');
}
```

