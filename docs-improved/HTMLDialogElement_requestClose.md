# HTMLDialogElement.requestClose API 兼容性数据

## 基本信息

- **API名称**: `HTMLDialogElement.requestClose`
- **MDN文档**: [HTMLDialogElement.requestClose](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/requestClose)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interactive-elements.html#dom-dialog-requestclose)
- **标签**: `web-features:requestclose`

## 使用示例

### 基本用法

```javascript
// HTMLDialogElement.requestClose 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLDialogElement.requestClose API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 134 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 139 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 134

### Firefox

- **支持版本**: 139

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLDialogElement.requestClose是否支持
function isHTMLDialogElementRequestCloseSupported() {
    return 'requestClose' in htmldialogelement && typeof htmldialogelement.requestClose === 'function';
}

if (isHTMLDialogElementRequestCloseSupported()) {
    console.log('HTMLDialogElement.requestClose 支持');
    // 使用HTMLDialogElement.requestClose
} else {
    console.log('HTMLDialogElement.requestClose 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLDialogElement.requestClose polyfill
if (!htmldialogelement.requestClose) {
    // 在这里添加polyfill实现
    console.log('加载HTMLDialogElement.requestClose polyfill');
}
```

