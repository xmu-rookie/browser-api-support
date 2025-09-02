# Gamepad.vibrationActuator API 兼容性数据

## 基本信息

- **API名称**: `Gamepad.vibrationActuator`
- **MDN文档**: [Gamepad.vibrationActuator](https://developer.mozilla.org/docs/Web/API/Gamepad/vibrationActuator)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#dom-gamepad-vibrationactuator)
- **标签**: `web-features:gamepad-haptics`

## 使用示例

### 基本用法

```javascript
// Gamepad.vibrationActuator 使用示例
// 请查阅MDN文档了解具体用法
console.log('Gamepad.vibrationActuator API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 68 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 68

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

### Safari iOS

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Gamepad.vibrationActuator是否支持
function isGamepadVibrationActuatorSupported() {
    return 'vibrationActuator' in gamepad && typeof gamepad.vibrationActuator === 'function';
}

if (isGamepadVibrationActuatorSupported()) {
    console.log('Gamepad.vibrationActuator 支持');
    // 使用Gamepad.vibrationActuator
} else {
    console.log('Gamepad.vibrationActuator 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Gamepad.vibrationActuator polyfill
if (!gamepad.vibrationActuator) {
    // 在这里添加polyfill实现
    console.log('加载Gamepad.vibrationActuator polyfill');
}
```

