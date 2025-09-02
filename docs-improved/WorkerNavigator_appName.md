# WorkerNavigator.appName API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.appName`
- **MDN文档**: [WorkerNavigator.appName](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/appName)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-appname-dev)

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.appName 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.appName API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerNavigator.appName是否支持
function isWorkerNavigatorAppNameSupported() {
    return 'appName' in workernavigator && typeof workernavigator.appName === 'function';
}

if (isWorkerNavigatorAppNameSupported()) {
    console.log('WorkerNavigator.appName 支持');
    // 使用WorkerNavigator.appName
} else {
    console.log('WorkerNavigator.appName 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.appName polyfill
if (!workernavigator.appName) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.appName polyfill');
}
```

