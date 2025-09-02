# StorageEvent.storageArea API 兼容性数据

## 基本信息

- **API名称**: `StorageEvent.storageArea`
- **MDN文档**: [StorageEvent.storageArea](https://developer.mozilla.org/docs/Web/API/StorageEvent/storageArea)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webstorage.html#dom-storageevent-storagearea-dev)
- **标签**: `web-features:localstorage`

## 使用示例

### 基本用法

```javascript
// StorageEvent.storageArea 使用示例
// 请查阅MDN文档了解具体用法
console.log('StorageEvent.storageArea API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 13 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 3

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 13

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查StorageEvent.storageArea是否支持
function isStorageEventStorageAreaSupported() {
    return 'storageArea' in storageevent && typeof storageevent.storageArea === 'function';
}

if (isStorageEventStorageAreaSupported()) {
    console.log('StorageEvent.storageArea 支持');
    // 使用StorageEvent.storageArea
} else {
    console.log('StorageEvent.storageArea 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StorageEvent.storageArea polyfill
if (!storageevent.storageArea) {
    // 在这里添加polyfill实现
    console.log('加载StorageEvent.storageArea polyfill');
}
```

