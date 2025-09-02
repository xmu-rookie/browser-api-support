# BluetoothRemoteGATTCharacteristic.getDescriptor API 兼容性数据

## 基本信息

- **API名称**: `BluetoothRemoteGATTCharacteristic.getDescriptor`
- **MDN文档**: [BluetoothRemoteGATTCharacteristic.getDescriptor](https://developer.mozilla.org/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor)
- **规范文档**: [查看规范](https://webbluetoothcg.github.io/web-bluetooth/#dom-bluetoothremotegattcharacteristic-getdescriptor)
- **标签**: `web-features:web-bluetooth`

## 使用示例

### 基本用法

```javascript
// BluetoothRemoteGATTCharacteristic.getDescriptor 使用示例
// 请查阅MDN文档了解具体用法
console.log('BluetoothRemoteGATTCharacteristic.getDescriptor API');
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
| Opera Android | 同主版本 |  |
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

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查BluetoothRemoteGATTCharacteristic.getDescriptor是否支持
function isBluetoothRemoteGATTCharacteristicGetDescriptorSupported() {
    return 'getDescriptor' in bluetoothremotegattcharacteristic && typeof bluetoothremotegattcharacteristic.getDescriptor === 'function';
}

if (isBluetoothRemoteGATTCharacteristicGetDescriptorSupported()) {
    console.log('BluetoothRemoteGATTCharacteristic.getDescriptor 支持');
    // 使用BluetoothRemoteGATTCharacteristic.getDescriptor
} else {
    console.log('BluetoothRemoteGATTCharacteristic.getDescriptor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BluetoothRemoteGATTCharacteristic.getDescriptor polyfill
if (!bluetoothremotegattcharacteristic.getDescriptor) {
    // 在这里添加polyfill实现
    console.log('加载BluetoothRemoteGATTCharacteristic.getDescriptor polyfill');
}
```

