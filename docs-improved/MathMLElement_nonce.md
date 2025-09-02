# MathMLElement.nonce API 兼容性数据

## 基本信息

- **API名称**: `MathMLElement.nonce`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#dom-noncedelement-nonce)
- **标签**: `web-features:mathml`

## 使用示例

### 基本用法

```javascript
// MathMLElement.nonce 使用示例
// 请查阅MDN文档了解具体用法
console.log('MathMLElement.nonce API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 109 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 109

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查MathMLElement.nonce是否支持
function isMathMLElementNonceSupported() {
    return 'nonce' in mathmlelement && typeof mathmlelement.nonce === 'function';
}

if (isMathMLElementNonceSupported()) {
    console.log('MathMLElement.nonce 支持');
    // 使用MathMLElement.nonce
} else {
    console.log('MathMLElement.nonce 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MathMLElement.nonce polyfill
if (!mathmlelement.nonce) {
    // 在这里添加polyfill实现
    console.log('加载MathMLElement.nonce polyfill');
}
```

