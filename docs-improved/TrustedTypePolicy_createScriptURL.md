# TrustedTypePolicy.createScriptURL API 兼容性数据

## 基本信息

- **API名称**: `TrustedTypePolicy.createScriptURL`
- **MDN文档**: [TrustedTypePolicy.createScriptURL](https://developer.mozilla.org/docs/Web/API/TrustedTypePolicy/createScriptURL)
- **规范文档**: [查看规范](https://w3c.github.io/trusted-types/dist/spec/#dom-trustedtypepolicy-createscripturl)
- **标签**: `web-features:trusted-types`

## 使用示例

### 基本用法

```javascript
// TrustedTypePolicy.createScriptURL 使用示例
// 请查阅MDN文档了解具体用法
console.log('TrustedTypePolicy.createScriptURL API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 83 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 83

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查TrustedTypePolicy.createScriptURL是否支持
function isTrustedTypePolicyCreateScriptURLSupported() {
    return 'createScriptURL' in trustedtypepolicy && typeof trustedtypepolicy.createScriptURL === 'function';
}

if (isTrustedTypePolicyCreateScriptURLSupported()) {
    console.log('TrustedTypePolicy.createScriptURL 支持');
    // 使用TrustedTypePolicy.createScriptURL
} else {
    console.log('TrustedTypePolicy.createScriptURL 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TrustedTypePolicy.createScriptURL polyfill
if (!trustedtypepolicy.createScriptURL) {
    // 在这里添加polyfill实现
    console.log('加载TrustedTypePolicy.createScriptURL polyfill');
}
```

