# InputDeviceCapabilities.InputDeviceCapabilities API 兼容性数据

## 基本信息

- **API名称**: `InputDeviceCapabilities.InputDeviceCapabilities`
- **MDN文档**: [InputDeviceCapabilities.InputDeviceCapabilities](https://developer.mozilla.org/docs/Web/API/InputDeviceCapabilities/InputDeviceCapabilities)
- **规范文档**: [查看规范](https://wicg.github.io/input-device-capabilities/#dom-inputdevicecapabilities-constructor)
- **描述**: `InputDeviceCapabilities()` constructor

## 使用示例

### 基本用法

```javascript
// InputDeviceCapabilities.InputDeviceCapabilities 使用示例
// 请查阅MDN文档了解具体用法
console.log('InputDeviceCapabilities.InputDeviceCapabilities API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
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
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 47

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查InputDeviceCapabilities.InputDeviceCapabilities是否支持
function isInputDeviceCapabilitiesInputDeviceCapabilitiesSupported() {
    return 'InputDeviceCapabilities' in inputdevicecapabilities && typeof inputdevicecapabilities.InputDeviceCapabilities === 'function';
}

if (isInputDeviceCapabilitiesInputDeviceCapabilitiesSupported()) {
    console.log('InputDeviceCapabilities.InputDeviceCapabilities 支持');
    // 使用InputDeviceCapabilities.InputDeviceCapabilities
} else {
    console.log('InputDeviceCapabilities.InputDeviceCapabilities 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// InputDeviceCapabilities.InputDeviceCapabilities polyfill
if (!inputdevicecapabilities.InputDeviceCapabilities) {
    // 在这里添加polyfill实现
    console.log('加载InputDeviceCapabilities.InputDeviceCapabilities polyfill');
}
```

