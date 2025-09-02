# BluetoothCharacteristicProperties.reliableWrite API 兼容性数据

## 基本信息

- **API名称**: `BluetoothCharacteristicProperties.reliableWrite`
- **MDN文档**: [BluetoothCharacteristicProperties.reliableWrite](https://developer.mozilla.org/docs/Web/API/BluetoothCharacteristicProperties/reliableWrite)
- **规范文档**: [查看规范](https://webbluetoothcg.github.io/web-bluetooth/#dom-bluetoothcharacteristicproperties-reliablewrite)
- **标签**: `web-features:web-bluetooth`

## 使用示例

### 基本用法

```javascript
// BluetoothCharacteristicProperties.reliableWrite 使用示例
// 请查阅MDN文档了解具体用法
console.log('BluetoothCharacteristicProperties.reliableWrite API');
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
// 检查BluetoothCharacteristicProperties.reliableWrite是否支持
function isBluetoothCharacteristicPropertiesReliableWriteSupported() {
    return 'reliableWrite' in bluetoothcharacteristicproperties && typeof bluetoothcharacteristicproperties.reliableWrite === 'function';
}

if (isBluetoothCharacteristicPropertiesReliableWriteSupported()) {
    console.log('BluetoothCharacteristicProperties.reliableWrite 支持');
    // 使用BluetoothCharacteristicProperties.reliableWrite
} else {
    console.log('BluetoothCharacteristicProperties.reliableWrite 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BluetoothCharacteristicProperties.reliableWrite polyfill
if (!bluetoothcharacteristicproperties.reliableWrite) {
    // 在这里添加polyfill实现
    console.log('加载BluetoothCharacteristicProperties.reliableWrite polyfill');
}
```

