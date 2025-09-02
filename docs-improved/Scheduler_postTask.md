# Scheduler.postTask API 兼容性数据

## 基本信息

- **API名称**: `Scheduler.postTask`
- **MDN文档**: [Scheduler.postTask](https://developer.mozilla.org/docs/Web/API/Scheduler/postTask)
- **规范文档**: [查看规范](https://wicg.github.io/scheduling-apis/#dom-scheduler-posttask)
- **标签**: `web-features:scheduler`

## 使用示例

### 基本用法

```javascript
// Scheduler.postTask 使用示例
// 请查阅MDN文档了解具体用法
console.log('Scheduler.postTask API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 142 |  |
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

- **支持版本**: 94

### Firefox

- **支持版本**: 142

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Scheduler.postTask是否支持
function isSchedulerPostTaskSupported() {
    return 'postTask' in scheduler && typeof scheduler.postTask === 'function';
}

if (isSchedulerPostTaskSupported()) {
    console.log('Scheduler.postTask 支持');
    // 使用Scheduler.postTask
} else {
    console.log('Scheduler.postTask 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Scheduler.postTask polyfill
if (!scheduler.postTask) {
    // 在这里添加polyfill实现
    console.log('加载Scheduler.postTask polyfill');
}
```

