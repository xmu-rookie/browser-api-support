# CryptoKey.type API 兼容性数据

## 基本信息

- **API名称**: `CryptoKey.type`
- **MDN文档**: [CryptoKey.type](https://developer.mozilla.org/docs/Web/API/CryptoKey/type)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#dom-cryptokey-type)
- **标签**: `web-features:web-cryptography`

## 使用示例

### 基本用法

```javascript
// CryptoKey.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('CryptoKey.type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.12 |  |
| Edge | 12 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 37

### Deno

- **支持版本**: 1.12

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 34

### Node.js

- **支持版本**: 15.0.0

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查CryptoKey.type是否支持
function isCryptoKeyTypeSupported() {
    return 'type' in cryptokey && typeof cryptokey.type === 'function';
}

if (isCryptoKeyTypeSupported()) {
    console.log('CryptoKey.type 支持');
    // 使用CryptoKey.type
} else {
    console.log('CryptoKey.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CryptoKey.type polyfill
if (!cryptokey.type) {
    // 在这里添加polyfill实现
    console.log('加载CryptoKey.type polyfill');
}
```

