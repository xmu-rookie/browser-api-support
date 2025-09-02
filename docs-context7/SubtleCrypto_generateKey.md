# SubtleCrypto.generateKey API 兼容性数据

## 基本信息

- **API名称**: `SubtleCrypto.generateKey`
- **MDN文档**: [SubtleCrypto.generateKey](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/generateKey)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#SubtleCrypto-method-generateKey)
- **标签**: `web-features:web-cryptography`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "37",
    chrome_android: "同主版本",
    deno: "1.14", // Not supported: ECDSA P-521, ECDH P-521.,
    edge: "79",
    firefox: "34",
    firefox_android: "同主版本",
    ie: "11", // Returns `KeyOperation` instead of `Promise`,
    nodejs: "15.0.0", // Supports: NODE-DSA; Supports: NODE-DH,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "7",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **ed25519**: `Ed25519` algorithm
- **x25519**: `X25519` algorithm

