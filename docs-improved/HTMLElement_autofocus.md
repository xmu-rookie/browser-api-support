# HTMLElement.autofocus API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.autofocus`
- **MDN文档**: [HTMLElement.autofocus](https://developer.mozilla.org/docs/Web/API/HTMLElement/autofocus)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-fe-autofocus)
- **标签**: `web-features:autofocus`

## 使用示例

### 基本用法

```javascript
// HTMLElement.autofocus 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.autofocus API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 79 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 110 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | Supported for `HTMLButtonElement`, `HTMLInputElement`, `HTMLSelectElement`, and `HTMLTextAreaElement... |
| Oculus | 同主版本 |  |
| Opera | 66 |  |
| Opera Android | 57 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 79
- **支持版本**: 1
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Supported for `HTMLButtonElement`, `HTMLInputElement`, `HTMLSelectElement`, and `HTMLTextAreaElement`.

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Supported for `HTMLButtonElement`, `HTMLInputElement`, `HTMLSelectElement`, and `HTMLTextAreaElement`.

### Firefox

- **支持版本**: 110
- **支持版本**: 1
- **移除版本**: 110
- **部分实现**: 是
- **注意事项**:
  - Supported for `HTMLButtonElement`, `HTMLInputElement`, `HTMLSelectElement`, and `HTMLTextAreaElement`.

### Internet Explorer

- **支持版本**: 10
- **部分实现**: 是
- **注意事项**:
  - Supported for `HTMLButtonElement`, `HTMLInputElement`, `HTMLSelectElement`, and `HTMLTextAreaElement`.

### Opera

- **支持版本**: 66
- **支持版本**: ≤12.1
- **移除版本**: 66
- **部分实现**: 是
- **注意事项**:
  - Supported for `HTMLButtonElement`, `HTMLInputElement`, `HTMLSelectElement`, and `HTMLTextAreaElement`.

### Opera Android

- **支持版本**: 57
- **支持版本**: ≤12.1
- **移除版本**: 57
- **部分实现**: 是
- **注意事项**:
  - Supported for `HTMLButtonElement`, `HTMLInputElement`, `HTMLSelectElement`, and `HTMLTextAreaElement`.

### Safari

- **支持版本**: 15.4
- **支持版本**: 4
- **移除版本**: 15.4
- **部分实现**: 是
- **注意事项**:
  - Supported for `HTMLButtonElement`, `HTMLInputElement`, `HTMLSelectElement`, and `HTMLTextAreaElement`.

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.autofocus是否支持
function isHTMLElementAutofocusSupported() {
    return 'autofocus' in htmlelement && typeof htmlelement.autofocus === 'function';
}

if (isHTMLElementAutofocusSupported()) {
    console.log('HTMLElement.autofocus 支持');
    // 使用HTMLElement.autofocus
} else {
    console.log('HTMLElement.autofocus 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.autofocus polyfill
if (!htmlelement.autofocus) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.autofocus polyfill');
}
```

