# IDBObjectStore.transaction API 兼容性数据

## 基本信息

- **API名称**: `IDBObjectStore.transaction`
- **MDN文档**: [IDBObjectStore.transaction](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/transaction)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#ref-for-dom-idbobjectstore-transaction①)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBObjectStore.transaction 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBObjectStore.transaction API');
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
// 检查IDBObjectStore.transaction是否支持
function isIDBObjectStoreTransactionSupported() {
    return 'transaction' in idbobjectstore && typeof idbobjectstore.transaction === 'function';
}

if (isIDBObjectStoreTransactionSupported()) {
    console.log('IDBObjectStore.transaction 支持');
    // 使用IDBObjectStore.transaction
} else {
    console.log('IDBObjectStore.transaction 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBObjectStore.transaction polyfill
if (!idbobjectstore.transaction) {
    // 在这里添加polyfill实现
    console.log('加载IDBObjectStore.transaction polyfill');
}
```

