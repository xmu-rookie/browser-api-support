# TaskSignal.any_static API 兼容性数据

## 基本信息

- **API名称**: `TaskSignal.any_static`
- **MDN文档**: [TaskSignal.any_static](https://developer.mozilla.org/docs/Web/API/TaskSignal/any_static)
- **规范文档**: [查看规范](https://wicg.github.io/scheduling-apis/#dom-tasksignal-any)
- **标签**: `web-features:scheduler`
- **描述**: `any()` static method

## 使用示例

### 基本用法

```javascript
// TaskSignal.any_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('TaskSignal.any_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 116 |  |
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

- **支持版本**: 116

### Firefox

- **支持版本**: 142

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查TaskSignal.any_static是否支持
function isTaskSignalAny_staticSupported() {
    return 'any_static' in tasksignal && typeof tasksignal.any_static === 'function';
}

if (isTaskSignalAny_staticSupported()) {
    console.log('TaskSignal.any_static 支持');
    // 使用TaskSignal.any_static
} else {
    console.log('TaskSignal.any_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TaskSignal.any_static polyfill
if (!tasksignal.any_static) {
    // 在这里添加polyfill实现
    console.log('加载TaskSignal.any_static polyfill');
}
```

