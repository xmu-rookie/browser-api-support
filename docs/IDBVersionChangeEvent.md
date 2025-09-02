# IDBVersionChangeEvent API 兼容性数据

## 基本信息

- **API名称**: `IDBVersionChangeEvent`
- **MDN文档**: [IDBVersionChangeEvent](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#events)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBVersionChangeEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBVersionChangeEvent API');
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
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
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

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBVersionChangeEvent是否支持
function isIDBVersionChangeEventSupported() {
    return 'IDBVersionChangeEvent' in window || typeof IDBVersionChangeEvent !== 'undefined';
}

if (isIDBVersionChangeEventSupported()) {
    console.log('IDBVersionChangeEvent 支持');
    // 使用IDBVersionChangeEvent
} else {
    console.log('IDBVersionChangeEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBVersionChangeEvent polyfill
if (!window.IDBVersionChangeEvent) {
    // 在这里添加polyfill实现
    console.log('加载IDBVersionChangeEvent polyfill');
}
```

