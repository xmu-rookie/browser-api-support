# HTMLMarqueeElement.scrollAmount API 兼容性数据

## 基本信息

- **API名称**: `HTMLMarqueeElement.scrollAmount`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/obsolete.html#dom-marquee-scrollamount)

## 使用示例

### 基本用法

```javascript
// HTMLMarqueeElement.scrollAmount 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMarqueeElement.scrollAmount API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 10 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 2 |  |
| Oculus | 同主版本 |  |
| Opera | 7.2 |  |
| Opera Android | 10.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 10

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 65

### Internet Explorer

- **支持版本**: 2

### Opera

- **支持版本**: 7.2

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 5.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMarqueeElement.scrollAmount是否支持
function isHTMLMarqueeElementScrollAmountSupported() {
    return 'scrollAmount' in htmlmarqueeelement && typeof htmlmarqueeelement.scrollAmount === 'function';
}

if (isHTMLMarqueeElementScrollAmountSupported()) {
    console.log('HTMLMarqueeElement.scrollAmount 支持');
    // 使用HTMLMarqueeElement.scrollAmount
} else {
    console.log('HTMLMarqueeElement.scrollAmount 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMarqueeElement.scrollAmount polyfill
if (!htmlmarqueeelement.scrollAmount) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMarqueeElement.scrollAmount polyfill');
}
```

