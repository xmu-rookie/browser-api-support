# GeolocationPosition.timestamp API 兼容性数据

## 基本信息

- **API名称**: `GeolocationPosition.timestamp`
- **MDN文档**: [GeolocationPosition.timestamp](https://developer.mozilla.org/docs/Web/API/GeolocationPosition/timestamp)
- **规范文档**: [查看规范](https://w3c.github.io/geolocation/#timestamp-attribute)
- **标签**: `web-features:geolocation`

## 使用示例

### 基本用法

```javascript
// GeolocationPosition.timestamp 使用示例
// 请查阅MDN文档了解具体用法
console.log('GeolocationPosition.timestamp API');
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
| Opera | 16 |  |
| Opera Android | 16 |  |
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

- **支持版本**: 16

### Opera Android

- **支持版本**: 16

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: ≤3

## 兼容性检查代码

### 特性检测

```javascript
// 检查GeolocationPosition.timestamp是否支持
function isGeolocationPositionTimestampSupported() {
    return 'timestamp' in geolocationposition && typeof geolocationposition.timestamp === 'function';
}

if (isGeolocationPositionTimestampSupported()) {
    console.log('GeolocationPosition.timestamp 支持');
    // 使用GeolocationPosition.timestamp
} else {
    console.log('GeolocationPosition.timestamp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GeolocationPosition.timestamp polyfill
if (!geolocationposition.timestamp) {
    // 在这里添加polyfill实现
    console.log('加载GeolocationPosition.timestamp polyfill');
}
```

