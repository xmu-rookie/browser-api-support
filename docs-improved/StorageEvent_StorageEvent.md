# StorageEvent.StorageEvent API 兼容性数据

## 基本信息

- **API名称**: `StorageEvent.StorageEvent`
- **MDN文档**: [StorageEvent.StorageEvent](https://developer.mozilla.org/docs/Web/API/StorageEvent/StorageEvent)
- **标签**: `web-features:localstorage`
- **描述**: `StorageEvent()` constructor

## 使用示例

### 基本用法

```javascript
// StorageEvent.StorageEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('StorageEvent.StorageEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 17 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 17 |  |
| Firefox | 13 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 17

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 13

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查StorageEvent.StorageEvent是否支持
function isStorageEventStorageEventSupported() {
    return 'StorageEvent' in storageevent && typeof storageevent.StorageEvent === 'function';
}

if (isStorageEventStorageEventSupported()) {
    console.log('StorageEvent.StorageEvent 支持');
    // 使用StorageEvent.StorageEvent
} else {
    console.log('StorageEvent.StorageEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StorageEvent.StorageEvent polyfill
if (!storageevent.StorageEvent) {
    // 在这里添加polyfill实现
    console.log('加载StorageEvent.StorageEvent polyfill');
}
```

