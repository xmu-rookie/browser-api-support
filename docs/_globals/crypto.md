# crypto API 兼容性数据

## 基本信息

- **API名称**: `crypto`
- **MDN文档**: [crypto](https://developer.mozilla.org/docs/Web/API/Window/crypto)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#dom-windoworworkerglobalscope-crypto)
- **标签**: `web-features:web-cryptography`

## 使用示例

### 基本用法

```javascript
// crypto 使用示例
// 请查阅MDN文档了解具体用法
console.log('crypto API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 37

### deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 11

### Node.js


### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查crypto是否支持
function iscryptoSupported() {
    return 'crypto' in window || typeof crypto !== 'undefined';
}

if (iscryptoSupported()) {
    console.log('crypto 支持');
    // 使用crypto
} else {
    console.log('crypto 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// crypto polyfill
if (!window.crypto) {
    // 在这里添加polyfill实现
    console.log('加载crypto polyfill');
}
```

