# DeviceMotionEventAcceleration.x API 兼容性数据

## 基本信息

- **API名称**: `DeviceMotionEventAcceleration.x`
- **MDN文档**: [DeviceMotionEventAcceleration.x](https://developer.mozilla.org/docs/Web/API/DeviceMotionEventAcceleration/x)
- **规范文档**: [查看规范](https://w3c.github.io/deviceorientation/#dom-devicemotioneventacceleration-x)
- **标签**: `web-features:device-orientation-events`

## 使用示例

### 基本用法

```javascript
// DeviceMotionEventAcceleration.x 使用示例
// 请查阅MDN文档了解具体用法
console.log('DeviceMotionEventAcceleration.x API');
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
// 检查DeviceMotionEventAcceleration.x是否支持
function isDeviceMotionEventAccelerationXSupported() {
    return 'x' in devicemotioneventacceleration && typeof devicemotioneventacceleration.x === 'function';
}

if (isDeviceMotionEventAccelerationXSupported()) {
    console.log('DeviceMotionEventAcceleration.x 支持');
    // 使用DeviceMotionEventAcceleration.x
} else {
    console.log('DeviceMotionEventAcceleration.x 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DeviceMotionEventAcceleration.x polyfill
if (!devicemotioneventacceleration.x) {
    // 在这里添加polyfill实现
    console.log('加载DeviceMotionEventAcceleration.x polyfill');
}
```

