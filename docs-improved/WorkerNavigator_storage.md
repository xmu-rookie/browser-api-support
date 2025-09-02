# WorkerNavigator.storage API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.storage`
- **MDN文档**: [WorkerNavigator.storage](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/storage)
- **规范文档**: [查看规范](https://storage.spec.whatwg.org/#dom-navigatorstorage-storage)
- **标签**: `web-features:storage-manager`

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.storage 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.storage API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55

### Firefox

- **支持版本**: 57

### Safari

- **支持版本**: 15.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerNavigator.storage是否支持
function isWorkerNavigatorStorageSupported() {
    return 'storage' in workernavigator && typeof workernavigator.storage === 'function';
}

if (isWorkerNavigatorStorageSupported()) {
    console.log('WorkerNavigator.storage 支持');
    // 使用WorkerNavigator.storage
} else {
    console.log('WorkerNavigator.storage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.storage polyfill
if (!workernavigator.storage) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.storage polyfill');
}
```

