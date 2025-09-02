# GamepadPose.linearVelocity API 兼容性数据

## 基本信息

- **API名称**: `GamepadPose.linearVelocity`
- **MDN文档**: [GamepadPose.linearVelocity](https://developer.mozilla.org/docs/Web/API/GamepadPose/linearVelocity)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/extensions.html#dom-gamepadpose-linearvelocity)
- **标签**: `web-features:gamepad-vr`

## 使用示例

### 基本用法

```javascript
// GamepadPose.linearVelocity 使用示例
// 请查阅MDN文档了解具体用法
console.log('GamepadPose.linearVelocity API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 55 |  |
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

### Edge

- **支持版本**: 15
- **移除版本**: 79

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GamepadPose.linearVelocity是否支持
function isGamepadPoseLinearVelocitySupported() {
    return 'linearVelocity' in gamepadpose && typeof gamepadpose.linearVelocity === 'function';
}

if (isGamepadPoseLinearVelocitySupported()) {
    console.log('GamepadPose.linearVelocity 支持');
    // 使用GamepadPose.linearVelocity
} else {
    console.log('GamepadPose.linearVelocity 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GamepadPose.linearVelocity polyfill
if (!gamepadpose.linearVelocity) {
    // 在这里添加polyfill实现
    console.log('加载GamepadPose.linearVelocity polyfill');
}
```

