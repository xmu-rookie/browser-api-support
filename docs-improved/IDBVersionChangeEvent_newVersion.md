# IDBVersionChangeEvent.newVersion API 兼容性数据

## 基本信息

- **API名称**: `IDBVersionChangeEvent.newVersion`
- **MDN文档**: [IDBVersionChangeEvent.newVersion](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent/newVersion)
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#dom-idbversionchangeevent-newversion)
- **标签**: `web-features:indexeddb`

## 使用示例

### 基本用法

```javascript
// IDBVersionChangeEvent.newVersion 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBVersionChangeEvent.newVersion API');
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
// 检查IDBVersionChangeEvent.newVersion是否支持
function isIDBVersionChangeEventNewVersionSupported() {
    return 'newVersion' in idbversionchangeevent && typeof idbversionchangeevent.newVersion === 'function';
}

if (isIDBVersionChangeEventNewVersionSupported()) {
    console.log('IDBVersionChangeEvent.newVersion 支持');
    // 使用IDBVersionChangeEvent.newVersion
} else {
    console.log('IDBVersionChangeEvent.newVersion 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBVersionChangeEvent.newVersion polyfill
if (!idbversionchangeevent.newVersion) {
    // 在这里添加polyfill实现
    console.log('加载IDBVersionChangeEvent.newVersion polyfill');
}
```

