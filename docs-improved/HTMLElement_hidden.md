# HTMLElement.hidden API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.hidden`
- **MDN文档**: [HTMLElement.hidden](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidden)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-hidden)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// HTMLElement.hidden 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.hidden API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 11.6 |  |
| Opera Android | 12 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 11

### Opera

- **支持版本**: 11.6

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.hidden是否支持
function isHTMLElementHiddenSupported() {
    return 'hidden' in htmlelement && typeof htmlelement.hidden === 'function';
}

if (isHTMLElementHiddenSupported()) {
    console.log('HTMLElement.hidden 支持');
    // 使用HTMLElement.hidden
} else {
    console.log('HTMLElement.hidden 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.hidden polyfill
if (!htmlelement.hidden) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.hidden polyfill');
}
```

