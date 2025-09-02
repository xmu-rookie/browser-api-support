# USBOutTransferResult.worker_support API 兼容性数据

## 基本信息

- **API名称**: `USBOutTransferResult.worker_support`
- **标签**: `web-features:webusb`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// USBOutTransferResult.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('USBOutTransferResult.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 118 | Available in dedicated workers and WebExtension service workers, not available in shared workers and... |
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
| WebView Android | 不支持 | WebView exposes this interface, but does not support WebUSB. |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 118
- **部分实现**: 是
- **注意事项**:
  - Available in dedicated workers and WebExtension service workers, not available in shared workers and normal service workers.
- **支持版本**: 70
- **移除版本**: 118
- **部分实现**: 是
- **注意事项**:
  - Available in dedicated workers, not available in shared workers and service workers.

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持
- **注意事项**:
  - WebView exposes this interface, but does not support WebUSB.

## 兼容性检查代码

### 特性检测

```javascript
// 检查USBOutTransferResult.worker_support是否支持
function isUSBOutTransferResultWorker_supportSupported() {
    return 'worker_support' in usbouttransferresult && typeof usbouttransferresult.worker_support === 'function';
}

if (isUSBOutTransferResultWorker_supportSupported()) {
    console.log('USBOutTransferResult.worker_support 支持');
    // 使用USBOutTransferResult.worker_support
} else {
    console.log('USBOutTransferResult.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// USBOutTransferResult.worker_support polyfill
if (!usbouttransferresult.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载USBOutTransferResult.worker_support polyfill');
}
```

