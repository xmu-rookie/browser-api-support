# BarcodeDetector API 兼容性数据

## 基本信息

- **API名称**: `BarcodeDetector`
- **MDN文档**: [BarcodeDetector](https://developer.mozilla.org/docs/Web/API/BarcodeDetector)
- **规范文档**: [查看规范](https://wicg.github.io/shape-detection-api/#barcode-detection-api)
- **标签**: `web-features:barcode`

## 使用示例

### 基本用法

```javascript
// BarcodeDetector 使用示例
// 请查阅MDN文档了解具体用法
console.log('BarcodeDetector API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 88 | Supported on ChromeOS and macOS only.; Before Chrome 113, on macOS Ventura (13) and above, this inte... |
| Chrome Android | 83 |  |
| Edge | 83 | Supported on macOS only.; Before Chrome 113, on macOS Ventura (13) and above, this interface silentl... |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 69 | Supported on macOS only.; Before Chrome 113, on macOS Ventura (13) and above, this interface silentl... |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 88
- **部分实现**: 是
- **注意事项**:
  - Supported on ChromeOS and macOS only.
  - Before Chrome 113, on macOS Ventura (13) and above, this interface silently failed. See [bug 40245611](https://crbug.com/40245611).
- **支持版本**: 83
- **移除版本**: 88
- **部分实现**: 是
- **注意事项**:
  - Supported on macOS only.

### Chrome Android

- **支持版本**: 83

### Edge

- **支持版本**: 83
- **部分实现**: 是
- **注意事项**:
  - Supported on macOS only.
  - Before Chrome 113, on macOS Ventura (13) and above, this interface silently failed. See [bug 40245611](https://crbug.com/40245611).

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 69
- **部分实现**: 是
- **注意事项**:
  - Supported on macOS only.
  - Before Chrome 113, on macOS Ventura (13) and above, this interface silently failed. See [bug 40245611](https://crbug.com/40245611).

### Safari

- **支持版本**: 17
- **需要标志**: 
  - Shape Detection API: true

## 兼容性检查代码

### 特性检测

```javascript
// 检查BarcodeDetector是否支持
function isBarcodeDetectorSupported() {
    return 'BarcodeDetector' in window || typeof BarcodeDetector !== 'undefined';
}

if (isBarcodeDetectorSupported()) {
    console.log('BarcodeDetector 支持');
    // 使用BarcodeDetector
} else {
    console.log('BarcodeDetector 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BarcodeDetector polyfill
if (!window.BarcodeDetector) {
    // 在这里添加polyfill实现
    console.log('加载BarcodeDetector polyfill');
}
```

