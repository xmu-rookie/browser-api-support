# GamepadHapticActuator.playEffect API 兼容性数据

## 基本信息

- **API名称**: `GamepadHapticActuator.playEffect`
- **MDN文档**: [GamepadHapticActuator.playEffect](https://developer.mozilla.org/docs/Web/API/GamepadHapticActuator/playEffect)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#dom-gamepadhapticactuator-playeffect)
- **标签**: `web-features:gamepad-haptics`

## 使用示例

### 基本用法

```javascript
// GamepadHapticActuator.playEffect 使用示例
// 请查阅MDN文档了解具体用法
console.log('GamepadHapticActuator.playEffect API');
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
// 检查GamepadHapticActuator.playEffect是否支持
function isGamepadHapticActuatorPlayEffectSupported() {
    return 'playEffect' in gamepadhapticactuator && typeof gamepadhapticactuator.playEffect === 'function';
}

if (isGamepadHapticActuatorPlayEffectSupported()) {
    console.log('GamepadHapticActuator.playEffect 支持');
    // 使用GamepadHapticActuator.playEffect
} else {
    console.log('GamepadHapticActuator.playEffect 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GamepadHapticActuator.playEffect polyfill
if (!gamepadhapticactuator.playEffect) {
    // 在这里添加polyfill实现
    console.log('加载GamepadHapticActuator.playEffect polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **params_leftTrigger_parameter**: `params.leftTrigger` parameter
- **params_rightTrigger_parameter**: `params.rightTrigger` parameter
- **type_trigger-rumble**: `trigger-rumble` effect type

