# IDBObjectStore.name API 兼容性数据

## 基本信息

- **API名称**: `IDBObjectStore.name`
- **MDN文档**: [IDBObjectStore.name](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/name)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#ref-for-dom-idbobjectstore-name①)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBObjectStore.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBObjectStore.name API');
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
// 检查IDBObjectStore.name是否支持
function isIDBObjectStoreNameSupported() {
    return 'name' in idbobjectstore && typeof idbobjectstore.name === 'function';
}

if (isIDBObjectStoreNameSupported()) {
    console.log('IDBObjectStore.name 支持');
    // 使用IDBObjectStore.name
} else {
    console.log('IDBObjectStore.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBObjectStore.name polyfill
if (!idbobjectstore.name) {
    // 在这里添加polyfill实现
    console.log('加载IDBObjectStore.name polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **renaming_through_name_setter**: Renaming through `name` setter

