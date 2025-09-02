# DeviceMotionEventRotationRate.gamma API 兼容性数据

## 基本信息

- **API名称**: `DeviceMotionEventRotationRate.gamma`
- **MDN文档**: [DeviceMotionEventRotationRate.gamma](https://developer.mozilla.org/docs/Web/API/DeviceMotionEventRotationRate/gamma)
- **规范文档**: [查看规范](https://w3c.github.io/deviceorientation/#dom-devicemotioneventrotationrate-gamma)
- **标签**: `web-features:device-orientation-events`

## 使用示例

### 基本用法

```javascript
// DeviceMotionEventRotationRate.gamma 使用示例
// 请查阅MDN文档了解具体用法
console.log('DeviceMotionEventRotationRate.gamma API');
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
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 4.2 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

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
// 检查DeviceMotionEventRotationRate.gamma是否支持
function isDeviceMotionEventRotationRateGammaSupported() {
    return 'gamma' in devicemotioneventrotationrate && typeof devicemotioneventrotationrate.gamma === 'function';
}

if (isDeviceMotionEventRotationRateGammaSupported()) {
    console.log('DeviceMotionEventRotationRate.gamma 支持');
    // 使用DeviceMotionEventRotationRate.gamma
} else {
    console.log('DeviceMotionEventRotationRate.gamma 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DeviceMotionEventRotationRate.gamma polyfill
if (!devicemotioneventrotationrate.gamma) {
    // 在这里添加polyfill实现
    console.log('加载DeviceMotionEventRotationRate.gamma polyfill');
}
```

