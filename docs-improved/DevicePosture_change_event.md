# DevicePosture.change_event API 兼容性数据

## 基本信息

- **API名称**: `DevicePosture.change_event`
- **MDN文档**: [DevicePosture.change_event](https://developer.mozilla.org/docs/Web/API/DevicePosture/change_event)
- **规范文档**: [查看规范](https://w3c.github.io/device-posture/#dom-deviceposture-onchange)
- **标签**: `web-features:device-posture`
- **描述**: `change` event

## 使用示例

### 基本用法

```javascript
// DevicePosture.change_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('DevicePosture.change_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 132 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 16.2 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 132

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 16.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查DevicePosture.change_event是否支持
function isDevicePostureChange_eventSupported() {
    return 'change_event' in deviceposture && typeof deviceposture.change_event === 'function';
}

if (isDevicePostureChange_eventSupported()) {
    console.log('DevicePosture.change_event 支持');
    // 使用DevicePosture.change_event
} else {
    console.log('DevicePosture.change_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DevicePosture.change_event polyfill
if (!deviceposture.change_event) {
    // 在这里添加polyfill实现
    console.log('加载DevicePosture.change_event polyfill');
}
```

