# FederatedCredential.provider API 兼容性数据

## 基本信息

- **API名称**: `FederatedCredential.provider`
- **MDN文档**: [FederatedCredential.provider](https://developer.mozilla.org/docs/Web/API/FederatedCredential/provider)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-credential-management/#dom-federatedcredential-provider)
- **标签**: `web-features:federated-credentials`

## 使用示例

### 基本用法

```javascript
// FederatedCredential.provider 使用示例
// 请查阅MDN文档了解具体用法
console.log('FederatedCredential.provider API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 51

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FederatedCredential.provider是否支持
function isFederatedCredentialProviderSupported() {
    return 'provider' in federatedcredential && typeof federatedcredential.provider === 'function';
}

if (isFederatedCredentialProviderSupported()) {
    console.log('FederatedCredential.provider 支持');
    // 使用FederatedCredential.provider
} else {
    console.log('FederatedCredential.provider 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FederatedCredential.provider polyfill
if (!federatedcredential.provider) {
    // 在这里添加polyfill实现
    console.log('加载FederatedCredential.provider polyfill');
}
```

