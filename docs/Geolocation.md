# Geolocation API 兼容性数据

## 基本信息

- **API名称**: `Geolocation`
- **MDN文档**: [Geolocation](https://developer.mozilla.org/docs/Web/API/Geolocation)
- **规范文档**: [查看规范](https://w3c.github.io/geolocation/#geolocation_interface)
- **标签**: `web-features:geolocation`

## 使用示例

### 基本用法

```javascript
// Geolocation 使用示例
// 请查阅MDN文档了解具体用法
console.log('Geolocation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 | [GPSD](https://gpsd.gitlab.io/gpsd/index.html) (GPS daemon) support added in Firefox 3.6. WiFi-based location is provided by Google ([privacy](https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites)) or a custom provider ([MLS instructions](https://wiki.mozilla.org/CloudServices/Location/Software)). |
| Firefox Android | 4 |  |
| Internet Explorer | 9 |  |
| oculus | 同主版本 |  |
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
- **注意事项**:
  - [GPSD](https://gpsd.gitlab.io/gpsd/index.html) (GPS daemon) support added in Firefox 3.6. WiFi-based location is provided by Google ([privacy](https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites)) or a custom provider ([MLS instructions](https://wiki.mozilla.org/CloudServices/Location/Software)).

### Firefox Android

- **支持版本**: 4

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
// 检查Geolocation是否支持
function isGeolocationSupported() {
    return 'Geolocation' in window || typeof Geolocation !== 'undefined';
}

if (isGeolocationSupported()) {
    console.log('Geolocation 支持');
    // 使用Geolocation
} else {
    console.log('Geolocation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Geolocation polyfill
if (!window.Geolocation) {
    // 在这里添加polyfill实现
    console.log('加载Geolocation polyfill');
}
```

