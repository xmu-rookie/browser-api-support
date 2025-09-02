# HTMLAreaElement.toString API 兼容性数据

## 基本信息

- **API名称**: `HTMLAreaElement.toString`
- **MDN文档**: [HTMLAreaElement.toString](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/toString)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-href-dev)
- **标签**: `web-features:image-maps`

## 使用示例

### 基本用法

```javascript
// HTMLAreaElement.toString 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAreaElement.toString API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 32 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
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

- **支持版本**: 32

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 22

### Internet Explorer

- **支持版本**: 5.5

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAreaElement.toString是否支持
function isHTMLAreaElementToStringSupported() {
    return 'toString' in htmlareaelement && typeof htmlareaelement.toString === 'function';
}

if (isHTMLAreaElementToStringSupported()) {
    console.log('HTMLAreaElement.toString 支持');
    // 使用HTMLAreaElement.toString
} else {
    console.log('HTMLAreaElement.toString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAreaElement.toString polyfill
if (!htmlareaelement.toString) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAreaElement.toString polyfill');
}
```

