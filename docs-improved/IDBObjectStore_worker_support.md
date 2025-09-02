# IDBObjectStore.worker_support API 兼容性数据

## 基本信息

- **API名称**: `IDBObjectStore.worker_support`
- **标签**: `web-features:indexeddb`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// IDBObjectStore.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBObjectStore.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 37 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 37

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBObjectStore.worker_support是否支持
function isIDBObjectStoreWorker_supportSupported() {
    return 'worker_support' in idbobjectstore && typeof idbobjectstore.worker_support === 'function';
}

if (isIDBObjectStoreWorker_supportSupported()) {
    console.log('IDBObjectStore.worker_support 支持');
    // 使用IDBObjectStore.worker_support
} else {
    console.log('IDBObjectStore.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBObjectStore.worker_support polyfill
if (!idbobjectstore.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载IDBObjectStore.worker_support polyfill');
}
```

