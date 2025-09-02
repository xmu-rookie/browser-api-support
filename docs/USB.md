# USB API 兼容性数据

## 基本信息

- **API名称**: `USB`
- **MDN文档**: [USB](https://developer.mozilla.org/docs/Web/API/USB)
- **规范文档**: [查看规范](https://wicg.github.io/webusb/#usb)
- **标签**: `web-features:webusb`

## 使用示例

### 基本用法

```javascript
// USB 使用示例
// 请查阅MDN文档了解具体用法
console.log('USB API');
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
// 检查USB是否支持
function isUSBSupported() {
    return 'USB' in window || typeof USB !== 'undefined';
}

if (isUSBSupported()) {
    console.log('USB 支持');
    // 使用USB
} else {
    console.log('USB 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// USB polyfill
if (!window.USB) {
    // 在这里添加polyfill实现
    console.log('加载USB polyfill');
}
```

