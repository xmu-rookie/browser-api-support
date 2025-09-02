# DeviceOrientationEvent.absolute API 兼容性数据

## 基本信息

- **API名称**: `DeviceOrientationEvent.absolute`
- **MDN文档**: [DeviceOrientationEvent.absolute](https://developer.mozilla.org/docs/Web/API/DeviceOrientationEvent/absolute)
- **规范文档**: [查看规范](https://w3c.github.io/deviceorientation/#dom-deviceorientationevent-absolute)
- **标签**: `web-features:device-orientation-events`

## 使用示例

### 基本用法

```javascript
// DeviceOrientationEvent.absolute 使用示例
// 请查阅MDN文档了解具体用法
console.log('DeviceOrientationEvent.absolute API');
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
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
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

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DeviceOrientationEvent.absolute是否支持
function isDeviceOrientationEventAbsoluteSupported() {
    return 'absolute' in deviceorientationevent && typeof deviceorientationevent.absolute === 'function';
}

if (isDeviceOrientationEventAbsoluteSupported()) {
    console.log('DeviceOrientationEvent.absolute 支持');
    // 使用DeviceOrientationEvent.absolute
} else {
    console.log('DeviceOrientationEvent.absolute 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DeviceOrientationEvent.absolute polyfill
if (!deviceorientationevent.absolute) {
    // 在这里添加polyfill实现
    console.log('加载DeviceOrientationEvent.absolute polyfill');
}
```

