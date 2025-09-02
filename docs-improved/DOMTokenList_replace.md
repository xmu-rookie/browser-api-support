# DOMTokenList.replace API 兼容性数据

## 基本信息

- **API名称**: `DOMTokenList.replace`
- **MDN文档**: [DOMTokenList.replace](https://developer.mozilla.org/docs/Web/API/DOMTokenList/replace)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-domtokenlist-replace①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// DOMTokenList.replace 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMTokenList.replace API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
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

- **支持版本**: 61

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 49

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMTokenList.replace是否支持
function isDOMTokenListReplaceSupported() {
    return 'replace' in domtokenlist && typeof domtokenlist.replace === 'function';
}

if (isDOMTokenListReplaceSupported()) {
    console.log('DOMTokenList.replace 支持');
    // 使用DOMTokenList.replace
} else {
    console.log('DOMTokenList.replace 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMTokenList.replace polyfill
if (!domtokenlist.replace) {
    // 在这里添加polyfill实现
    console.log('加载DOMTokenList.replace polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **boolean_value**: `return()`'s value is a boolean, not void as it used to be.

