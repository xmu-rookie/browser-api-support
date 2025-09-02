# SubtleCrypto.sign.ed25519 API 兼容性数据

## 基本信息

- **API名称**: `SubtleCrypto.sign.ed25519`
- **MDN文档**: [SubtleCrypto.sign.ed25519](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/sign)
- **规范文档**: [查看规范](https://wicg.github.io/webcrypto-secure-curves/#ed25519)
- **标签**: `web-features:web-cryptography`
- **描述**: `Ed25519` algorithm

## 使用示例

### 基本用法

```javascript
// SubtleCrypto.sign.ed25519 使用示例
// 请查阅MDN文档了解具体用法
console.log('SubtleCrypto.sign.ed25519 API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 137 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.26 |  |
| Edge | 同主版本 |  |
| Firefox | 129 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.17.0 | Marked as ['Stability 1' - Experimental](https://nodejs.org/dist/latest-v16.x/docs/api/webcrypto.htm... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 | Generates randomized signatures as per [draft-irtf-cfrg-det-sigs-with-noise](https://datatracker.iet... |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 137

### Deno

- **支持版本**: 1.26

### Firefox

- **支持版本**: 129

### Node.js

- **支持版本**: 16.17.0
- **注意事项**:
  - Marked as ['Stability 1' - Experimental](https://nodejs.org/dist/latest-v16.x/docs/api/webcrypto.html#ed25519ed448x25519x448-key-pairs).

### Safari

- **支持版本**: 17
- **注意事项**:
  - Generates randomized signatures as per [draft-irtf-cfrg-det-sigs-with-noise](https://datatracker.ietf.org/doc/draft-irtf-cfrg-det-sigs-with-noise/), instead of deterministic signatures as per [RFC 8032](https://www.rfc-editor.org/rfc/rfc8032).

## 兼容性检查代码

### 特性检测

```javascript
// 检查SubtleCrypto.sign.ed25519是否支持
function isSubtleCryptoSignSupported() {
    return 'sign' in subtlecrypto && typeof subtlecrypto.sign === 'function';
}

if (isSubtleCryptoSignSupported()) {
    console.log('SubtleCrypto.sign.ed25519 支持');
    // 使用SubtleCrypto.sign.ed25519
} else {
    console.log('SubtleCrypto.sign.ed25519 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SubtleCrypto.sign.ed25519 polyfill
if (!subtlecrypto.sign) {
    // 在这里添加polyfill实现
    console.log('加载SubtleCrypto.sign.ed25519 polyfill');
}
```

