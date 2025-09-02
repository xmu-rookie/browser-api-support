# USB.getDevices API 兼容性数据

## 基本信息

- **API名称**: `USB.getDevices`
- **MDN文档**: [USB.getDevices](https://developer.mozilla.org/docs/Web/API/USB/getDevices)
- **规范文档**: [查看规范](https://wicg.github.io/webusb/#dom-usb-getdevices)
- **标签**: `web-features:webusb`

## 使用示例

### 基本用法

```javascript
// USB.getDevices 使用示例
// 请查阅MDN文档了解具体用法
console.log('USB.getDevices API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查USB.getDevices是否支持
function isUSBGetDevicesSupported() {
    return 'getDevices' in usb && typeof usb.getDevices === 'function';
}

if (isUSBGetDevicesSupported()) {
    console.log('USB.getDevices 支持');
    // 使用USB.getDevices
} else {
    console.log('USB.getDevices 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// USB.getDevices polyfill
if (!usb.getDevices) {
    // 在这里添加polyfill实现
    console.log('加载USB.getDevices polyfill');
}
```

