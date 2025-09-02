# Crypto.randomUUID API 兼容性数据

## 基本信息

- **API名称**: `Crypto.randomUUID`
- **MDN文档**: [Crypto.randomUUID](https://developer.mozilla.org/docs/Web/API/Crypto/randomUUID)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#Crypto-method-randomUUID)
- **标签**: `web-features:web-cryptography`
- **描述**: `randomUUID()`

## 使用示例

### 基本用法

```javascript
// Crypto.randomUUID 使用示例
// 请查阅MDN文档了解具体用法
console.log('Crypto.randomUUID API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 92 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.11 |  |
| Edge | 同主版本 |  |
| Firefox | 95 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.7.0 | Since 14.17.0 and 15.6.0, a similar method is available via the `crypto` module. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 92

### Deno

- **支持版本**: 1.11

### Firefox

- **支持版本**: 95

### Node.js

- **支持版本**: 16.7.0
- **注意事项**:
  - Since 14.17.0 and 15.6.0, a similar method is available via the `crypto` module.

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Crypto.randomUUID是否支持
function isCryptoRandomUUIDSupported() {
    return 'randomUUID' in crypto && typeof crypto.randomUUID === 'function';
}

if (isCryptoRandomUUIDSupported()) {
    console.log('Crypto.randomUUID 支持');
    // 使用Crypto.randomUUID
} else {
    console.log('Crypto.randomUUID 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Crypto.randomUUID polyfill
if (!crypto.randomUUID) {
    // 在这里添加polyfill实现
    console.log('加载Crypto.randomUUID polyfill');
}
```

