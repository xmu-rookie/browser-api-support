# Location.reload API 兼容性数据

## 基本信息

- **API名称**: `Location.reload`
- **MDN文档**: [Location.reload](https://developer.mozilla.org/docs/Web/API/Location/reload)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-location-reload-dev)
- **标签**: `web-features:location`

## 使用示例

### 基本用法

```javascript
// Location.reload 使用示例
// 请查阅MDN文档了解具体用法
console.log('Location.reload API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.7 | This method exists but has no effect in Deno. |
| Edge | 12 | Before Edge 79, if a page added to _Trusted Sites_ contains a cross-origin iframe, then calling `rel... |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 | If a page added to _Trusted Sites_ contains a cross-origin iframe, then calling `reload()` from with... |
| Oculus | 同主版本 |  |
| Opera | 3 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.7
- **需要标志**: 
  - --location [url]: true
- **部分实现**: 是
- **注意事项**:
  - This method exists but has no effect in Deno.

### Edge

- **支持版本**: 12
- **注意事项**:
  - Before Edge 79, if a page added to _Trusted Sites_ contains a cross-origin iframe, then calling `reload()` from within the iframe reloads the trusted page (in other words, the top page reloads, not the iframe).

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5.5
- **注意事项**:
  - If a page added to _Trusted Sites_ contains a cross-origin iframe, then calling `reload()` from within the iframe reloads the trusted page (in other words, the top page reloads, not the iframe).

### Opera

- **支持版本**: 3

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Location.reload是否支持
function isLocationReloadSupported() {
    return 'reload' in location && typeof location.reload === 'function';
}

if (isLocationReloadSupported()) {
    console.log('Location.reload 支持');
    // 使用Location.reload
} else {
    console.log('Location.reload 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Location.reload polyfill
if (!location.reload) {
    // 在这里添加polyfill实现
    console.log('加载Location.reload polyfill');
}
```

