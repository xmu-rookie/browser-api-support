# DOMTokenList.forEach API 兼容性数据

## 基本信息

- **API名称**: `DOMTokenList.forEach`
- **MDN文档**: [DOMTokenList.forEach](https://developer.mozilla.org/docs/Web/API/DOMTokenList/forEach)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// DOMTokenList.forEach 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMTokenList.forEach API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 16 |  |
| Firefox | 50 |  |
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

- **支持版本**: 42

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMTokenList.forEach是否支持
function isDOMTokenListForEachSupported() {
    return 'forEach' in domtokenlist && typeof domtokenlist.forEach === 'function';
}

if (isDOMTokenListForEachSupported()) {
    console.log('DOMTokenList.forEach 支持');
    // 使用DOMTokenList.forEach
} else {
    console.log('DOMTokenList.forEach 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMTokenList.forEach polyfill
if (!domtokenlist.forEach) {
    // 在这里添加polyfill实现
    console.log('加载DOMTokenList.forEach polyfill');
}
```

