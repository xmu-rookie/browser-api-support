# BluetoothRemoteGATTDescriptor.characteristic API 兼容性数据

## 基本信息

- **API名称**: `BluetoothRemoteGATTDescriptor.characteristic`
- **MDN文档**: [BluetoothRemoteGATTDescriptor.characteristic](https://developer.mozilla.org/docs/Web/API/BluetoothRemoteGATTDescriptor/characteristic)
- **规范文档**: [查看规范](https://webbluetoothcg.github.io/web-bluetooth/#dom-bluetoothremotegattdescriptor-characteristic)
- **标签**: `web-features:web-bluetooth`

## 使用示例

### 基本用法

```javascript
// BluetoothRemoteGATTDescriptor.characteristic 使用示例
// 请查阅MDN文档了解具体用法
console.log('BluetoothRemoteGATTDescriptor.characteristic API');
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
// 检查BluetoothRemoteGATTDescriptor.characteristic是否支持
function isBluetoothRemoteGATTDescriptorCharacteristicSupported() {
    return 'characteristic' in bluetoothremotegattdescriptor && typeof bluetoothremotegattdescriptor.characteristic === 'function';
}

if (isBluetoothRemoteGATTDescriptorCharacteristicSupported()) {
    console.log('BluetoothRemoteGATTDescriptor.characteristic 支持');
    // 使用BluetoothRemoteGATTDescriptor.characteristic
} else {
    console.log('BluetoothRemoteGATTDescriptor.characteristic 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BluetoothRemoteGATTDescriptor.characteristic polyfill
if (!bluetoothremotegattdescriptor.characteristic) {
    // 在这里添加polyfill实现
    console.log('加载BluetoothRemoteGATTDescriptor.characteristic polyfill');
}
```

