# Navigator.product API 兼容性数据

## 基本信息

- **API名称**: `Navigator.product`
- **MDN文档**: [Navigator.product](https://developer.mozilla.org/docs/Web/API/Navigator/product)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-product-dev)

## 使用示例

### 基本用法

```javascript
// Navigator.product 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.product API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 11

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.product是否支持
function isNavigatorProductSupported() {
    return 'product' in navigator && typeof navigator.product === 'function';
}

if (isNavigatorProductSupported()) {
    console.log('Navigator.product 支持');
    // 使用Navigator.product
} else {
    console.log('Navigator.product 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.product polyfill
if (!navigator.product) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.product polyfill');
}
```

