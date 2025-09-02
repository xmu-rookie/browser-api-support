# HTMLDialogElement.close API 兼容性数据

## 基本信息

- **API名称**: `HTMLDialogElement.close`
- **MDN文档**: [HTMLDialogElement.close](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interactive-elements.html#dom-dialog-close-dev)
- **标签**: `web-features:dialog`

## 使用示例

### 基本用法

```javascript
// HTMLDialogElement.close 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLDialogElement.close API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 98 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37

### Firefox

- **支持版本**: 98

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLDialogElement.close是否支持
function isHTMLDialogElementCloseSupported() {
    return 'close' in htmldialogelement && typeof htmldialogelement.close === 'function';
}

if (isHTMLDialogElementCloseSupported()) {
    console.log('HTMLDialogElement.close 支持');
    // 使用HTMLDialogElement.close
} else {
    console.log('HTMLDialogElement.close 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLDialogElement.close polyfill
if (!htmldialogelement.close) {
    // 在这里添加polyfill实现
    console.log('加载HTMLDialogElement.close polyfill');
}
```

