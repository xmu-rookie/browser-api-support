# Location.origin API 兼容性数据

## 基本信息

- **API名称**: `Location.origin`
- **MDN文档**: [Location.origin](https://developer.mozilla.org/docs/Web/API/Location/origin)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-location-origin-dev)
- **标签**: `web-features:location`

## 使用示例

### 基本用法

```javascript
// Location.origin 使用示例
// 请查阅MDN文档了解具体用法
console.log('Location.origin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.7 |  |
| Edge | 12 |  |
| Firefox | 21 | Before Firefox 49, results for URL using the blob scheme incorrectly returned null. |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Intranet sites are set to Compatibility View, which will emulate IE7 and omit `window.location.origi... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 8

### Deno

- **支持版本**: 1.7
- **需要标志**: 
  - --location [url]: true

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 21
- **注意事项**:
  - Before Firefox 49, results for URL using the blob scheme incorrectly returned null.

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Intranet sites are set to Compatibility View, which will emulate IE7 and omit `window.location.origin`.

### Safari

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Location.origin是否支持
function isLocationOriginSupported() {
    return 'origin' in location && typeof location.origin === 'function';
}

if (isLocationOriginSupported()) {
    console.log('Location.origin 支持');
    // 使用Location.origin
} else {
    console.log('Location.origin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Location.origin polyfill
if (!location.origin) {
    // 在这里添加polyfill实现
    console.log('加载Location.origin polyfill');
}
```

