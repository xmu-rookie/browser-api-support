# HTMLImageElement.decode API 兼容性数据

## 基本信息

- **API名称**: `HTMLImageElement.decode`
- **MDN文档**: [HTMLImageElement.decode](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/decode)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-decode-dev)
- **标签**: `web-features:img`
- **描述**: `decode()`

## 使用示例

### 基本用法

```javascript
// HTMLImageElement.decode 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLImageElement.decode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 68 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 64

### Firefox

- **支持版本**: 68

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLImageElement.decode是否支持
function isHTMLImageElementDecodeSupported() {
    return 'decode' in htmlimageelement && typeof htmlimageelement.decode === 'function';
}

if (isHTMLImageElementDecodeSupported()) {
    console.log('HTMLImageElement.decode 支持');
    // 使用HTMLImageElement.decode
} else {
    console.log('HTMLImageElement.decode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLImageElement.decode polyfill
if (!htmlimageelement.decode) {
    // 在这里添加polyfill实现
    console.log('加载HTMLImageElement.decode polyfill');
}
```

