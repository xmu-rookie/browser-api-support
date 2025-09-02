# DeviceMotionEvent.DeviceMotionEvent API 兼容性数据

## 基本信息

- **API名称**: `DeviceMotionEvent.DeviceMotionEvent`
- **MDN文档**: [DeviceMotionEvent.DeviceMotionEvent](https://developer.mozilla.org/docs/Web/API/DeviceMotionEvent/DeviceMotionEvent)
- **规范文档**: [查看规范](https://w3c.github.io/deviceorientation/#dom-devicemotionevent-devicemotionevent)
- **标签**: `web-features:device-orientation-events`
- **描述**: `DeviceMotionEvent()` constructor

## 使用示例

### 基本用法

```javascript
// DeviceMotionEvent.DeviceMotionEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('DeviceMotionEvent.DeviceMotionEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 29 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 59

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 29

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DeviceMotionEvent.DeviceMotionEvent是否支持
function isDeviceMotionEventDeviceMotionEventSupported() {
    return 'DeviceMotionEvent' in devicemotionevent && typeof devicemotionevent.DeviceMotionEvent === 'function';
}

if (isDeviceMotionEventDeviceMotionEventSupported()) {
    console.log('DeviceMotionEvent.DeviceMotionEvent 支持');
    // 使用DeviceMotionEvent.DeviceMotionEvent
} else {
    console.log('DeviceMotionEvent.DeviceMotionEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DeviceMotionEvent.DeviceMotionEvent polyfill
if (!devicemotionevent.DeviceMotionEvent) {
    // 在这里添加polyfill实现
    console.log('加载DeviceMotionEvent.DeviceMotionEvent polyfill');
}
```

