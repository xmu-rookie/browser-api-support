# GamepadHapticActuator.effects.type_trigger-rumble API 兼容性数据

## 基本信息

- **API名称**: `GamepadHapticActuator.effects.type_trigger-rumble`
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#dom-gamepadhapticeffecttype-trigger-rumble)
- **标签**: `web-features:gamepad-haptics`
- **描述**: `trigger-rumble` effect type

## 使用示例

### 基本用法

```javascript
// GamepadHapticActuator.effects.type_trigger-rumble 使用示例
// 请查阅MDN文档了解具体用法
console.log('GamepadHapticActuator.effects.type_trigger-rumble API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
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

- **支持版本**: 126

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GamepadHapticActuator.effects.type_trigger-rumble是否支持
function isGamepadHapticActuatorEffectsSupported() {
    return 'effects' in gamepadhapticactuator && typeof gamepadhapticactuator.effects === 'function';
}

if (isGamepadHapticActuatorEffectsSupported()) {
    console.log('GamepadHapticActuator.effects.type_trigger-rumble 支持');
    // 使用GamepadHapticActuator.effects.type_trigger-rumble
} else {
    console.log('GamepadHapticActuator.effects.type_trigger-rumble 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GamepadHapticActuator.effects.type_trigger-rumble polyfill
if (!gamepadhapticactuator.effects) {
    // 在这里添加polyfill实现
    console.log('加载GamepadHapticActuator.effects.type_trigger-rumble polyfill');
}
```

