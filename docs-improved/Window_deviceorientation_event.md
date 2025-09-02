# Window.deviceorientation_event API 兼容性数据

## 基本信息

- **API名称**: `Window.deviceorientation_event`
- **MDN文档**: [Window.deviceorientation_event](https://developer.mozilla.org/docs/Web/API/Window/deviceorientation_event)
- **规范文档**: [查看规范](https://w3c.github.io/deviceorientation/#deviceorientation,https://w3c.github.io/deviceorientation/#dom-window-ondeviceorientation)
- **标签**: `web-features:device-orientation-events`
- **描述**: `deviceorientation` event

## 使用示例

### 基本用法

```javascript
// Window.deviceorientation_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.deviceorientation_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 7 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 17 |  |
| Safari iOS | 4.2 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 7

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6
- **支持版本**: 3.6
- **移除版本**: 6

### Internet Explorer

- **支持版本**: 11

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 17

### Safari iOS

- **支持版本**: 4.2

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.deviceorientation_event是否支持
function isWindowDeviceorientation_eventSupported() {
    return 'deviceorientation_event' in window && typeof window.deviceorientation_event === 'function';
}

if (isWindowDeviceorientation_eventSupported()) {
    console.log('Window.deviceorientation_event 支持');
    // 使用Window.deviceorientation_event
} else {
    console.log('Window.deviceorientation_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.deviceorientation_event polyfill
if (!window.deviceorientation_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.deviceorientation_event polyfill');
}
```

