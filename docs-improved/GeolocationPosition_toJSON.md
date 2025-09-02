# GeolocationPosition.toJSON API 兼容性数据

## 基本信息

- **API名称**: `GeolocationPosition.toJSON`
- **MDN文档**: [GeolocationPosition.toJSON](https://developer.mozilla.org/docs/Web/API/GeolocationPosition/toJSON)
- **规范文档**: [查看规范](https://w3c.github.io/geolocation/#tojson-method)
- **标签**: `web-features:geolocation`

## 使用示例

### 基本用法

```javascript
// GeolocationPosition.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('GeolocationPosition.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 129 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 126

### Firefox

- **支持版本**: 129

### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查GeolocationPosition.toJSON是否支持
function isGeolocationPositionToJSONSupported() {
    return 'toJSON' in geolocationposition && typeof geolocationposition.toJSON === 'function';
}

if (isGeolocationPositionToJSONSupported()) {
    console.log('GeolocationPosition.toJSON 支持');
    // 使用GeolocationPosition.toJSON
} else {
    console.log('GeolocationPosition.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GeolocationPosition.toJSON polyfill
if (!geolocationposition.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载GeolocationPosition.toJSON polyfill');
}
```

