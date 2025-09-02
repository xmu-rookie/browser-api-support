# Window.devicemotion_event API 兼容性数据

## 基本信息

- **API名称**: `Window.devicemotion_event`
- **MDN文档**: [Window.devicemotion_event](https://developer.mozilla.org/docs/Web/API/Window/devicemotion_event)
- **规范文档**: [查看规范](https://w3c.github.io/deviceorientation/#devicemotion,https://w3c.github.io/deviceorientation/#dom-window-ondevicemotion)
- **标签**: `web-features:device-orientation-events`
- **描述**: `devicemotion` event

## 使用示例

### 基本用法

```javascript
// Window.devicemotion_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.devicemotion_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
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

### Deno

- **支持版本**: 不支持

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
// 检查Window.devicemotion_event是否支持
function isWindowDevicemotion_eventSupported() {
    return 'devicemotion_event' in window && typeof window.devicemotion_event === 'function';
}

if (isWindowDevicemotion_eventSupported()) {
    console.log('Window.devicemotion_event 支持');
    // 使用Window.devicemotion_event
} else {
    console.log('Window.devicemotion_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.devicemotion_event polyfill
if (!window.devicemotion_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.devicemotion_event polyfill');
}
```

