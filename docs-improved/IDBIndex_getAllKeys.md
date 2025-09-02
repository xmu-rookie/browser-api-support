# IDBIndex.getAllKeys API 兼容性数据

## 基本信息

- **API名称**: `IDBIndex.getAllKeys`
- **MDN文档**: [IDBIndex.getAllKeys](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAllKeys)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#ref-for-dom-idbindex-getallkeys①)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBIndex.getAllKeys 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBIndex.getAllKeys API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 48 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 44 |  |
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

- **支持版本**: 48

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBIndex.getAllKeys是否支持
function isIDBIndexGetAllKeysSupported() {
    return 'getAllKeys' in idbindex && typeof idbindex.getAllKeys === 'function';
}

if (isIDBIndexGetAllKeysSupported()) {
    console.log('IDBIndex.getAllKeys 支持');
    // 使用IDBIndex.getAllKeys
} else {
    console.log('IDBIndex.getAllKeys 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBIndex.getAllKeys polyfill
if (!idbindex.getAllKeys) {
    // 在这里添加polyfill实现
    console.log('加载IDBIndex.getAllKeys polyfill');
}
```

