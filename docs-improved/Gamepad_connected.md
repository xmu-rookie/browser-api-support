# Gamepad.connected API 兼容性数据

## 基本信息

- **API名称**: `Gamepad.connected`
- **MDN文档**: [Gamepad.connected](https://developer.mozilla.org/docs/Web/API/Gamepad/connected)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#dom-gamepad-connected)
- **标签**: `web-features:gamepad`

## 使用示例

### 基本用法

```javascript
// Gamepad.connected 使用示例
// 请查阅MDN文档了解具体用法
console.log('Gamepad.connected API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 25 |  |
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

- **支持版本**: 25

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
// 检查Gamepad.connected是否支持
function isGamepadConnectedSupported() {
    return 'connected' in gamepad && typeof gamepad.connected === 'function';
}

if (isGamepadConnectedSupported()) {
    console.log('Gamepad.connected 支持');
    // 使用Gamepad.connected
} else {
    console.log('Gamepad.connected 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Gamepad.connected polyfill
if (!gamepad.connected) {
    // 在这里添加polyfill实现
    console.log('加载Gamepad.connected polyfill');
}
```

