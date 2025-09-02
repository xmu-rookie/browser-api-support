# Crypto API 兼容性数据

## 基本信息

- **API名称**: `Crypto`
- **MDN文档**: [Crypto](https://developer.mozilla.org/docs/Web/API/Crypto)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#crypto-interface)
- **标签**: `web-features:web-cryptography`

## 使用示例

### 基本用法

```javascript
// Crypto 使用示例
// 请查阅MDN文档了解具体用法
console.log('Crypto API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 11 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.11 |  |
| Edge | 12 |  |
| Firefox | 21 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Node.js | 19.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 11

### Deno

- **支持版本**: 1.11
- **支持版本**: 1.0
- **移除版本**: 1.11
- **部分实现**: 是
- **注意事项**:
  - `Crypto` is not a concrete interface, but its methods are available on `Window.crypto`.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 21

### Internet Explorer

- **支持版本**: 11

### Node.js

- **支持版本**: 19.0.0
- **支持版本**: 15.0.0
- **移除版本**: 19.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `crypto` module.

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Crypto是否支持
function isCryptoSupported() {
    return 'Crypto' in window || typeof Crypto !== 'undefined';
}

if (isCryptoSupported()) {
    console.log('Crypto 支持');
    // 使用Crypto
} else {
    console.log('Crypto 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Crypto polyfill
if (!window.Crypto) {
    // 在这里添加polyfill实现
    console.log('加载Crypto polyfill');
}
```

