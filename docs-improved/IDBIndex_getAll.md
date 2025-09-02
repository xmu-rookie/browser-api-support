# IDBIndex.getAll API 兼容性数据

## 基本信息

- **API名称**: `IDBIndex.getAll`
- **MDN文档**: [IDBIndex.getAll](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAll)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#ref-for-dom-idbindex-getall①)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBIndex.getAll 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBIndex.getAll API');
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
// 检查IDBIndex.getAll是否支持
function isIDBIndexGetAllSupported() {
    return 'getAll' in idbindex && typeof idbindex.getAll === 'function';
}

if (isIDBIndexGetAllSupported()) {
    console.log('IDBIndex.getAll 支持');
    // 使用IDBIndex.getAll
} else {
    console.log('IDBIndex.getAll 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBIndex.getAll polyfill
if (!idbindex.getAll) {
    // 在这里添加polyfill实现
    console.log('加载IDBIndex.getAll polyfill');
}
```

