# USBIsochronousInTransferResult API 兼容性数据

## 基本信息

- **API名称**: `USBIsochronousInTransferResult`
- **MDN文档**: [USBIsochronousInTransferResult](https://developer.mozilla.org/docs/Web/API/USBIsochronousInTransferResult)
- **规范文档**: [查看规范](https://wicg.github.io/webusb/#usbisochronousintransferresult)
- **标签**: `web-features:webusb`

## 使用示例

### 基本用法

```javascript
// USBIsochronousInTransferResult 使用示例
// 请查阅MDN文档了解具体用法
console.log('USBIsochronousInTransferResult API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | ❌ 不支持 | WebView exposes this interface, but does not support WebUSB. See [bug 41441927](https://crbug.com/41441927). |
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
- **注意事项**:
  - WebView exposes this interface, but does not support WebUSB. See [bug 41441927](https://crbug.com/41441927).

## 兼容性检查代码

### 特性检测

```javascript
// 检查USBIsochronousInTransferResult是否支持
function isUSBIsochronousInTransferResultSupported() {
    return 'USBIsochronousInTransferResult' in window || typeof USBIsochronousInTransferResult !== 'undefined';
}

if (isUSBIsochronousInTransferResultSupported()) {
    console.log('USBIsochronousInTransferResult 支持');
    // 使用USBIsochronousInTransferResult
} else {
    console.log('USBIsochronousInTransferResult 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// USBIsochronousInTransferResult polyfill
if (!window.USBIsochronousInTransferResult) {
    // 在这里添加polyfill实现
    console.log('加载USBIsochronousInTransferResult polyfill');
}
```

