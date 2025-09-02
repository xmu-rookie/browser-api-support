# DOMTokenList.supports API 兼容性数据

## 基本信息

- **API名称**: `DOMTokenList.supports`
- **MDN文档**: [DOMTokenList.supports](https://developer.mozilla.org/docs/Web/API/DOMTokenList/supports)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-domtokenlist-supports①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// DOMTokenList.supports 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMTokenList.supports API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 49 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 49

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMTokenList.supports是否支持
function isDOMTokenListSupportsSupported() {
    return 'supports' in domtokenlist && typeof domtokenlist.supports === 'function';
}

if (isDOMTokenListSupportsSupported()) {
    console.log('DOMTokenList.supports 支持');
    // 使用DOMTokenList.supports
} else {
    console.log('DOMTokenList.supports 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMTokenList.supports polyfill
if (!domtokenlist.supports) {
    // 在这里添加polyfill实现
    console.log('加载DOMTokenList.supports polyfill');
}
```

