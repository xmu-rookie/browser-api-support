# HTMLElement.autocapitalize API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.autocapitalize`
- **MDN文档**: [HTMLElement.autocapitalize](https://developer.mozilla.org/docs/Web/API/HTMLElement/autocapitalize)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-autocapitalize-dev)
- **标签**: `web-features:autocapitalize`

## 使用示例

### 基本用法

```javascript
// HTMLElement.autocapitalize 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.autocapitalize API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 111 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 10.3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66
- **支持版本**: 43
- **移除版本**: 66
- **部分实现**: 是
- **注意事项**:
  - Supported on `HTMLInputElement` and `HTMLTextAreaElement` only.

### Firefox

- **支持版本**: 111

### Safari

- **支持版本**: 不支持

### Safari iOS

- **支持版本**: 10.3
- **支持版本**: ≤3
- **移除版本**: 10.3
- **部分实现**: 是
- **注意事项**:
  - Supported on `HTMLFormElement`, `HTMLInputElement`, and `HTMLTextAreaElement` only.

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.autocapitalize是否支持
function isHTMLElementAutocapitalizeSupported() {
    return 'autocapitalize' in htmlelement && typeof htmlelement.autocapitalize === 'function';
}

if (isHTMLElementAutocapitalizeSupported()) {
    console.log('HTMLElement.autocapitalize 支持');
    // 使用HTMLElement.autocapitalize
} else {
    console.log('HTMLElement.autocapitalize 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.autocapitalize polyfill
if (!htmlelement.autocapitalize) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.autocapitalize polyfill');
}
```

