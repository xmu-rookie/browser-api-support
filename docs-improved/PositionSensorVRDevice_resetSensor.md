# PositionSensorVRDevice.resetSensor API 兼容性数据

## 基本信息

- **API名称**: `PositionSensorVRDevice.resetSensor`
- **MDN文档**: [PositionSensorVRDevice.resetSensor](https://developer.mozilla.org/docs/Web/API/PositionSensorVRDevice/resetSensor)
- **标签**: `web-features:webvr`

## 使用示例

### 基本用法

```javascript
// PositionSensorVRDevice.resetSensor 使用示例
// 请查阅MDN文档了解具体用法
console.log('PositionSensorVRDevice.resetSensor API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 39 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 39
- **需要标志**: 
  - dom.vr*: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PositionSensorVRDevice.resetSensor是否支持
function isPositionSensorVRDeviceResetSensorSupported() {
    return 'resetSensor' in positionsensorvrdevice && typeof positionsensorvrdevice.resetSensor === 'function';
}

if (isPositionSensorVRDeviceResetSensorSupported()) {
    console.log('PositionSensorVRDevice.resetSensor 支持');
    // 使用PositionSensorVRDevice.resetSensor
} else {
    console.log('PositionSensorVRDevice.resetSensor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PositionSensorVRDevice.resetSensor polyfill
if (!positionsensorvrdevice.resetSensor) {
    // 在这里添加polyfill实现
    console.log('加载PositionSensorVRDevice.resetSensor polyfill');
}
```

