# PositionSensorVRDevice.getImmediateState API 兼容性数据

## 基本信息

- **API名称**: `PositionSensorVRDevice.getImmediateState`
- **MDN文档**: [PositionSensorVRDevice.getImmediateState](https://developer.mozilla.org/docs/Web/API/PositionSensorVRDevice/getImmediateState)
- **标签**: `web-features:webvr`

## 使用示例

### 基本用法

```javascript
// PositionSensorVRDevice.getImmediateState 使用示例
// 请查阅MDN文档了解具体用法
console.log('PositionSensorVRDevice.getImmediateState API');
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
// 检查PositionSensorVRDevice.getImmediateState是否支持
function isPositionSensorVRDeviceGetImmediateStateSupported() {
    return 'getImmediateState' in positionsensorvrdevice && typeof positionsensorvrdevice.getImmediateState === 'function';
}

if (isPositionSensorVRDeviceGetImmediateStateSupported()) {
    console.log('PositionSensorVRDevice.getImmediateState 支持');
    // 使用PositionSensorVRDevice.getImmediateState
} else {
    console.log('PositionSensorVRDevice.getImmediateState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PositionSensorVRDevice.getImmediateState polyfill
if (!positionsensorvrdevice.getImmediateState) {
    // 在这里添加polyfill实现
    console.log('加载PositionSensorVRDevice.getImmediateState polyfill');
}
```

