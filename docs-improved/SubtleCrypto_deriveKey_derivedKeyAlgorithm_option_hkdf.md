# SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf API 兼容性数据

## 基本信息

- **API名称**: `SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf`
- **MDN文档**: [SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveKey)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#SubtleCrypto-method-deriveKey)
- **标签**: `web-features:web-cryptography`
- **描述**: `HKDF` as `derivedKeyAlgorithm` option value

## 使用示例

### 基本用法

```javascript
// SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf 使用示例
// 请查阅MDN文档了解具体用法
console.log('SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.15 |  |
| Edge | 同主版本 |  |
| Firefox | 119 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 15.0.0 |  |
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

### Firefox

- **支持版本**: 119

### Node.js

- **支持版本**: 15.0.0

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf是否支持
function isSubtleCryptoDeriveKeySupported() {
    return 'deriveKey' in subtlecrypto && typeof subtlecrypto.deriveKey === 'function';
}

if (isSubtleCryptoDeriveKeySupported()) {
    console.log('SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf 支持');
    // 使用SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf
} else {
    console.log('SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf polyfill
if (!subtlecrypto.deriveKey) {
    // 在这里添加polyfill实现
    console.log('加载SubtleCrypto.deriveKey.derivedKeyAlgorithm_option_hkdf polyfill');
}
```

