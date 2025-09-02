# GamepadEvent.GamepadEvent API 兼容性数据

## 基本信息

- **API名称**: `GamepadEvent.GamepadEvent`
- **MDN文档**: [GamepadEvent.GamepadEvent](https://developer.mozilla.org/docs/Web/API/GamepadEvent/GamepadEvent)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#dom-gamepadevent-constructor)
- **标签**: `web-features:gamepad`
- **描述**: `GamepadEvent()` constructor

## 使用示例

### 基本用法

```javascript
// GamepadEvent.GamepadEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('GamepadEvent.GamepadEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 35 |  |
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

- **支持版本**: 35

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
// 检查GamepadEvent.GamepadEvent是否支持
function isGamepadEventGamepadEventSupported() {
    return 'GamepadEvent' in gamepadevent && typeof gamepadevent.GamepadEvent === 'function';
}

if (isGamepadEventGamepadEventSupported()) {
    console.log('GamepadEvent.GamepadEvent 支持');
    // 使用GamepadEvent.GamepadEvent
} else {
    console.log('GamepadEvent.GamepadEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GamepadEvent.GamepadEvent polyfill
if (!gamepadevent.GamepadEvent) {
    // 在这里添加polyfill实现
    console.log('加载GamepadEvent.GamepadEvent polyfill');
}
```

