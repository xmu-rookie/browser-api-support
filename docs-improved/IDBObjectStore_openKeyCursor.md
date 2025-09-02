# IDBObjectStore.openKeyCursor API 兼容性数据

## 基本信息

- **API名称**: `IDBObjectStore.openKeyCursor`
- **MDN文档**: [IDBObjectStore.openKeyCursor](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/openKeyCursor)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#ref-for-dom-idbobjectstore-openkeycursor①)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBObjectStore.openKeyCursor 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBObjectStore.openKeyCursor API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Firefox

- **支持版本**: 44

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBObjectStore.openKeyCursor是否支持
function isIDBObjectStoreOpenKeyCursorSupported() {
    return 'openKeyCursor' in idbobjectstore && typeof idbobjectstore.openKeyCursor === 'function';
}

if (isIDBObjectStoreOpenKeyCursorSupported()) {
    console.log('IDBObjectStore.openKeyCursor 支持');
    // 使用IDBObjectStore.openKeyCursor
} else {
    console.log('IDBObjectStore.openKeyCursor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBObjectStore.openKeyCursor polyfill
if (!idbobjectstore.openKeyCursor) {
    // 在这里添加polyfill实现
    console.log('加载IDBObjectStore.openKeyCursor polyfill');
}
```

