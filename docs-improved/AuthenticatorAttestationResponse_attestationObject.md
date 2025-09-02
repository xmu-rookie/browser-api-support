# AuthenticatorAttestationResponse.attestationObject API 兼容性数据

## 基本信息

- **API名称**: `AuthenticatorAttestationResponse.attestationObject`
- **MDN文档**: [AuthenticatorAttestationResponse.attestationObject](https://developer.mozilla.org/docs/Web/API/AuthenticatorAttestationResponse/attestationObject)
- **规范文档**: [查看规范](https://w3c.github.io/webauthn/#dom-authenticatorattestationresponse-attestationobject)
- **标签**: `web-features:webauthn`

## 使用示例

### 基本用法

```javascript
// AuthenticatorAttestationResponse.attestationObject 使用示例
// 请查阅MDN文档了解具体用法
console.log('AuthenticatorAttestationResponse.attestationObject API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 67 |  |
| Chrome Android | 70 |  |
| Edge | 18 |  |
| Firefox | 60 | Only supports USB U2F tokens. |
| Firefox Android | 92 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 48 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 67

### Chrome Android

- **支持版本**: 70

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 60
- **注意事项**:
  - Only supports USB U2F tokens.

### Firefox Android

- **支持版本**: 92
- **支持版本**: 60
- **移除版本**: 92
- **部分实现**: 是
- **注意事项**:
  - Only supports USB U2F tokens.

### Opera Android

- **支持版本**: 48

### Safari

- **支持版本**: 13

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查AuthenticatorAttestationResponse.attestationObject是否支持
function isAuthenticatorAttestationResponseAttestationObjectSupported() {
    return 'attestationObject' in authenticatorattestationresponse && typeof authenticatorattestationresponse.attestationObject === 'function';
}

if (isAuthenticatorAttestationResponseAttestationObjectSupported()) {
    console.log('AuthenticatorAttestationResponse.attestationObject 支持');
    // 使用AuthenticatorAttestationResponse.attestationObject
} else {
    console.log('AuthenticatorAttestationResponse.attestationObject 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AuthenticatorAttestationResponse.attestationObject polyfill
if (!authenticatorattestationresponse.attestationObject) {
    // 在这里添加polyfill实现
    console.log('加载AuthenticatorAttestationResponse.attestationObject polyfill');
}
```

