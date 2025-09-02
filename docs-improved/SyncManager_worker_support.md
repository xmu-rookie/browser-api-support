# SyncManager.worker_support API 兼容性数据

## 基本信息

- **API名称**: `SyncManager.worker_support`
- **标签**: `web-features:background-sync`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// SyncManager.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('SyncManager.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 不支持 |  |
| Opera Android | 不支持 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61
- **支持版本**: 49
- **移除版本**: 61
- **部分实现**: 是
- **注意事项**:
  - Only available in the `Window` and `ServiceWorker` global scopes.

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SyncManager.worker_support是否支持
function isSyncManagerWorker_supportSupported() {
    return 'worker_support' in syncmanager && typeof syncmanager.worker_support === 'function';
}

if (isSyncManagerWorker_supportSupported()) {
    console.log('SyncManager.worker_support 支持');
    // 使用SyncManager.worker_support
} else {
    console.log('SyncManager.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SyncManager.worker_support polyfill
if (!syncmanager.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载SyncManager.worker_support polyfill');
}
```

