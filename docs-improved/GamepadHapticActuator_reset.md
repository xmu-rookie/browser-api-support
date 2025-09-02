# GamepadHapticActuator.reset API 兼容性数据

## 基本信息

- **API名称**: `GamepadHapticActuator.reset`
- **MDN文档**: [GamepadHapticActuator.reset](https://developer.mozilla.org/docs/Web/API/GamepadHapticActuator/reset)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#dom-gamepadhapticactuator-reset)
- **标签**: `web-features:gamepad-haptics`

## 使用示例

### 基本用法

```javascript
// GamepadHapticActuator.reset 使用示例
// 请查阅MDN文档了解具体用法
console.log('GamepadHapticActuator.reset API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 68 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 68

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GamepadHapticActuator.reset是否支持
function isGamepadHapticActuatorResetSupported() {
    return 'reset' in gamepadhapticactuator && typeof gamepadhapticactuator.reset === 'function';
}

if (isGamepadHapticActuatorResetSupported()) {
    console.log('GamepadHapticActuator.reset 支持');
    // 使用GamepadHapticActuator.reset
} else {
    console.log('GamepadHapticActuator.reset 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GamepadHapticActuator.reset polyfill
if (!gamepadhapticactuator.reset) {
    // 在这里添加polyfill实现
    console.log('加载GamepadHapticActuator.reset polyfill');
}
```

