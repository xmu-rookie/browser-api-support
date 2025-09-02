# IDBRequest.success_event API 兼容性数据

## 基本信息

- **API名称**: `IDBRequest.success_event`
- **MDN文档**: [IDBRequest.success_event](https://developer.mozilla.org/docs/Web/API/IDBRequest/success_event)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#eventdef-idbrequest-success)
- **标签**: `web-features:indexeddb`
- **描述**: `success` event

## 使用示例

### 基本用法

```javascript
// IDBRequest.success_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBRequest.success_event API');
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
// 检查IDBRequest.success_event是否支持
function isIDBRequestSuccess_eventSupported() {
    return 'success_event' in idbrequest && typeof idbrequest.success_event === 'function';
}

if (isIDBRequestSuccess_eventSupported()) {
    console.log('IDBRequest.success_event 支持');
    // 使用IDBRequest.success_event
} else {
    console.log('IDBRequest.success_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBRequest.success_event polyfill
if (!idbrequest.success_event) {
    // 在这里添加polyfill实现
    console.log('加载IDBRequest.success_event polyfill');
}
```

