# IDBKeyRange.includes API 兼容性数据

## 基本信息

- **API名称**: `IDBKeyRange.includes`
- **MDN文档**: [IDBKeyRange.includes](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/includes)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#ref-for-dom-idbkeyrange-includes①)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBKeyRange.includes 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBKeyRange.includes API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 47 |  |
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

- **支持版本**: 52

### Firefox

- **支持版本**: 47

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBKeyRange.includes是否支持
function isIDBKeyRangeIncludesSupported() {
    return 'includes' in idbkeyrange && typeof idbkeyrange.includes === 'function';
}

if (isIDBKeyRangeIncludesSupported()) {
    console.log('IDBKeyRange.includes 支持');
    // 使用IDBKeyRange.includes
} else {
    console.log('IDBKeyRange.includes 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBKeyRange.includes polyfill
if (!idbkeyrange.includes) {
    // 在这里添加polyfill实现
    console.log('加载IDBKeyRange.includes polyfill');
}
```

