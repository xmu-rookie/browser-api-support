# Navigator.geolocation API 兼容性数据

## 基本信息

- **API名称**: `Navigator.geolocation`
- **MDN文档**: [Navigator.geolocation](https://developer.mozilla.org/docs/Web/API/Navigator/geolocation)
- **规范文档**: [查看规范](https://w3c.github.io/geolocation/#dom-navigator-geolocation)
- **标签**: `web-features:geolocation`

## 使用示例

### 基本用法

```javascript
// 获取地理位置
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log('纬度:', position.coords.latitude);
            console.log('经度:', position.coords.longitude);
        },
        function(error) {
            console.error('获取位置失败:', error);
        }
    );
} else {
    console.log('浏览器不支持地理位置');
}
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
| Node.js | 不支持 |  |
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

### Node.js

- **支持版本**: 不支持

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
// 检查Navigator.geolocation是否支持
function isNavigatorGeolocationSupported() {
    return 'geolocation' in navigator && typeof navigator.geolocation === 'function';
}

if (isNavigatorGeolocationSupported()) {
    console.log('Navigator.geolocation 支持');
    // 使用Navigator.geolocation
} else {
    console.log('Navigator.geolocation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.geolocation polyfill
if (!navigator.geolocation) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.geolocation polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **secure_context_required**: Secure context required

