# TrustedTypePolicyFactory.createPolicy API 兼容性数据

## 基本信息

- **API名称**: `TrustedTypePolicyFactory.createPolicy`
- **MDN文档**: [TrustedTypePolicyFactory.createPolicy](https://developer.mozilla.org/docs/Web/API/TrustedTypePolicyFactory/createPolicy)
- **规范文档**: [查看规范](https://w3c.github.io/trusted-types/dist/spec/#dom-trustedtypepolicyfactory-createpolicy)
- **标签**: `web-features:trusted-types`

## 使用示例

### 基本用法

```javascript
// TrustedTypePolicyFactory.createPolicy 使用示例
// 请查阅MDN文档了解具体用法
console.log('TrustedTypePolicyFactory.createPolicy API');
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
// 检查TrustedTypePolicyFactory.createPolicy是否支持
function isTrustedTypePolicyFactoryCreatePolicySupported() {
    return 'createPolicy' in trustedtypepolicyfactory && typeof trustedtypepolicyfactory.createPolicy === 'function';
}

if (isTrustedTypePolicyFactoryCreatePolicySupported()) {
    console.log('TrustedTypePolicyFactory.createPolicy 支持');
    // 使用TrustedTypePolicyFactory.createPolicy
} else {
    console.log('TrustedTypePolicyFactory.createPolicy 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TrustedTypePolicyFactory.createPolicy polyfill
if (!trustedtypepolicyfactory.createPolicy) {
    // 在这里添加polyfill实现
    console.log('加载TrustedTypePolicyFactory.createPolicy polyfill');
}
```

