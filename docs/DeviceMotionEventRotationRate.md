# DeviceMotionEventRotationRate API 兼容性数据

## 基本信息

- **API名称**: `DeviceMotionEventRotationRate`
- **MDN文档**: [DeviceMotionEventRotationRate](https://developer.mozilla.org/docs/Web/API/DeviceMotionEventRotationRate)
- **规范文档**: [查看规范](https://w3c.github.io/deviceorientation/#devicemotioneventrotationrate)
- **标签**: `web-features:device-orientation-events`

## 使用示例

### 基本用法

```javascript
// DeviceMotionEventRotationRate 使用示例
// 请查阅MDN文档了解具体用法
console.log('DeviceMotionEventRotationRate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 4.2 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | ❌ 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 31

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 不支持

### Safari iOS

- **支持版本**: 4.2

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DeviceMotionEventRotationRate是否支持
function isDeviceMotionEventRotationRateSupported() {
    return 'DeviceMotionEventRotationRate' in window || typeof DeviceMotionEventRotationRate !== 'undefined';
}

if (isDeviceMotionEventRotationRateSupported()) {
    console.log('DeviceMotionEventRotationRate 支持');
    // 使用DeviceMotionEventRotationRate
} else {
    console.log('DeviceMotionEventRotationRate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DeviceMotionEventRotationRate polyfill
if (!window.DeviceMotionEventRotationRate) {
    // 在这里添加polyfill实现
    console.log('加载DeviceMotionEventRotationRate polyfill');
}
```

