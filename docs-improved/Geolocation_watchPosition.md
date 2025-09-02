# Geolocation.watchPosition API 兼容性数据

## 基本信息

- **API名称**: `Geolocation.watchPosition`
- **MDN文档**: [Geolocation.watchPosition](https://developer.mozilla.org/docs/Web/API/Geolocation/watchPosition)
- **规范文档**: [查看规范](https://w3c.github.io/geolocation/#watchposition-method)
- **标签**: `web-features:geolocation`

## 使用示例

### 基本用法

```javascript
// Geolocation.watchPosition 使用示例
// 请查阅MDN文档了解具体用法
console.log('Geolocation.watchPosition API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 5 |  |
| Safari iOS | ≤3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: ≤3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Geolocation.watchPosition是否支持
function isGeolocationWatchPositionSupported() {
    return 'watchPosition' in geolocation && typeof geolocation.watchPosition === 'function';
}

if (isGeolocationWatchPositionSupported()) {
    console.log('Geolocation.watchPosition 支持');
    // 使用Geolocation.watchPosition
} else {
    console.log('Geolocation.watchPosition 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Geolocation.watchPosition polyfill
if (!geolocation.watchPosition) {
    // 在这里添加polyfill实现
    console.log('加载Geolocation.watchPosition polyfill');
}
```

