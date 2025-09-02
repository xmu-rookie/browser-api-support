# Bluetooth.getDevices API 兼容性数据

## 基本信息

- **API名称**: `Bluetooth.getDevices`
- **MDN文档**: [Bluetooth.getDevices](https://developer.mozilla.org/docs/Web/API/Bluetooth/getDevices)
- **规范文档**: [查看规范](https://webbluetoothcg.github.io/web-bluetooth/#dom-bluetooth-getdevices)
- **标签**: `web-features:web-bluetooth`

## 使用示例

### 基本用法

```javascript
// Bluetooth.getDevices 使用示例
// 请查阅MDN文档了解具体用法
console.log('Bluetooth.getDevices API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 85 |  |
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

- **支持版本**: 85
- **需要标志**: 
  - #enable-experimental-web-platform-features: enabled

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Bluetooth.getDevices是否支持
function isBluetoothGetDevicesSupported() {
    return 'getDevices' in bluetooth && typeof bluetooth.getDevices === 'function';
}

if (isBluetoothGetDevicesSupported()) {
    console.log('Bluetooth.getDevices 支持');
    // 使用Bluetooth.getDevices
} else {
    console.log('Bluetooth.getDevices 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Bluetooth.getDevices polyfill
if (!bluetooth.getDevices) {
    // 在这里添加polyfill实现
    console.log('加载Bluetooth.getDevices polyfill');
}
```

