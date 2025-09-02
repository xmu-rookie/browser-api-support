# DeviceMotionEvent.acceleration API 兼容性数据

## 基本信息

- **API名称**: `DeviceMotionEvent.acceleration`
- **MDN文档**: [DeviceMotionEvent.acceleration](https://developer.mozilla.org/docs/Web/API/DeviceMotionEvent/acceleration)
- **规范文档**: [查看规范](https://w3c.github.io/deviceorientation/#dom-devicemotionevent-acceleration)
- **标签**: `web-features:device-orientation-events`

## 使用示例

### 基本用法

```javascript
// DeviceMotionEvent.acceleration 使用示例
// 请查阅MDN文档了解具体用法
console.log('DeviceMotionEvent.acceleration API');
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
| Safari | 17 |  |
| Safari iOS | 4.2 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

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

- **支持版本**: 17

### Safari iOS

- **支持版本**: 4.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查DeviceMotionEvent.acceleration是否支持
function isDeviceMotionEventAccelerationSupported() {
    return 'acceleration' in devicemotionevent && typeof devicemotionevent.acceleration === 'function';
}

if (isDeviceMotionEventAccelerationSupported()) {
    console.log('DeviceMotionEvent.acceleration 支持');
    // 使用DeviceMotionEvent.acceleration
} else {
    console.log('DeviceMotionEvent.acceleration 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DeviceMotionEvent.acceleration polyfill
if (!devicemotionevent.acceleration) {
    // 在这里添加polyfill实现
    console.log('加载DeviceMotionEvent.acceleration polyfill');
}
```

