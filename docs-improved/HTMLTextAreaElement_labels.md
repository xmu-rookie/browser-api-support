# HTMLTextAreaElement.labels API 兼容性数据

## 基本信息

- **API名称**: `HTMLTextAreaElement.labels`
- **MDN文档**: [HTMLTextAreaElement.labels](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/labels)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/forms.html#dom-lfe-labels-dev)
- **标签**: `web-features:textarea`

## 使用示例

### 基本用法

```javascript
// HTMLTextAreaElement.labels 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTextAreaElement.labels API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 56 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 6

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 56

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
// 检查HTMLTextAreaElement.labels是否支持
function isHTMLTextAreaElementLabelsSupported() {
    return 'labels' in htmltextareaelement && typeof htmltextareaelement.labels === 'function';
}

if (isHTMLTextAreaElementLabelsSupported()) {
    console.log('HTMLTextAreaElement.labels 支持');
    // 使用HTMLTextAreaElement.labels
} else {
    console.log('HTMLTextAreaElement.labels 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTextAreaElement.labels polyfill
if (!htmltextareaelement.labels) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTextAreaElement.labels polyfill');
}
```

