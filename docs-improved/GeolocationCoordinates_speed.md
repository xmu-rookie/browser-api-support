# GeolocationCoordinates.speed API 兼容性数据

## 基本信息

- **API名称**: `GeolocationCoordinates.speed`
- **MDN文档**: [GeolocationCoordinates.speed](https://developer.mozilla.org/docs/Web/API/GeolocationCoordinates/speed)
- **规范文档**: [查看规范](https://w3c.github.io/geolocation/#speed-attribute)
- **标签**: `web-features:geolocation`

## 使用示例

### 基本用法

```javascript
// GeolocationCoordinates.speed 使用示例
// 请查阅MDN文档了解具体用法
console.log('GeolocationCoordinates.speed API');
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
- **支持版本**: 10.6
- **移除版本**: 15

### Opera Android

- **支持版本**: 16
- **支持版本**: 11
- **移除版本**: 14

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: ≤3

## 兼容性检查代码

### 特性检测

```javascript
// 检查GeolocationCoordinates.speed是否支持
function isGeolocationCoordinatesSpeedSupported() {
    return 'speed' in geolocationcoordinates && typeof geolocationcoordinates.speed === 'function';
}

if (isGeolocationCoordinatesSpeedSupported()) {
    console.log('GeolocationCoordinates.speed 支持');
    // 使用GeolocationCoordinates.speed
} else {
    console.log('GeolocationCoordinates.speed 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GeolocationCoordinates.speed polyfill
if (!geolocationcoordinates.speed) {
    // 在这里添加polyfill实现
    console.log('加载GeolocationCoordinates.speed polyfill');
}
```

