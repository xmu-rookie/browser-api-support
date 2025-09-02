# Serial.requestPort API 兼容性数据

## 基本信息

- **API名称**: `Serial.requestPort`
- **MDN文档**: [Serial.requestPort](https://developer.mozilla.org/docs/Web/API/Serial/requestPort)
- **规范文档**: [查看规范](https://wicg.github.io/serial/#dom-serial-requestport)
- **标签**: `web-features:serial`

## 使用示例

### 基本用法

```javascript
// Serial.requestPort 使用示例
// 请查阅MDN文档了解具体用法
console.log('Serial.requestPort API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 89 |  |
| Chrome Android | 不支持 |  |
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

- **支持版本**: 89

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Serial.requestPort是否支持
function isSerialRequestPortSupported() {
    return 'requestPort' in serial && typeof serial.requestPort === 'function';
}

if (isSerialRequestPortSupported()) {
    console.log('Serial.requestPort 支持');
    // 使用Serial.requestPort
} else {
    console.log('Serial.requestPort 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Serial.requestPort polyfill
if (!serial.requestPort) {
    // 在这里添加polyfill实现
    console.log('加载Serial.requestPort polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **allowedBluetoothServiceClassIds_option**: `allowedBluetoothServiceClassIds` option
- **filters_bluetoothServiceClassId**: `filters` `bluetoothServiceClassId` property

