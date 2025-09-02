# HTMLInputElement.defaultChecked API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.defaultChecked`
- **MDN文档**: [HTMLInputElement.defaultChecked](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/defaultChecked)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/input.html#dom-input-defaultchecked)
- **标签**: `web-features:input-checkbox`

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.defaultChecked 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.defaultChecked API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
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

- **支持版本**: 5.5

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.defaultChecked是否支持
function isHTMLInputElementDefaultCheckedSupported() {
    return 'defaultChecked' in htmlinputelement && typeof htmlinputelement.defaultChecked === 'function';
}

if (isHTMLInputElementDefaultCheckedSupported()) {
    console.log('HTMLInputElement.defaultChecked 支持');
    // 使用HTMLInputElement.defaultChecked
} else {
    console.log('HTMLInputElement.defaultChecked 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.defaultChecked polyfill
if (!htmlinputelement.defaultChecked) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.defaultChecked polyfill');
}
```

