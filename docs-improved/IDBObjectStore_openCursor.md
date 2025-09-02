# IDBObjectStore.openCursor API 兼容性数据

## 基本信息

- **API名称**: `IDBObjectStore.openCursor`
- **MDN文档**: [IDBObjectStore.openCursor](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/openCursor)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#ref-for-dom-idbobjectstore-opencursor②)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBObjectStore.openCursor 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBObjectStore.openCursor API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 10 |  |
| Firefox Android | 22 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
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

- **支持版本**: 10

### Firefox Android

- **支持版本**: 22

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBObjectStore.openCursor是否支持
function isIDBObjectStoreOpenCursorSupported() {
    return 'openCursor' in idbobjectstore && typeof idbobjectstore.openCursor === 'function';
}

if (isIDBObjectStoreOpenCursorSupported()) {
    console.log('IDBObjectStore.openCursor 支持');
    // 使用IDBObjectStore.openCursor
} else {
    console.log('IDBObjectStore.openCursor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBObjectStore.openCursor polyfill
if (!idbobjectstore.openCursor) {
    // 在这里添加polyfill实现
    console.log('加载IDBObjectStore.openCursor polyfill');
}
```

