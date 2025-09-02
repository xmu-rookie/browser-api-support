# AuthenticatorAttestationResponse.getPublicKey API 兼容性数据

## 基本信息

- **API名称**: `AuthenticatorAttestationResponse.getPublicKey`
- **MDN文档**: [AuthenticatorAttestationResponse.getPublicKey](https://developer.mozilla.org/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey)
- **规范文档**: [查看规范](https://w3c.github.io/webauthn/#dom-authenticatorattestationresponse-getpublickey)
- **标签**: `web-features:webauthn-public-key-easy`

## 使用示例

### 基本用法

```javascript
// AuthenticatorAttestationResponse.getPublicKey 使用示例
// 请查阅MDN文档了解具体用法
console.log('AuthenticatorAttestationResponse.getPublicKey API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 85 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 119 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 85

### Firefox

- **支持版本**: 119

### Safari

- **支持版本**: 16

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查AuthenticatorAttestationResponse.getPublicKey是否支持
function isAuthenticatorAttestationResponseGetPublicKeySupported() {
    return 'getPublicKey' in authenticatorattestationresponse && typeof authenticatorattestationresponse.getPublicKey === 'function';
}

if (isAuthenticatorAttestationResponseGetPublicKeySupported()) {
    console.log('AuthenticatorAttestationResponse.getPublicKey 支持');
    // 使用AuthenticatorAttestationResponse.getPublicKey
} else {
    console.log('AuthenticatorAttestationResponse.getPublicKey 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AuthenticatorAttestationResponse.getPublicKey polyfill
if (!authenticatorattestationresponse.getPublicKey) {
    // 在这里添加polyfill实现
    console.log('加载AuthenticatorAttestationResponse.getPublicKey polyfill');
}
```

