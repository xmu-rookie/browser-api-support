# USBDevice.isochronousTransferOut API 兼容性数据

## 基本信息

- **API名称**: `USBDevice.isochronousTransferOut`
- **MDN文档**: [USBDevice.isochronousTransferOut](https://developer.mozilla.org/docs/Web/API/USBDevice/isochronousTransferOut)
- **规范文档**: [查看规范](https://wicg.github.io/webusb/#dom-usbdevice-isochronoustransferout)
- **标签**: `web-features:webusb`

## 使用示例

### 基本用法

```javascript
// USBDevice.isochronousTransferOut 使用示例
// 请查阅MDN文档了解具体用法
console.log('USBDevice.isochronousTransferOut API');
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
// 检查USBDevice.isochronousTransferOut是否支持
function isUSBDeviceIsochronousTransferOutSupported() {
    return 'isochronousTransferOut' in usbdevice && typeof usbdevice.isochronousTransferOut === 'function';
}

if (isUSBDeviceIsochronousTransferOutSupported()) {
    console.log('USBDevice.isochronousTransferOut 支持');
    // 使用USBDevice.isochronousTransferOut
} else {
    console.log('USBDevice.isochronousTransferOut 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// USBDevice.isochronousTransferOut polyfill
if (!usbdevice.isochronousTransferOut) {
    // 在这里添加polyfill实现
    console.log('加载USBDevice.isochronousTransferOut polyfill');
}
```

