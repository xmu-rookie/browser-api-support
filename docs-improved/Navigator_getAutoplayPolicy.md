# Navigator.getAutoplayPolicy API 兼容性数据

## 基本信息

- **API名称**: `Navigator.getAutoplayPolicy`
- **MDN文档**: [Navigator.getAutoplayPolicy](https://developer.mozilla.org/docs/Web/API/Navigator/getAutoplayPolicy)
- **规范文档**: [查看规范](https://w3c.github.io/autoplay/#dom-navigator-getautoplaypolicy)

## 使用示例

### 基本用法

```javascript
// Navigator.getAutoplayPolicy 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.getAutoplayPolicy API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 112 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 112

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.getAutoplayPolicy是否支持
function isNavigatorGetAutoplayPolicySupported() {
    return 'getAutoplayPolicy' in navigator && typeof navigator.getAutoplayPolicy === 'function';
}

if (isNavigatorGetAutoplayPolicySupported()) {
    console.log('Navigator.getAutoplayPolicy 支持');
    // 使用Navigator.getAutoplayPolicy
} else {
    console.log('Navigator.getAutoplayPolicy 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.getAutoplayPolicy polyfill
if (!navigator.getAutoplayPolicy) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.getAutoplayPolicy polyfill');
}
```

