# DOMTokenList.add API 兼容性数据

## 基本信息

- **API名称**: `DOMTokenList.add`
- **MDN文档**: [DOMTokenList.add](https://developer.mozilla.org/docs/Web/API/DOMTokenList/add)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-domtokenlist-add①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// DOMTokenList.add 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMTokenList.add API');
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
// 检查DOMTokenList.add是否支持
function isDOMTokenListAddSupported() {
    return 'add' in domtokenlist && typeof domtokenlist.add === 'function';
}

if (isDOMTokenListAddSupported()) {
    console.log('DOMTokenList.add 支持');
    // 使用DOMTokenList.add
} else {
    console.log('DOMTokenList.add 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMTokenList.add polyfill
if (!domtokenlist.add) {
    // 在这里添加polyfill实现
    console.log('加载DOMTokenList.add polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **multiple_parameters**: Multiple parameters for `add()`

