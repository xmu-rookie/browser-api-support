# VRPose.angularAcceleration API 兼容性数据

## 基本信息

- **API名称**: `VRPose.angularAcceleration`
- **MDN文档**: [VRPose.angularAcceleration](https://developer.mozilla.org/docs/Web/API/VRPose/angularAcceleration)
- **标签**: `web-features:webvr`

## 使用示例

### 基本用法

```javascript
// VRPose.angularAcceleration 使用示例
// 请查阅MDN文档了解具体用法
console.log('VRPose.angularAcceleration API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 98 |  |
| Firefox Android | 55 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 | Google Cardboard supported in Samsung Internet 7.0. |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Edge

- **支持版本**: 15
- **移除版本**: 79

### Firefox

- **支持版本**: 98
- **需要标志**: 
  - dom.vr.enabled: true
- **支持版本**: 64
- **移除版本**: 98
- **注意事项**:
  - Only on macOS and Windows.
- **支持版本**: 55
- **移除版本**: 64
- **注意事项**:
  - Only on Windows.

### Firefox Android

- **支持版本**: 55
- **移除版本**: 98

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 6.0
- **注意事项**:
  - Google Cardboard supported in Samsung Internet 7.0.

## 兼容性检查代码

### 特性检测

```javascript
// 检查VRPose.angularAcceleration是否支持
function isVRPoseAngularAccelerationSupported() {
    return 'angularAcceleration' in vrpose && typeof vrpose.angularAcceleration === 'function';
}

if (isVRPoseAngularAccelerationSupported()) {
    console.log('VRPose.angularAcceleration 支持');
    // 使用VRPose.angularAcceleration
} else {
    console.log('VRPose.angularAcceleration 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VRPose.angularAcceleration polyfill
if (!vrpose.angularAcceleration) {
    // 在这里添加polyfill实现
    console.log('加载VRPose.angularAcceleration polyfill');
}
```

