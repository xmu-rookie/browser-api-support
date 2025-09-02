# SVGImageElement.decode API 兼容性数据

## 基本信息

- **API名称**: `SVGImageElement.decode`
- **MDN文档**: [SVGImageElement.decode](https://developer.mozilla.org/docs/Web/API/SVGImageElement/decode)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-decode-dev)
- **标签**: `web-features:svg`
- **描述**: `decode()`

## 使用示例

### 基本用法

```javascript
// SVGImageElement.decode 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGImageElement.decode API');
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
| Safari | 18.4 |  |
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

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGImageElement.decode是否支持
function isSVGImageElementDecodeSupported() {
    return 'decode' in svgimageelement && typeof svgimageelement.decode === 'function';
}

if (isSVGImageElementDecodeSupported()) {
    console.log('SVGImageElement.decode 支持');
    // 使用SVGImageElement.decode
} else {
    console.log('SVGImageElement.decode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGImageElement.decode polyfill
if (!svgimageelement.decode) {
    // 在这里添加polyfill实现
    console.log('加载SVGImageElement.decode polyfill');
}
```

