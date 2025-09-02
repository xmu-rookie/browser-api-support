# HTMLInputElement.minLength API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.minLength`
- **MDN文档**: [HTMLInputElement.minLength](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/minLength)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/input.html#dom-input-minlength)
- **标签**: `web-features:input`

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.minLength 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.minLength API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 51 |  |
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

- **支持版本**: 40

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 51

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.minLength是否支持
function isHTMLInputElementMinLengthSupported() {
    return 'minLength' in htmlinputelement && typeof htmlinputelement.minLength === 'function';
}

if (isHTMLInputElementMinLengthSupported()) {
    console.log('HTMLInputElement.minLength 支持');
    // 使用HTMLInputElement.minLength
} else {
    console.log('HTMLInputElement.minLength 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.minLength polyfill
if (!htmlinputelement.minLength) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.minLength polyfill');
}
```

