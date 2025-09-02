# BluetoothCharacteristicProperties.read API 兼容性数据

## 基本信息

- **API名称**: `BluetoothCharacteristicProperties.read`
- **MDN文档**: [BluetoothCharacteristicProperties.read](https://developer.mozilla.org/docs/Web/API/BluetoothCharacteristicProperties/read)
- **规范文档**: [查看规范](https://webbluetoothcg.github.io/web-bluetooth/#dom-bluetoothcharacteristicproperties-read)
- **标签**: `web-features:web-bluetooth`

## 使用示例

### 基本用法

```javascript
// BluetoothCharacteristicProperties.read 使用示例
// 请查阅MDN文档了解具体用法
console.log('BluetoothCharacteristicProperties.read API');
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
// 检查BluetoothCharacteristicProperties.read是否支持
function isBluetoothCharacteristicPropertiesReadSupported() {
    return 'read' in bluetoothcharacteristicproperties && typeof bluetoothcharacteristicproperties.read === 'function';
}

if (isBluetoothCharacteristicPropertiesReadSupported()) {
    console.log('BluetoothCharacteristicProperties.read 支持');
    // 使用BluetoothCharacteristicProperties.read
} else {
    console.log('BluetoothCharacteristicProperties.read 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BluetoothCharacteristicProperties.read polyfill
if (!bluetoothcharacteristicproperties.read) {
    // 在这里添加polyfill实现
    console.log('加载BluetoothCharacteristicProperties.read polyfill');
}
```

