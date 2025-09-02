# GeolocationCoordinates API 兼容性数据

## 基本信息

- **API名称**: `GeolocationCoordinates`
- **MDN文档**: [GeolocationCoordinates](https://developer.mozilla.org/docs/Web/API/GeolocationCoordinates)
- **规范文档**: [查看规范](https://w3c.github.io/geolocation/#coordinates_interface)
- **标签**: `web-features:geolocation`

## 使用示例

### 基本用法

```javascript
// GeolocationCoordinates 使用示例
// 请查阅MDN文档了解具体用法
console.log('GeolocationCoordinates API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 未知 |  |
| Firefox | 未知 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| oculus | 同主版本 |  |
| Opera | 未知 |  |
| Opera Android | 未知 |  |
| Safari | 未知 |  |
| Safari iOS | 未知 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge


### Firefox


### Internet Explorer

- **支持版本**: 9

### Opera


### Opera Android


### Safari


### Safari iOS


## 兼容性检查代码

### 特性检测

```javascript
// 检查GeolocationCoordinates是否支持
function isGeolocationCoordinatesSupported() {
    return 'GeolocationCoordinates' in window || typeof GeolocationCoordinates !== 'undefined';
}

if (isGeolocationCoordinatesSupported()) {
    console.log('GeolocationCoordinates 支持');
    // 使用GeolocationCoordinates
} else {
    console.log('GeolocationCoordinates 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GeolocationCoordinates polyfill
if (!window.GeolocationCoordinates) {
    // 在这里添加polyfill实现
    console.log('加载GeolocationCoordinates polyfill');
}
```

