# WorkerNavigator.platform API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.platform`
- **MDN文档**: [WorkerNavigator.platform](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/platform)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-platform-dev)

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.platform 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.platform API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 | Before Firefox 69, `platform` would report running on a 32-bit CPU if running the 32-bit version of ... |
| Firefox Android | 4 |  |
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
- **注意事项**:
  - Before Firefox 69, `platform` would report running on a 32-bit CPU if running the 32-bit version of Firefox on a 64-bit system.
  - You can override the value returned by `platform` by setting the preference `general.platform.override` to the string you wish to be returned instead.

### Firefox Android

- **支持版本**: 4

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
// 检查WorkerNavigator.platform是否支持
function isWorkerNavigatorPlatformSupported() {
    return 'platform' in workernavigator && typeof workernavigator.platform === 'function';
}

if (isWorkerNavigatorPlatformSupported()) {
    console.log('WorkerNavigator.platform 支持');
    // 使用WorkerNavigator.platform
} else {
    console.log('WorkerNavigator.platform 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.platform polyfill
if (!workernavigator.platform) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.platform polyfill');
}
```

