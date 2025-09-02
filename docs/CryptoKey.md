# CryptoKey API 兼容性数据

## 基本信息

- **API名称**: `CryptoKey`
- **MDN文档**: [CryptoKey](https://developer.mozilla.org/docs/Web/API/CryptoKey)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#cryptokey-interface)
- **标签**: `web-features:web-cryptography`

## 使用示例

### 基本用法

```javascript
// CryptoKey 使用示例
// 请查阅MDN文档了解具体用法
console.log('CryptoKey API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.12 |  |
| Edge | 12 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 37

### deno

- **支持版本**: 1.12

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 34

### Node.js


### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查CryptoKey是否支持
function isCryptoKeySupported() {
    return 'CryptoKey' in window || typeof CryptoKey !== 'undefined';
}

if (isCryptoKeySupported()) {
    console.log('CryptoKey 支持');
    // 使用CryptoKey
} else {
    console.log('CryptoKey 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CryptoKey polyfill
if (!window.CryptoKey) {
    // 在这里添加polyfill实现
    console.log('加载CryptoKey polyfill');
}
```

