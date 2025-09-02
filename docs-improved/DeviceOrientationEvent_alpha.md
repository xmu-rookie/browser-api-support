# DeviceOrientationEvent.alpha API 兼容性数据

## 基本信息

- **API名称**: `DeviceOrientationEvent.alpha`
- **MDN文档**: [DeviceOrientationEvent.alpha](https://developer.mozilla.org/docs/Web/API/DeviceOrientationEvent/alpha)
- **规范文档**: [查看规范](https://w3c.github.io/deviceorientation/#dom-deviceorientationevent-alpha)
- **标签**: `web-features:device-orientation-events`

## 使用示例

### 基本用法

```javascript
// DeviceOrientationEvent.alpha 使用示例
// 请查阅MDN文档了解具体用法
console.log('DeviceOrientationEvent.alpha API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 7 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 4.2 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 7

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 17

### Safari iOS

- **支持版本**: 4.2

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查DeviceOrientationEvent.alpha是否支持
function isDeviceOrientationEventAlphaSupported() {
    return 'alpha' in deviceorientationevent && typeof deviceorientationevent.alpha === 'function';
}

if (isDeviceOrientationEventAlphaSupported()) {
    console.log('DeviceOrientationEvent.alpha 支持');
    // 使用DeviceOrientationEvent.alpha
} else {
    console.log('DeviceOrientationEvent.alpha 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DeviceOrientationEvent.alpha polyfill
if (!deviceorientationevent.alpha) {
    // 在这里添加polyfill实现
    console.log('加载DeviceOrientationEvent.alpha polyfill');
}
```

