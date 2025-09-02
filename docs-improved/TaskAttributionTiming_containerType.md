# TaskAttributionTiming.containerType API 兼容性数据

## 基本信息

- **API名称**: `TaskAttributionTiming.containerType`
- **MDN文档**: [TaskAttributionTiming.containerType](https://developer.mozilla.org/docs/Web/API/TaskAttributionTiming/containerType)
- **规范文档**: [查看规范](https://w3c.github.io/longtasks/#dom-taskattributiontiming-containertype)
- **标签**: `web-features:longtasks`

## 使用示例

### 基本用法

```javascript
// TaskAttributionTiming.containerType 使用示例
// 请查阅MDN文档了解具体用法
console.log('TaskAttributionTiming.containerType API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 58 |  |
| Chrome Android | 同主版本 |  |
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

- **支持版本**: 58

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查TaskAttributionTiming.containerType是否支持
function isTaskAttributionTimingContainerTypeSupported() {
    return 'containerType' in taskattributiontiming && typeof taskattributiontiming.containerType === 'function';
}

if (isTaskAttributionTimingContainerTypeSupported()) {
    console.log('TaskAttributionTiming.containerType 支持');
    // 使用TaskAttributionTiming.containerType
} else {
    console.log('TaskAttributionTiming.containerType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TaskAttributionTiming.containerType polyfill
if (!taskattributiontiming.containerType) {
    // 在这里添加polyfill实现
    console.log('加载TaskAttributionTiming.containerType polyfill');
}
```

