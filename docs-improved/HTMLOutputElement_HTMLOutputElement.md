# HTMLOutputElement.HTMLOutputElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLOutputElement.HTMLOutputElement`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#htmloutputelement)
- **标签**: `web-features:output`
- **描述**: `HTMLOutputElement()` constructor

## 使用示例

### 基本用法

```javascript
// HTMLOutputElement.HTMLOutputElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLOutputElement.HTMLOutputElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLOutputElement.HTMLOutputElement是否支持
function isHTMLOutputElementHTMLOutputElementSupported() {
    return 'HTMLOutputElement' in htmloutputelement && typeof htmloutputelement.HTMLOutputElement === 'function';
}

if (isHTMLOutputElementHTMLOutputElementSupported()) {
    console.log('HTMLOutputElement.HTMLOutputElement 支持');
    // 使用HTMLOutputElement.HTMLOutputElement
} else {
    console.log('HTMLOutputElement.HTMLOutputElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLOutputElement.HTMLOutputElement polyfill
if (!htmloutputelement.HTMLOutputElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLOutputElement.HTMLOutputElement polyfill');
}
```

