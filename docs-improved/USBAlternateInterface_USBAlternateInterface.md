# USBAlternateInterface.USBAlternateInterface API 兼容性数据

## 基本信息

- **API名称**: `USBAlternateInterface.USBAlternateInterface`
- **标签**: `web-features:webusb`
- **描述**: `USBAlternateInterface()` constructor

## 使用示例

### 基本用法

```javascript
// USBAlternateInterface.USBAlternateInterface 使用示例
// 请查阅MDN文档了解具体用法
console.log('USBAlternateInterface.USBAlternateInterface API');
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
// 检查USBAlternateInterface.USBAlternateInterface是否支持
function isUSBAlternateInterfaceUSBAlternateInterfaceSupported() {
    return 'USBAlternateInterface' in usbalternateinterface && typeof usbalternateinterface.USBAlternateInterface === 'function';
}

if (isUSBAlternateInterfaceUSBAlternateInterfaceSupported()) {
    console.log('USBAlternateInterface.USBAlternateInterface 支持');
    // 使用USBAlternateInterface.USBAlternateInterface
} else {
    console.log('USBAlternateInterface.USBAlternateInterface 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// USBAlternateInterface.USBAlternateInterface polyfill
if (!usbalternateinterface.USBAlternateInterface) {
    // 在这里添加polyfill实现
    console.log('加载USBAlternateInterface.USBAlternateInterface polyfill');
}
```

