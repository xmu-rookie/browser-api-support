# HTMLElement.inert API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.inert`
- **MDN文档**: [HTMLElement.inert](https://developer.mozilla.org/docs/Web/API/HTMLElement/inert)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-inert)
- **标签**: `web-features:inert`

## 使用示例

### 基本用法

```javascript
// HTMLElement.inert 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.inert API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 112 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.5 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 102

### Firefox

- **支持版本**: 112

### Safari

- **支持版本**: 15.5

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.inert是否支持
function isHTMLElementInertSupported() {
    return 'inert' in htmlelement && typeof htmlelement.inert === 'function';
}

if (isHTMLElementInertSupported()) {
    console.log('HTMLElement.inert 支持');
    // 使用HTMLElement.inert
} else {
    console.log('HTMLElement.inert 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.inert polyfill
if (!htmlelement.inert) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.inert polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **ignores_find_in_page**: Element is ignored for the purposes of find-in-page.

