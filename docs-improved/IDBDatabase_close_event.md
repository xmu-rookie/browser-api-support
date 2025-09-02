# IDBDatabase.close_event API 兼容性数据

## 基本信息

- **API名称**: `IDBDatabase.close_event`
- **MDN文档**: [IDBDatabase.close_event](https://developer.mozilla.org/docs/Web/API/IDBDatabase/close_event)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#closing-connection,https://w3c.github.io/IndexedDB/#dom-idbdatabase-onclose)
- **标签**: `web-features:indexeddb`
- **描述**: `close` event

## 使用示例

### 基本用法

```javascript
// IDBDatabase.close_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBDatabase.close_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 30 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 30

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBDatabase.close_event是否支持
function isIDBDatabaseClose_eventSupported() {
    return 'close_event' in idbdatabase && typeof idbdatabase.close_event === 'function';
}

if (isIDBDatabaseClose_eventSupported()) {
    console.log('IDBDatabase.close_event 支持');
    // 使用IDBDatabase.close_event
} else {
    console.log('IDBDatabase.close_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBDatabase.close_event polyfill
if (!idbdatabase.close_event) {
    // 在这里添加polyfill实现
    console.log('加载IDBDatabase.close_event polyfill');
}
```

