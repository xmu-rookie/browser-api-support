# SubtleCrypto API 兼容性数据

## 基本信息

- **API名称**: `SubtleCrypto`
- **MDN文档**: [SubtleCrypto](https://developer.mozilla.org/docs/Web/API/SubtleCrypto)
- **规范文档**: [查看规范](https://w3c.github.io/webcrypto/#subtlecrypto-interface)
- **标签**: `web-features:web-cryptography`

## 使用示例

### 基本用法

```javascript
// SubtleCrypto 使用示例
// 请查阅MDN文档了解具体用法
console.log('SubtleCrypto API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.11 |  |
| Edge | 12 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Node.js | 19.0.0 |  |
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

- **支持版本**: 37

### Deno

- **支持版本**: 1.11

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 34

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

- **支持版本**: 11
- **支持版本**: 7
- **移除版本**: 11.1
- **前缀**: WebKit

## 兼容性检查代码

### 特性检测

```javascript
// 检查SubtleCrypto是否支持
function isSubtleCryptoSupported() {
    return 'SubtleCrypto' in window || typeof SubtleCrypto !== 'undefined';
}

if (isSubtleCryptoSupported()) {
    console.log('SubtleCrypto 支持');
    // 使用SubtleCrypto
} else {
    console.log('SubtleCrypto 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SubtleCrypto polyfill
if (!window.SubtleCrypto) {
    // 在这里添加polyfill实现
    console.log('加载SubtleCrypto polyfill');
}
```

