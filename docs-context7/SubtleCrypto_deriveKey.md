# SubtleCrypto.deriveKey API 兼容性数据

## 基本信息

- **API名称**: `SubtleCrypto.deriveKey`
- **MDN文档**: [SubtleCrypto.deriveKey](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveKey)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#SubtleCrypto-method-deriveKey)
- **标签**: `web-features:web-cryptography`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "41",
    chrome_android: "同主版本",
    deno: "1.15",
    edge: "79",
    firefox: "34",
    firefox_android: "同主版本",
    nodejs: "15.0.0", // Supports: NODE-DH; Supports: NODE-SCRYPT,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "11",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **derivedKeyAlgorithm_option_aes**: `AES` as `derivedKeyAlgorithm` option value
- **derivedKeyAlgorithm_option_hkdf**: `HKDF` as `derivedKeyAlgorithm` option value
- **derivedKeyAlgorithm_option_hmac**: `HMAC` as `derivedKeyAlgorithm` option value
- **derivedKeyAlgorithm_option_pbkdf2**: `PBKDF2` as `derivedKeyAlgorithm` option value
- **x25519**: `X25519` algorithm

