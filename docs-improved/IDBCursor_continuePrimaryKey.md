# IDBCursor.continuePrimaryKey API 兼容性数据

## 基本信息

- **API名称**: `IDBCursor.continuePrimaryKey`
- **MDN文档**: [IDBCursor.continuePrimaryKey](https://developer.mozilla.org/docs/Web/API/IDBCursor/continuePrimaryKey)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#ref-for-dom-idbcursor-continueprimarykey①)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBCursor.continuePrimaryKey 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBCursor.continuePrimaryKey API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 58 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 10 |  |
| Firefox Android | 51 |  |
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

- **支持版本**: 58

### Firefox

- **支持版本**: 10

### Firefox Android

- **支持版本**: 51

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBCursor.continuePrimaryKey是否支持
function isIDBCursorContinuePrimaryKeySupported() {
    return 'continuePrimaryKey' in idbcursor && typeof idbcursor.continuePrimaryKey === 'function';
}

if (isIDBCursorContinuePrimaryKeySupported()) {
    console.log('IDBCursor.continuePrimaryKey 支持');
    // 使用IDBCursor.continuePrimaryKey
} else {
    console.log('IDBCursor.continuePrimaryKey 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBCursor.continuePrimaryKey polyfill
if (!idbcursor.continuePrimaryKey) {
    // 在这里添加polyfill实现
    console.log('加载IDBCursor.continuePrimaryKey polyfill');
}
```

