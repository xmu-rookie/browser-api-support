# HTMLButtonElement.formTarget API 兼容性数据

## 基本信息

- **API名称**: `HTMLButtonElement.formTarget`
- **MDN文档**: [HTMLButtonElement.formTarget](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/formTarget)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fs-formtarget)
- **标签**: `web-features:button`

## 使用示例

### 基本用法

```javascript
// HTMLButtonElement.formTarget 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLButtonElement.formTarget API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 9

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

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLButtonElement.formTarget是否支持
function isHTMLButtonElementFormTargetSupported() {
    return 'formTarget' in htmlbuttonelement && typeof htmlbuttonelement.formTarget === 'function';
}

if (isHTMLButtonElementFormTargetSupported()) {
    console.log('HTMLButtonElement.formTarget 支持');
    // 使用HTMLButtonElement.formTarget
} else {
    console.log('HTMLButtonElement.formTarget 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLButtonElement.formTarget polyfill
if (!htmlbuttonelement.formTarget) {
    // 在这里添加polyfill实现
    console.log('加载HTMLButtonElement.formTarget polyfill');
}
```

