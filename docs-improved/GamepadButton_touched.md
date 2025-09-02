# GamepadButton.touched API 兼容性数据

## 基本信息

- **API名称**: `GamepadButton.touched`
- **MDN文档**: [GamepadButton.touched](https://developer.mozilla.org/docs/Web/API/GamepadButton/touched)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#dom-gamepadbutton-touched)
- **标签**: `web-features:gamepad-touch`

## 使用示例

### 基本用法

```javascript
// GamepadButton.touched 使用示例
// 请查阅MDN文档了解具体用法
console.log('GamepadButton.touched API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 73 |  |
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

- **支持版本**: 73

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GamepadButton.touched是否支持
function isGamepadButtonTouchedSupported() {
    return 'touched' in gamepadbutton && typeof gamepadbutton.touched === 'function';
}

if (isGamepadButtonTouchedSupported()) {
    console.log('GamepadButton.touched 支持');
    // 使用GamepadButton.touched
} else {
    console.log('GamepadButton.touched 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GamepadButton.touched polyfill
if (!gamepadbutton.touched) {
    // 在这里添加polyfill实现
    console.log('加载GamepadButton.touched polyfill');
}
```

