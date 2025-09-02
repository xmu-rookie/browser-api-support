# BluetoothRemoteGATTCharacteristic.characteristicvaluechanged_event API 兼容性数据

## 基本信息

- **API名称**: `BluetoothRemoteGATTCharacteristic.characteristicvaluechanged_event`
- **规范文档**: [查看规范](https://webbluetoothcg.github.io/web-bluetooth/#eventdef-bluetoothremotegattcharacteristic-characteristicvaluechanged,https://webbluetoothcg.github.io/web-bluetooth/#dom-characteristiceventhandlers-oncharacteristicvaluechanged)
- **标签**: `web-features:web-bluetooth`
- **描述**: `characteristicvaluechanged` event

## 使用示例

### 基本用法

```javascript
// BluetoothRemoteGATTCharacteristic.characteristicvaluechanged_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('BluetoothRemoteGATTCharacteristic.characteristicvaluechanged_event API');
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
// 检查BluetoothRemoteGATTCharacteristic.characteristicvaluechanged_event是否支持
function isBluetoothRemoteGATTCharacteristicCharacteristicvaluechanged_eventSupported() {
    return 'characteristicvaluechanged_event' in bluetoothremotegattcharacteristic && typeof bluetoothremotegattcharacteristic.characteristicvaluechanged_event === 'function';
}

if (isBluetoothRemoteGATTCharacteristicCharacteristicvaluechanged_eventSupported()) {
    console.log('BluetoothRemoteGATTCharacteristic.characteristicvaluechanged_event 支持');
    // 使用BluetoothRemoteGATTCharacteristic.characteristicvaluechanged_event
} else {
    console.log('BluetoothRemoteGATTCharacteristic.characteristicvaluechanged_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BluetoothRemoteGATTCharacteristic.characteristicvaluechanged_event polyfill
if (!bluetoothremotegattcharacteristic.characteristicvaluechanged_event) {
    // 在这里添加polyfill实现
    console.log('加载BluetoothRemoteGATTCharacteristic.characteristicvaluechanged_event polyfill');
}
```

