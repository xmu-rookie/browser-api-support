# SubtleCrypto.digest API 兼容性数据

## 基本信息

- **API名称**: `SubtleCrypto.digest`
- **MDN文档**: [SubtleCrypto.digest](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/digest)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#SubtleCrypto-method-digest)
- **标签**: `web-features:web-cryptography`

## 使用示例

### 基本用法

```javascript
// SubtleCrypto.digest 使用示例
// 请查阅MDN文档了解具体用法
console.log('SubtleCrypto.digest API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.11 |  |
| Edge | 79 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Returns `CryptoOperation` instead of `Promise` |
| Node.js | 15.0.0 |  |
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

- **支持版本**: 41
- **支持版本**: 37
- **移除版本**: 41
- **部分实现**: 是
- **注意事项**:
  - Before version 41, Chrome expected the `algorithm` parameter to be an object.

### Deno

- **支持版本**: 1.11

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Not supported: SHA-1.

### Firefox

- **支持版本**: 34

### Internet Explorer

- **支持版本**: 11
- **部分实现**: 是
- **注意事项**:
  - Returns `CryptoOperation` instead of `Promise`

### Node.js

- **支持版本**: 15.0.0

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查SubtleCrypto.digest是否支持
function isSubtleCryptoDigestSupported() {
    return 'digest' in subtlecrypto && typeof subtlecrypto.digest === 'function';
}

if (isSubtleCryptoDigestSupported()) {
    console.log('SubtleCrypto.digest 支持');
    // 使用SubtleCrypto.digest
} else {
    console.log('SubtleCrypto.digest 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SubtleCrypto.digest polyfill
if (!subtlecrypto.digest) {
    // 在这里添加polyfill实现
    console.log('加载SubtleCrypto.digest polyfill');
}
```

