# Gamepad.id API 兼容性数据

## 基本信息

- **API名称**: `Gamepad.id`
- **MDN文档**: [Gamepad.id](https://developer.mozilla.org/docs/Web/API/Gamepad/id)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#dom-gamepad-id)
- **标签**: `web-features:gamepad`

## 使用示例

### 基本用法

```javascript
// Gamepad.id 使用示例
// 请查阅MDN文档了解具体用法
console.log('Gamepad.id API');
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
// 检查Gamepad.id是否支持
function isGamepadIdSupported() {
    return 'id' in gamepad && typeof gamepad.id === 'function';
}

if (isGamepadIdSupported()) {
    console.log('Gamepad.id 支持');
    // 使用Gamepad.id
} else {
    console.log('Gamepad.id 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Gamepad.id polyfill
if (!gamepad.id) {
    // 在这里添加polyfill实现
    console.log('加载Gamepad.id polyfill');
}
```

