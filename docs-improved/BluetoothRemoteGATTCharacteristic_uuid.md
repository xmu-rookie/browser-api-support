# BluetoothRemoteGATTCharacteristic.uuid API 兼容性数据

## 基本信息

- **API名称**: `BluetoothRemoteGATTCharacteristic.uuid`
- **MDN文档**: [BluetoothRemoteGATTCharacteristic.uuid](https://developer.mozilla.org/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid)
- **规范文档**: [查看规范](https://webbluetoothcg.github.io/web-bluetooth/#dom-bluetoothremotegattcharacteristic-uuid)
- **标签**: `web-features:web-bluetooth`

## 使用示例

### 基本用法

```javascript
// BluetoothRemoteGATTCharacteristic.uuid 使用示例
// 请查阅MDN文档了解具体用法
console.log('BluetoothRemoteGATTCharacteristic.uuid API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 |  |
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

- **支持版本**: 56

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查BluetoothRemoteGATTCharacteristic.uuid是否支持
function isBluetoothRemoteGATTCharacteristicUuidSupported() {
    return 'uuid' in bluetoothremotegattcharacteristic && typeof bluetoothremotegattcharacteristic.uuid === 'function';
}

if (isBluetoothRemoteGATTCharacteristicUuidSupported()) {
    console.log('BluetoothRemoteGATTCharacteristic.uuid 支持');
    // 使用BluetoothRemoteGATTCharacteristic.uuid
} else {
    console.log('BluetoothRemoteGATTCharacteristic.uuid 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BluetoothRemoteGATTCharacteristic.uuid polyfill
if (!bluetoothremotegattcharacteristic.uuid) {
    // 在这里添加polyfill实现
    console.log('加载BluetoothRemoteGATTCharacteristic.uuid polyfill');
}
```

