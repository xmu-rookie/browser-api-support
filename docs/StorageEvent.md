# StorageEvent API 兼容性数据

## 基本信息

- **API名称**: `StorageEvent`
- **MDN文档**: [StorageEvent](https://developer.mozilla.org/docs/Web/API/StorageEvent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webstorage.html#the-storageevent-interface)
- **标签**: `web-features:localstorage`

## 使用示例

### 基本用法

```javascript
// StorageEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('StorageEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| deno | ❌ 不支持 |  |
| Edge | 12 |  |
| Firefox | 13 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 13

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查StorageEvent是否支持
function isStorageEventSupported() {
    return 'StorageEvent' in window || typeof StorageEvent !== 'undefined';
}

if (isStorageEventSupported()) {
    console.log('StorageEvent 支持');
    // 使用StorageEvent
} else {
    console.log('StorageEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StorageEvent polyfill
if (!window.StorageEvent) {
    // 在这里添加polyfill实现
    console.log('加载StorageEvent polyfill');
}
```

