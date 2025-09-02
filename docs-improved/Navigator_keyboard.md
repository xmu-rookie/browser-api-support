# Navigator.keyboard API 兼容性数据

## 基本信息

- **API名称**: `Navigator.keyboard`
- **MDN文档**: [Navigator.keyboard](https://developer.mozilla.org/docs/Web/API/Navigator/keyboard)
- **规范文档**: [查看规范](https://wicg.github.io/keyboard-lock/#h-navigator-keyboard)
- **标签**: `web-features:keyboard-lock`

## 使用示例

### 基本用法

```javascript
// Navigator.keyboard 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.keyboard API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 68 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 68

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.keyboard是否支持
function isNavigatorKeyboardSupported() {
    return 'keyboard' in navigator && typeof navigator.keyboard === 'function';
}

if (isNavigatorKeyboardSupported()) {
    console.log('Navigator.keyboard 支持');
    // 使用Navigator.keyboard
} else {
    console.log('Navigator.keyboard 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.keyboard polyfill
if (!navigator.keyboard) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.keyboard polyfill');
}
```

