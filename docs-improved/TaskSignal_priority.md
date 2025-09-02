# TaskSignal.priority API 兼容性数据

## 基本信息

- **API名称**: `TaskSignal.priority`
- **MDN文档**: [TaskSignal.priority](https://developer.mozilla.org/docs/Web/API/TaskSignal/priority)
- **规范文档**: [查看规范](https://wicg.github.io/scheduling-apis/#dom-tasksignal-priority)
- **标签**: `web-features:scheduler`

## 使用示例

### 基本用法

```javascript
// TaskSignal.priority 使用示例
// 请查阅MDN文档了解具体用法
console.log('TaskSignal.priority API');
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
// 检查TaskSignal.priority是否支持
function isTaskSignalPrioritySupported() {
    return 'priority' in tasksignal && typeof tasksignal.priority === 'function';
}

if (isTaskSignalPrioritySupported()) {
    console.log('TaskSignal.priority 支持');
    // 使用TaskSignal.priority
} else {
    console.log('TaskSignal.priority 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TaskSignal.priority polyfill
if (!tasksignal.priority) {
    // 在这里添加polyfill实现
    console.log('加载TaskSignal.priority polyfill');
}
```

