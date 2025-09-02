# GamepadPose.orientation API 兼容性数据

## 基本信息

- **API名称**: `GamepadPose.orientation`
- **MDN文档**: [GamepadPose.orientation](https://developer.mozilla.org/docs/Web/API/GamepadPose/orientation)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/extensions.html#dom-gamepadpose-orientation)
- **标签**: `web-features:gamepad-vr`

## 使用示例

### 基本用法

```javascript
// GamepadPose.orientation 使用示例
// 请查阅MDN文档了解具体用法
console.log('GamepadPose.orientation API');
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
// 检查GamepadPose.orientation是否支持
function isGamepadPoseOrientationSupported() {
    return 'orientation' in gamepadpose && typeof gamepadpose.orientation === 'function';
}

if (isGamepadPoseOrientationSupported()) {
    console.log('GamepadPose.orientation 支持');
    // 使用GamepadPose.orientation
} else {
    console.log('GamepadPose.orientation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GamepadPose.orientation polyfill
if (!gamepadpose.orientation) {
    // 在这里添加polyfill实现
    console.log('加载GamepadPose.orientation polyfill');
}
```

