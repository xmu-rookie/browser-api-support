# BluetoothRemoteGATTDescriptor.readValue API 兼容性数据

## 基本信息

- **API名称**: `BluetoothRemoteGATTDescriptor.readValue`
- **MDN文档**: [BluetoothRemoteGATTDescriptor.readValue](https://developer.mozilla.org/docs/Web/API/BluetoothRemoteGATTDescriptor/readValue)
- **规范文档**: [查看规范](https://webbluetoothcg.github.io/web-bluetooth/#dom-bluetoothremotegattdescriptor-readvalue)
- **标签**: `web-features:web-bluetooth`

## 使用示例

### 基本用法

```javascript
// BluetoothRemoteGATTDescriptor.readValue 使用示例
// 请查阅MDN文档了解具体用法
console.log('BluetoothRemoteGATTDescriptor.readValue API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 57 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 44 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 57

### Firefox

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 44

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查BluetoothRemoteGATTDescriptor.readValue是否支持
function isBluetoothRemoteGATTDescriptorReadValueSupported() {
    return 'readValue' in bluetoothremotegattdescriptor && typeof bluetoothremotegattdescriptor.readValue === 'function';
}

if (isBluetoothRemoteGATTDescriptorReadValueSupported()) {
    console.log('BluetoothRemoteGATTDescriptor.readValue 支持');
    // 使用BluetoothRemoteGATTDescriptor.readValue
} else {
    console.log('BluetoothRemoteGATTDescriptor.readValue 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BluetoothRemoteGATTDescriptor.readValue polyfill
if (!bluetoothremotegattdescriptor.readValue) {
    // 在这里添加polyfill实现
    console.log('加载BluetoothRemoteGATTDescriptor.readValue polyfill');
}
```

