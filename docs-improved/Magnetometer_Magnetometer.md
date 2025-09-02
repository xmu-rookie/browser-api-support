# Magnetometer.Magnetometer API 兼容性数据

## 基本信息

- **API名称**: `Magnetometer.Magnetometer`
- **MDN文档**: [Magnetometer.Magnetometer](https://developer.mozilla.org/docs/Web/API/Magnetometer/Magnetometer)
- **规范文档**: [查看规范](https://w3c.github.io/magnetometer/#dom-magnetometer-magnetometer)
- **标签**: `web-features:magnetometer`
- **描述**: `Magnetometer()` constructor

## 使用示例

### 基本用法

```javascript
// Magnetometer.Magnetometer 使用示例
// 请查阅MDN文档了解具体用法
console.log('Magnetometer.Magnetometer API');
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
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 56
- **需要标志**: 
  - #enable-generic-sensor-extra-classes: Enabled

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Magnetometer.Magnetometer是否支持
function isMagnetometerMagnetometerSupported() {
    return 'Magnetometer' in magnetometer && typeof magnetometer.Magnetometer === 'function';
}

if (isMagnetometerMagnetometerSupported()) {
    console.log('Magnetometer.Magnetometer 支持');
    // 使用Magnetometer.Magnetometer
} else {
    console.log('Magnetometer.Magnetometer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Magnetometer.Magnetometer polyfill
if (!magnetometer.Magnetometer) {
    // 在这里添加polyfill实现
    console.log('加载Magnetometer.Magnetometer polyfill');
}
```

