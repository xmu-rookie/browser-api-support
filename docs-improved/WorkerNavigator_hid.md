# WorkerNavigator.hid API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.hid`
- **MDN文档**: [WorkerNavigator.hid](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/hid)
- **规范文档**: [查看规范](https://wicg.github.io/webhid/#hid-attribute-0)
- **标签**: `web-features:webhid`

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.hid 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.hid API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 131 |  |
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
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 131

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerNavigator.hid是否支持
function isWorkerNavigatorHidSupported() {
    return 'hid' in workernavigator && typeof workernavigator.hid === 'function';
}

if (isWorkerNavigatorHidSupported()) {
    console.log('WorkerNavigator.hid 支持');
    // 使用WorkerNavigator.hid
} else {
    console.log('WorkerNavigator.hid 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.hid polyfill
if (!workernavigator.hid) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.hid polyfill');
}
```

