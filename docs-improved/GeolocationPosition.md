# GeolocationPosition API 兼容性数据

## 基本信息

- **API名称**: `GeolocationPosition`
- **MDN文档**: [GeolocationPosition](https://developer.mozilla.org/docs/Web/API/GeolocationPosition)
- **规范文档**: [查看规范](https://w3c.github.io/geolocation/#position_interface)
- **标签**: `web-features:geolocation`

## 使用示例

### 基本用法

```javascript
// GeolocationPosition 使用示例
// 请查阅MDN文档了解具体用法
console.log('GeolocationPosition API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 79 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 72 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 13.4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 79
- **支持版本**: 5
- **移除版本**: 78

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 72
- **支持版本**: 3.5
- **移除版本**: 71

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 13.1
- **支持版本**: 5
- **移除版本**: 13.1

### Safari iOS

- **支持版本**: 13.4
- **支持版本**: ≤3
- **移除版本**: 13.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查GeolocationPosition是否支持
function isGeolocationPositionSupported() {
    return 'GeolocationPosition' in window || typeof GeolocationPosition !== 'undefined';
}

if (isGeolocationPositionSupported()) {
    console.log('GeolocationPosition 支持');
    // 使用GeolocationPosition
} else {
    console.log('GeolocationPosition 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GeolocationPosition polyfill
if (!window.GeolocationPosition) {
    // 在这里添加polyfill实现
    console.log('加载GeolocationPosition polyfill');
}
```

