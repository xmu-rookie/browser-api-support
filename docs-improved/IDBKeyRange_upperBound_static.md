# IDBKeyRange.upperBound_static API 兼容性数据

## 基本信息

- **API名称**: `IDBKeyRange.upperBound_static`
- **MDN文档**: [IDBKeyRange.upperBound_static](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upperBound_static)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#ref-for-dom-idbkeyrange-upperbound①)
- **标签**: `web-features:indexeddb`
- **描述**: `upperBound()` static method

## 使用示例

### 基本用法

```javascript
// IDBKeyRange.upperBound_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBKeyRange.upperBound_static API');
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
// 检查IDBKeyRange.upperBound_static是否支持
function isIDBKeyRangeUpperBound_staticSupported() {
    return 'upperBound_static' in idbkeyrange && typeof idbkeyrange.upperBound_static === 'function';
}

if (isIDBKeyRangeUpperBound_staticSupported()) {
    console.log('IDBKeyRange.upperBound_static 支持');
    // 使用IDBKeyRange.upperBound_static
} else {
    console.log('IDBKeyRange.upperBound_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBKeyRange.upperBound_static polyfill
if (!idbkeyrange.upperBound_static) {
    // 在这里添加polyfill实现
    console.log('加载IDBKeyRange.upperBound_static polyfill');
}
```

