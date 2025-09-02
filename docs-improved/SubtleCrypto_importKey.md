# SubtleCrypto.importKey API 兼容性数据

## 基本信息

- **API名称**: `SubtleCrypto.importKey`
- **MDN文档**: [SubtleCrypto.importKey](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/importKey)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#SubtleCrypto-method-importKey)
- **标签**: `web-features:web-cryptography`

## 使用示例

### 基本用法

```javascript
// SubtleCrypto.importKey 使用示例
// 请查阅MDN文档了解具体用法
console.log('SubtleCrypto.importKey API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.17 | Not supported: ECDSA P-521, ECDH P-521. |
| Edge | 79 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Returns `KeyOperation` instead of `Promise` |
| Node.js | 15.0.0 | Supports: NODE-DSA; Supports: NODE-DH; Supports: NODE-SCRYPT |
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

- **支持版本**: 1.17
- **部分实现**: 是
- **注意事项**:
  - Not supported: ECDSA P-521, ECDH P-521.
- **支持版本**: 1.15
- **移除版本**: 1.17
- **部分实现**: 是
- **注意事项**:
  - Not supported: ECDH.
- **支持版本**: 1.14
- **移除版本**: 1.15
- **部分实现**: 是
- **注意事项**:
  - Not supported: ECDSA, ECDH, AES-CTR, AES-CBC, AES-GCM, AES-KW.

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Not supported: RSA-PSS, ECDSA, ECDH.
  - Not supported: AES-CTR, HKDF, PBKDF2.

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
  - Supports: NODE-SCRYPT

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查SubtleCrypto.importKey是否支持
function isSubtleCryptoImportKeySupported() {
    return 'importKey' in subtlecrypto && typeof subtlecrypto.importKey === 'function';
}

if (isSubtleCryptoImportKeySupported()) {
    console.log('SubtleCrypto.importKey 支持');
    // 使用SubtleCrypto.importKey
} else {
    console.log('SubtleCrypto.importKey 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SubtleCrypto.importKey polyfill
if (!subtlecrypto.importKey) {
    // 在这里添加polyfill实现
    console.log('加载SubtleCrypto.importKey polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **ed25519**: `Ed25519` algorithm
- **x25519**: `X25519` algorithm

