# SubtleCrypto.deriveKey API 兼容性数据

## 基本信息

- **API名称**: `SubtleCrypto.deriveKey`
- **MDN文档**: [SubtleCrypto.deriveKey](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveKey)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#SubtleCrypto-method-deriveKey)
- **标签**: `web-features:web-cryptography`

## 使用示例

### 基本用法

```javascript
// SubtleCrypto.deriveKey 使用示例
// 请查阅MDN文档了解具体用法
console.log('SubtleCrypto.deriveKey API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.15 |  |
| Edge | 79 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 15.0.0 | Supports: NODE-DH; Supports: NODE-SCRYPT |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 41

### Deno

- **支持版本**: 1.15

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Not supported: ECDH.
  - Not supported: HKDF, PBKDF2.

### Firefox

- **支持版本**: 34

### Node.js

- **支持版本**: 15.0.0
- **注意事项**:
  - Supports: NODE-DH
  - Supports: NODE-SCRYPT

### Safari

- **支持版本**: 11

## 相关子API

该API包含以下子功能：

- **derivedKeyAlgorithm_option_aes**: `AES` as `derivedKeyAlgorithm` option value
- **derivedKeyAlgorithm_option_hkdf**: `HKDF` as `derivedKeyAlgorithm` option value
- **derivedKeyAlgorithm_option_hmac**: `HMAC` as `derivedKeyAlgorithm` option value
- **derivedKeyAlgorithm_option_pbkdf2**: `PBKDF2` as `derivedKeyAlgorithm` option value
- **x25519**: `X25519` algorithm

