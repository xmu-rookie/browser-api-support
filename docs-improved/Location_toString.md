# Location.toString API 兼容性数据

## 基本信息

- **API名称**: `Location.toString`
- **MDN文档**: [Location.toString](https://developer.mozilla.org/docs/Web/API/Location/toString)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-location-href-dev)
- **标签**: `web-features:location`

## 使用示例

### 基本用法

```javascript
// Location.toString 使用示例
// 请查阅MDN文档了解具体用法
console.log('Location.toString API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.7 |  |
| Edge | 12 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Intranet sites are set to Compatibility View, which will emulate IE7 and omit `window.location.toStr... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 52

### Deno

- **支持版本**: 1.7
- **需要标志**: 
  - --location [url]: true

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 22

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Intranet sites are set to Compatibility View, which will emulate IE7 and omit `window.location.toString`.

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Location.toString是否支持
function isLocationToStringSupported() {
    return 'toString' in location && typeof location.toString === 'function';
}

if (isLocationToStringSupported()) {
    console.log('Location.toString 支持');
    // 使用Location.toString
} else {
    console.log('Location.toString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Location.toString polyfill
if (!location.toString) {
    // 在这里添加polyfill实现
    console.log('加载Location.toString polyfill');
}
```

