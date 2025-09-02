# HTMLButtonElement.willValidate API 兼容性数据

## 基本信息

- **API名称**: `HTMLButtonElement.willValidate`
- **MDN文档**: [HTMLButtonElement.willValidate](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/willValidate)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-cva-willvalidate-dev)
- **标签**: `web-features:constraint-validation`

## 使用示例

### 基本用法

```javascript
// HTMLButtonElement.willValidate 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLButtonElement.willValidate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLButtonElement.willValidate是否支持
function isHTMLButtonElementWillValidateSupported() {
    return 'willValidate' in htmlbuttonelement && typeof htmlbuttonelement.willValidate === 'function';
}

if (isHTMLButtonElementWillValidateSupported()) {
    console.log('HTMLButtonElement.willValidate 支持');
    // 使用HTMLButtonElement.willValidate
} else {
    console.log('HTMLButtonElement.willValidate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLButtonElement.willValidate polyfill
if (!htmlbuttonelement.willValidate) {
    // 在这里添加polyfill实现
    console.log('加载HTMLButtonElement.willValidate polyfill');
}
```

