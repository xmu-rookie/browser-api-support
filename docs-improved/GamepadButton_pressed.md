# GamepadButton.pressed API 兼容性数据

## 基本信息

- **API名称**: `GamepadButton.pressed`
- **MDN文档**: [GamepadButton.pressed](https://developer.mozilla.org/docs/Web/API/GamepadButton/pressed)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#dom-gamepadbutton-pressed)
- **标签**: `web-features:gamepad`

## 使用示例

### 基本用法

```javascript
// GamepadButton.pressed 使用示例
// 请查阅MDN文档了解具体用法
console.log('GamepadButton.pressed API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 21 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 29 |  |
| Firefox Android | 32 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 21

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 29

### Firefox Android

- **支持版本**: 32

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查GamepadButton.pressed是否支持
function isGamepadButtonPressedSupported() {
    return 'pressed' in gamepadbutton && typeof gamepadbutton.pressed === 'function';
}

if (isGamepadButtonPressedSupported()) {
    console.log('GamepadButton.pressed 支持');
    // 使用GamepadButton.pressed
} else {
    console.log('GamepadButton.pressed 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GamepadButton.pressed polyfill
if (!gamepadbutton.pressed) {
    // 在这里添加polyfill实现
    console.log('加载GamepadButton.pressed polyfill');
}
```

