# SubtleCrypto.generateKey API 兼容性数据

## 基本信息

- **API名称**: `SubtleCrypto.generateKey`
- **MDN文档**: [SubtleCrypto.generateKey](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/generateKey)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#SubtleCrypto-method-generateKey)
- **标签**: `web-features:web-cryptography`

## 使用示例

### 基本用法

```javascript
// SubtleCrypto.generateKey 使用示例
// 请查阅MDN文档了解具体用法
console.log('SubtleCrypto.generateKey API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.14 | Not supported: ECDSA P-521, ECDH P-521. |
| Edge | 79 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Returns `KeyOperation` instead of `Promise` |
| Node.js | 15.0.0 | Supports: NODE-DSA; Supports: NODE-DH |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 37

### Deno

- **支持版本**: 1.14
- **部分实现**: 是
- **注意事项**:
  - Not supported: ECDSA P-521, ECDH P-521.
- **支持版本**: 1.12
- **移除版本**: 1.14
- **部分实现**: 是
- **注意事项**:
  - Not supported: RSA-OAEP, ECDSA P-521, ECDH, AES-CTR, AES-CBC, AES-GCM, AES-KW.

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Not supported: RSA-PSS, ECDSA, ECDH.
  - Not supported: AES-CTR.

### Firefox

- **支持版本**: 34

### Internet Explorer

- **支持版本**: 11
- **部分实现**: 是
- **注意事项**:
  - Returns `KeyOperation` instead of `Promise`

### Node.js

- **支持版本**: 15.0.0
- **注意事项**:
  - Supports: NODE-DSA
  - Supports: NODE-DH

### Safari

- **支持版本**: 7

## 相关子API

该API包含以下子功能：

- **ed25519**: `Ed25519` algorithm
- **x25519**: `X25519` algorithm

