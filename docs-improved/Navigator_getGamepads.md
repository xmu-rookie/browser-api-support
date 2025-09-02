# Navigator.getGamepads API 兼容性数据

## 基本信息

- **API名称**: `Navigator.getGamepads`
- **MDN文档**: [Navigator.getGamepads](https://developer.mozilla.org/docs/Web/API/Navigator/getGamepads)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#dom-navigator-getgamepads)
- **标签**: `web-features:gamepad`

## 使用示例

### 基本用法

```javascript
// Navigator.getGamepads 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.getGamepads API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 35 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 29 |  |
| Firefox Android | 32 |  |
| Node.js | 不支持 |  |
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
- **支持版本**: 21
- **前缀**: webkit

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 29

### Firefox Android

- **支持版本**: 32

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.getGamepads是否支持
function isNavigatorGetGamepadsSupported() {
    return 'getGamepads' in navigator && typeof navigator.getGamepads === 'function';
}

if (isNavigatorGetGamepadsSupported()) {
    console.log('Navigator.getGamepads 支持');
    // 使用Navigator.getGamepads
} else {
    console.log('Navigator.getGamepads 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.getGamepads polyfill
if (!navigator.getGamepads) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.getGamepads polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **secure_context_required**: Secure context required

