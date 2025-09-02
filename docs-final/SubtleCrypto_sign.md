# SubtleCrypto.sign API 兼容性数据

## 基本信息

- **API名称**: `SubtleCrypto.sign`
- **MDN文档**: [SubtleCrypto.sign](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/sign)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#SubtleCrypto-method-sign)
- **标签**: `web-features:web-cryptography`

## 使用示例

### 基本用法

```javascript
// SubtleCrypto.sign 使用示例
// 请查阅MDN文档了解具体用法
console.log('SubtleCrypto.sign API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.12 |  |
| Edge | 79 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Returns `CryptoOperation` instead of `Promise` |
| Node.js | 15.0.0 | Supports: NODE-DSA |
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

- **支持版本**: 1.12

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Not supported: RSA-PSS, ECDSA.

### Firefox

- **支持版本**: 34

### Internet Explorer

- **支持版本**: 11
- **部分实现**: 是
- **注意事项**:
  - Returns `CryptoOperation` instead of `Promise`

### Node.js

- **支持版本**: 15.0.0
- **注意事项**:
  - Supports: NODE-DSA

### Safari

- **支持版本**: 7

## 相关子API

该API包含以下子功能：

- **ed25519**: `Ed25519` algorithm

