# DOMTokenList.length API 兼容性数据

## 基本信息

- **API名称**: `DOMTokenList.length`
- **MDN文档**: [DOMTokenList.length](https://developer.mozilla.org/docs/Web/API/DOMTokenList/length)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-domtokenlist-length①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// DOMTokenList.length 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMTokenList.length API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 8

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.6

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMTokenList.length是否支持
function isDOMTokenListLengthSupported() {
    return 'length' in domtokenlist && typeof domtokenlist.length === 'function';
}

if (isDOMTokenListLengthSupported()) {
    console.log('DOMTokenList.length 支持');
    // 使用DOMTokenList.length
} else {
    console.log('DOMTokenList.length 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMTokenList.length polyfill
if (!domtokenlist.length) {
    // 在这里添加polyfill实现
    console.log('加载DOMTokenList.length polyfill');
}
```

