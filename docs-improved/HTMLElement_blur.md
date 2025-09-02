# HTMLElement.blur API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.blur`
- **MDN文档**: [HTMLElement.blur](https://developer.mozilla.org/docs/Web/API/HTMLElement/blur)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-blur-dev)
- **标签**: `web-features:focus-events`

## 使用示例

### 基本用法

```javascript
// HTMLElement.blur 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.blur API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 5.5

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.blur是否支持
function isHTMLElementBlurSupported() {
    return 'blur' in htmlelement && typeof htmlelement.blur === 'function';
}

if (isHTMLElementBlurSupported()) {
    console.log('HTMLElement.blur 支持');
    // 使用HTMLElement.blur
} else {
    console.log('HTMLElement.blur 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.blur polyfill
if (!htmlelement.blur) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.blur polyfill');
}
```

