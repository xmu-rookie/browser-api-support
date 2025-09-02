# DeviceOrientationEvent API 兼容性数据

## 基本信息

- **API名称**: `DeviceOrientationEvent`
- **MDN文档**: [DeviceOrientationEvent](https://developer.mozilla.org/docs/Web/API/DeviceOrientationEvent)
- **规范文档**: [查看规范](https://w3c.github.io/deviceorientation/#deviceorientation)
- **标签**: `web-features:device-orientation-events`

## 使用示例

### 基本用法

```javascript
// DeviceOrientationEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('DeviceOrientationEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 7 | Before version 50, Chrome provided absolute values instead of relative values for this event. Develo... |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 | Firefox 3.6, 4, and 5 supported `mozOrientation` instead of the standard DeviceOrientationEvent inte... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 15 |  |
| Opera Android | 14 |  |
| Safari | 17 |  |
| Safari iOS | 4.2 |  |
| Samsung Internet | 1.0 | Before Samsung Internet 5.0, Samsung Internet provided absolute values instead of relative values fo... |
| WebView Android | 3 | Before version 50, Chrome provided absolute values instead of relative values for this event. Develo... |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 7
- **注意事项**:
  - Before version 50, Chrome provided absolute values instead of relative values for this event. Developers still needing absolute values may use the `deviceorientationabsolute` event.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6
- **注意事项**:
  - Firefox 3.6, 4, and 5 supported `mozOrientation` instead of the standard DeviceOrientationEvent interface.

### Internet Explorer

- **支持版本**: 11

### Opera

- **支持版本**: 15

### Opera Android

- **支持版本**: 14

### Safari

- **支持版本**: 17

### Safari iOS

- **支持版本**: 4.2

### Samsung Internet

- **支持版本**: 1.0
- **注意事项**:
  - Before Samsung Internet 5.0, Samsung Internet provided absolute values instead of relative values for this event. Developers still needing absolute values may use the `deviceorientationabsolute` event.

### WebView Android

- **支持版本**: 3
- **注意事项**:
  - Before version 50, Chrome provided absolute values instead of relative values for this event. Developers still needing absolute values may use the `deviceorientationabsolute` event.

## 兼容性检查代码

### 特性检测

```javascript
// 检查DeviceOrientationEvent是否支持
function isDeviceOrientationEventSupported() {
    return 'DeviceOrientationEvent' in window || typeof DeviceOrientationEvent !== 'undefined';
}

if (isDeviceOrientationEventSupported()) {
    console.log('DeviceOrientationEvent 支持');
    // 使用DeviceOrientationEvent
} else {
    console.log('DeviceOrientationEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DeviceOrientationEvent polyfill
if (!window.DeviceOrientationEvent) {
    // 在这里添加polyfill实现
    console.log('加载DeviceOrientationEvent polyfill');
}
```

