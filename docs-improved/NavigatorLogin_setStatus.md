# NavigatorLogin.setStatus API 兼容性数据

## 基本信息

- **API名称**: `NavigatorLogin.setStatus`
- **MDN文档**: [NavigatorLogin.setStatus](https://developer.mozilla.org/docs/Web/API/NavigatorLogin/setStatus)
- **规范文档**: [查看规范](https://w3c-fedid.github.io/login-status/#dom-navigatorlogin-setstatus)

## 使用示例

### 基本用法

```javascript
// NavigatorLogin.setStatus 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigatorLogin.setStatus API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 120 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 138 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 120

### Firefox

- **支持版本**: 138

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NavigatorLogin.setStatus是否支持
function isNavigatorLoginSetStatusSupported() {
    return 'setStatus' in navigatorlogin && typeof navigatorlogin.setStatus === 'function';
}

if (isNavigatorLoginSetStatusSupported()) {
    console.log('NavigatorLogin.setStatus 支持');
    // 使用NavigatorLogin.setStatus
} else {
    console.log('NavigatorLogin.setStatus 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigatorLogin.setStatus polyfill
if (!navigatorlogin.setStatus) {
    // 在这里添加polyfill实现
    console.log('加载NavigatorLogin.setStatus polyfill');
}
```

