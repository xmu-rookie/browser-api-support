# HIDDevice.inputreport_event API 兼容性数据

## 基本信息

- **API名称**: `HIDDevice.inputreport_event`
- **MDN文档**: [HIDDevice.inputreport_event](https://developer.mozilla.org/docs/Web/API/HIDDevice/inputreport_event)
- **规范文档**: [查看规范](https://wicg.github.io/webhid/#dom-hiddevice-oninputreport)
- **标签**: `web-features:webhid`
- **描述**: `inputreport` event

## 使用示例

### 基本用法

```javascript
// HIDDevice.inputreport_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HIDDevice.inputreport_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 89 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 89

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HIDDevice.inputreport_event是否支持
function isHIDDeviceInputreport_eventSupported() {
    return 'inputreport_event' in hiddevice && typeof hiddevice.inputreport_event === 'function';
}

if (isHIDDeviceInputreport_eventSupported()) {
    console.log('HIDDevice.inputreport_event 支持');
    // 使用HIDDevice.inputreport_event
} else {
    console.log('HIDDevice.inputreport_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HIDDevice.inputreport_event polyfill
if (!hiddevice.inputreport_event) {
    // 在这里添加polyfill实现
    console.log('加载HIDDevice.inputreport_event polyfill');
}
```

