# IDBOpenDBRequest API 兼容性数据

## 基本信息

- **API名称**: `IDBOpenDBRequest`
- **MDN文档**: [IDBOpenDBRequest](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#idbopendbrequest)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBOpenDBRequest 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBOpenDBRequest API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 未知 |  |
| Firefox Android | 22 |  |
| Internet Explorer | 10 |  |
| oculus | 同主版本 |  |
| Opera | 15 |  |
| Opera Android | 14 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge

- **支持版本**: 12

### Firefox


### Firefox Android

- **支持版本**: 22

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 15

### Opera Android

- **支持版本**: 14

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBOpenDBRequest是否支持
function isIDBOpenDBRequestSupported() {
    return 'IDBOpenDBRequest' in window || typeof IDBOpenDBRequest !== 'undefined';
}

if (isIDBOpenDBRequestSupported()) {
    console.log('IDBOpenDBRequest 支持');
    // 使用IDBOpenDBRequest
} else {
    console.log('IDBOpenDBRequest 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBOpenDBRequest polyfill
if (!window.IDBOpenDBRequest) {
    // 在这里添加polyfill实现
    console.log('加载IDBOpenDBRequest polyfill');
}
```

