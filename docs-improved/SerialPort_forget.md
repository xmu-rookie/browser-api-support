# SerialPort.forget API 兼容性数据

## 基本信息

- **API名称**: `SerialPort.forget`
- **MDN文档**: [SerialPort.forget](https://developer.mozilla.org/docs/Web/API/SerialPort/forget)
- **规范文档**: [查看规范](https://wicg.github.io/serial/#dom-serialport-forget)
- **标签**: `web-features:serial`

## 使用示例

### 基本用法

```javascript
// SerialPort.forget 使用示例
// 请查阅MDN文档了解具体用法
console.log('SerialPort.forget API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 103 |  |
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

- **支持版本**: 103

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SerialPort.forget是否支持
function isSerialPortForgetSupported() {
    return 'forget' in serialport && typeof serialport.forget === 'function';
}

if (isSerialPortForgetSupported()) {
    console.log('SerialPort.forget 支持');
    // 使用SerialPort.forget
} else {
    console.log('SerialPort.forget 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SerialPort.forget polyfill
if (!serialport.forget) {
    // 在这里添加polyfill实现
    console.log('加载SerialPort.forget polyfill');
}
```

