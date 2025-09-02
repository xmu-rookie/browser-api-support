# InputDeviceInfo.getCapabilities API 兼容性数据

## 基本信息

- **API名称**: `InputDeviceInfo.getCapabilities`
- **MDN文档**: [InputDeviceInfo.getCapabilities](https://developer.mozilla.org/docs/Web/API/InputDeviceInfo/getCapabilities)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-inputdeviceinfo-getcapabilities)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// InputDeviceInfo.getCapabilities 使用示例
// 请查阅MDN文档了解具体用法
console.log('InputDeviceInfo.getCapabilities API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 67 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 67

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查InputDeviceInfo.getCapabilities是否支持
function isInputDeviceInfoGetCapabilitiesSupported() {
    return 'getCapabilities' in inputdeviceinfo && typeof inputdeviceinfo.getCapabilities === 'function';
}

if (isInputDeviceInfoGetCapabilitiesSupported()) {
    console.log('InputDeviceInfo.getCapabilities 支持');
    // 使用InputDeviceInfo.getCapabilities
} else {
    console.log('InputDeviceInfo.getCapabilities 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// InputDeviceInfo.getCapabilities polyfill
if (!inputdeviceinfo.getCapabilities) {
    // 在这里添加polyfill实现
    console.log('加载InputDeviceInfo.getCapabilities polyfill');
}
```

