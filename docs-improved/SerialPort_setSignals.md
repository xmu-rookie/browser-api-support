# SerialPort.setSignals API 兼容性数据

## 基本信息

- **API名称**: `SerialPort.setSignals`
- **MDN文档**: [SerialPort.setSignals](https://developer.mozilla.org/docs/Web/API/SerialPort/setSignals)
- **规范文档**: [查看规范](https://wicg.github.io/serial/#dom-serialport-setsignals)
- **标签**: `web-features:serial`

## 使用示例

### 基本用法

```javascript
// SerialPort.setSignals 使用示例
// 请查阅MDN文档了解具体用法
console.log('SerialPort.setSignals API');
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
// 检查SerialPort.setSignals是否支持
function isSerialPortSetSignalsSupported() {
    return 'setSignals' in serialport && typeof serialport.setSignals === 'function';
}

if (isSerialPortSetSignalsSupported()) {
    console.log('SerialPort.setSignals 支持');
    // 使用SerialPort.setSignals
} else {
    console.log('SerialPort.setSignals 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SerialPort.setSignals polyfill
if (!serialport.setSignals) {
    // 在这里添加polyfill实现
    console.log('加载SerialPort.setSignals polyfill');
}
```

