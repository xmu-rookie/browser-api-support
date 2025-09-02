# Navigator.userActivation API 兼容性数据

## 基本信息

- **API名称**: `Navigator.userActivation`
- **MDN文档**: [Navigator.userActivation](https://developer.mozilla.org/docs/Web/API/Navigator/userActivation)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-navigator-useractivation)
- **标签**: `web-features:user-activation`

## 使用示例

### 基本用法

```javascript
// Navigator.userActivation 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.userActivation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 72 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 120 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 72

### Firefox

- **支持版本**: 120

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.userActivation是否支持
function isNavigatorUserActivationSupported() {
    return 'userActivation' in navigator && typeof navigator.userActivation === 'function';
}

if (isNavigatorUserActivationSupported()) {
    console.log('Navigator.userActivation 支持');
    // 使用Navigator.userActivation
} else {
    console.log('Navigator.userActivation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.userActivation polyfill
if (!navigator.userActivation) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.userActivation polyfill');
}
```

