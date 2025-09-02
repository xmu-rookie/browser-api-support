# indexedDB API 兼容性数据

## 基本信息

- **API名称**: `indexedDB`
- **MDN文档**: [indexedDB](https://developer.mozilla.org/docs/Web/API/Window/indexedDB)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#dom-windoworworkerglobalscope-indexeddb)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// indexedDB 使用示例
// 请查阅MDN文档了解具体用法
console.log('indexedDB API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 16 |  |
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

- **支持版本**: 24

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 16
- **支持版本**: 10
- **前缀**: moz

### Firefox Android

- **支持版本**: 22

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查indexedDB是否支持
function isindexedDBSupported() {
    return 'indexedDB' in window || typeof indexedDB !== 'undefined';
}

if (isindexedDBSupported()) {
    console.log('indexedDB 支持');
    // 使用indexedDB
} else {
    console.log('indexedDB 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// indexedDB polyfill
if (!window.indexedDB) {
    // 在这里添加polyfill实现
    console.log('加载indexedDB polyfill');
}
```

