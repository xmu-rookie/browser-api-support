# GeolocationPositionError.code API 兼容性数据

## 基本信息

- **API名称**: `GeolocationPositionError.code`
- **MDN文档**: [GeolocationPositionError.code](https://developer.mozilla.org/docs/Web/API/GeolocationPositionError/code)
- **规范文档**: [查看规范](https://w3c.github.io/geolocation/#code-attribute)
- **标签**: `web-features:geolocation`

## 使用示例

### 基本用法

```javascript
// GeolocationPositionError.code 使用示例
// 请查阅MDN文档了解具体用法
console.log('GeolocationPositionError.code API');
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
| Safari iOS | 同主版本 |  |
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

## 兼容性检查代码

### 特性检测

```javascript
// 检查GeolocationPositionError.code是否支持
function isGeolocationPositionErrorCodeSupported() {
    return 'code' in geolocationpositionerror && typeof geolocationpositionerror.code === 'function';
}

if (isGeolocationPositionErrorCodeSupported()) {
    console.log('GeolocationPositionError.code 支持');
    // 使用GeolocationPositionError.code
} else {
    console.log('GeolocationPositionError.code 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GeolocationPositionError.code polyfill
if (!geolocationpositionerror.code) {
    // 在这里添加polyfill实现
    console.log('加载GeolocationPositionError.code polyfill');
}
```

