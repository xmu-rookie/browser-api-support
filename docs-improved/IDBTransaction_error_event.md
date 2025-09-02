# IDBTransaction.error_event API 兼容性数据

## 基本信息

- **API名称**: `IDBTransaction.error_event`
- **MDN文档**: [IDBTransaction.error_event](https://developer.mozilla.org/docs/Web/API/IDBTransaction/error_event)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#eventdef-idbrequest-error)
- **标签**: `web-features:indexeddb`
- **描述**: `error` event

## 使用示例

### 基本用法

```javascript
// IDBTransaction.error_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBTransaction.error_event API');
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
// 检查IDBTransaction.error_event是否支持
function isIDBTransactionError_eventSupported() {
    return 'error_event' in idbtransaction && typeof idbtransaction.error_event === 'function';
}

if (isIDBTransactionError_eventSupported()) {
    console.log('IDBTransaction.error_event 支持');
    // 使用IDBTransaction.error_event
} else {
    console.log('IDBTransaction.error_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBTransaction.error_event polyfill
if (!idbtransaction.error_event) {
    // 在这里添加polyfill实现
    console.log('加载IDBTransaction.error_event polyfill');
}
```

