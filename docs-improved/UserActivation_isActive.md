# UserActivation.isActive API 兼容性数据

## 基本信息

- **API名称**: `UserActivation.isActive`
- **MDN文档**: [UserActivation.isActive](https://developer.mozilla.org/docs/Web/API/UserActivation/isActive)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-useractivation-isactive)
- **标签**: `web-features:user-activation`

## 使用示例

### 基本用法

```javascript
// UserActivation.isActive 使用示例
// 请查阅MDN文档了解具体用法
console.log('UserActivation.isActive API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 72 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 120 |  |
| Firefox Android | 同主版本 |  |
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

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查UserActivation.isActive是否支持
function isUserActivationIsActiveSupported() {
    return 'isActive' in useractivation && typeof useractivation.isActive === 'function';
}

if (isUserActivationIsActiveSupported()) {
    console.log('UserActivation.isActive 支持');
    // 使用UserActivation.isActive
} else {
    console.log('UserActivation.isActive 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// UserActivation.isActive polyfill
if (!useractivation.isActive) {
    // 在这里添加polyfill实现
    console.log('加载UserActivation.isActive polyfill');
}
```

