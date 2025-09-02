# IDBTransaction.objectStoreNames API 兼容性数据

## 基本信息

- **API名称**: `IDBTransaction.objectStoreNames`
- **MDN文档**: [IDBTransaction.objectStoreNames](https://developer.mozilla.org/docs/Web/API/IDBTransaction/objectStoreNames)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#ref-for-dom-idbtransaction-objectstorenames①)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBTransaction.objectStoreNames 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBTransaction.objectStoreNames API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 48 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 10 |  |
| Firefox Android | 22 |  |
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

- **支持版本**: 48

### Firefox

- **支持版本**: 10

### Firefox Android

- **支持版本**: 22

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBTransaction.objectStoreNames是否支持
function isIDBTransactionObjectStoreNamesSupported() {
    return 'objectStoreNames' in idbtransaction && typeof idbtransaction.objectStoreNames === 'function';
}

if (isIDBTransactionObjectStoreNamesSupported()) {
    console.log('IDBTransaction.objectStoreNames 支持');
    // 使用IDBTransaction.objectStoreNames
} else {
    console.log('IDBTransaction.objectStoreNames 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBTransaction.objectStoreNames polyfill
if (!idbtransaction.objectStoreNames) {
    // 在这里添加polyfill实现
    console.log('加载IDBTransaction.objectStoreNames polyfill');
}
```

