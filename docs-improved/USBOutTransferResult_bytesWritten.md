# USBOutTransferResult.bytesWritten API 兼容性数据

## 基本信息

- **API名称**: `USBOutTransferResult.bytesWritten`
- **规范文档**: [查看规范](https://wicg.github.io/webusb/#dom-usbouttransferresult-byteswritten)
- **标签**: `web-features:webusb`

## 使用示例

### 基本用法

```javascript
// USBOutTransferResult.bytesWritten 使用示例
// 请查阅MDN文档了解具体用法
console.log('USBOutTransferResult.bytesWritten API');
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
// 检查USBOutTransferResult.bytesWritten是否支持
function isUSBOutTransferResultBytesWrittenSupported() {
    return 'bytesWritten' in usbouttransferresult && typeof usbouttransferresult.bytesWritten === 'function';
}

if (isUSBOutTransferResultBytesWrittenSupported()) {
    console.log('USBOutTransferResult.bytesWritten 支持');
    // 使用USBOutTransferResult.bytesWritten
} else {
    console.log('USBOutTransferResult.bytesWritten 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// USBOutTransferResult.bytesWritten polyfill
if (!usbouttransferresult.bytesWritten) {
    // 在这里添加polyfill实现
    console.log('加载USBOutTransferResult.bytesWritten polyfill');
}
```

