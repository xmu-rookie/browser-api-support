# AuthenticatorAttestationResponse.getPublicKeyAlgorithm API 兼容性数据

## 基本信息

- **API名称**: `AuthenticatorAttestationResponse.getPublicKeyAlgorithm`
- **MDN文档**: [AuthenticatorAttestationResponse.getPublicKeyAlgorithm](https://developer.mozilla.org/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm)
- **规范文档**: [查看规范](https://w3c.github.io/webauthn/#dom-authenticatorattestationresponse-getpublickeyalgorithm)
- **标签**: `web-features:webauthn-public-key-easy`

## 使用示例

### 基本用法

```javascript
// AuthenticatorAttestationResponse.getPublicKeyAlgorithm 使用示例
// 请查阅MDN文档了解具体用法
console.log('AuthenticatorAttestationResponse.getPublicKeyAlgorithm API');
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
// 检查AuthenticatorAttestationResponse.getPublicKeyAlgorithm是否支持
function isAuthenticatorAttestationResponseGetPublicKeyAlgorithmSupported() {
    return 'getPublicKeyAlgorithm' in authenticatorattestationresponse && typeof authenticatorattestationresponse.getPublicKeyAlgorithm === 'function';
}

if (isAuthenticatorAttestationResponseGetPublicKeyAlgorithmSupported()) {
    console.log('AuthenticatorAttestationResponse.getPublicKeyAlgorithm 支持');
    // 使用AuthenticatorAttestationResponse.getPublicKeyAlgorithm
} else {
    console.log('AuthenticatorAttestationResponse.getPublicKeyAlgorithm 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AuthenticatorAttestationResponse.getPublicKeyAlgorithm polyfill
if (!authenticatorattestationresponse.getPublicKeyAlgorithm) {
    // 在这里添加polyfill实现
    console.log('加载AuthenticatorAttestationResponse.getPublicKeyAlgorithm polyfill');
}
```

