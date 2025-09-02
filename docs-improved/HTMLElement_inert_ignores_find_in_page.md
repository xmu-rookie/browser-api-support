# HTMLElement.inert.ignores_find_in_page API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.inert.ignores_find_in_page`
- **MDN文档**: [HTMLElement.inert.ignores_find_in_page](https://developer.mozilla.org/docs/Web/API/HTMLElement/inert)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-inert)
- **标签**: `web-features:inert`
- **描述**: Element is ignored for the purposes of find-in-page.

## 使用示例

### 基本用法

```javascript
// HTMLElement.inert.ignores_find_in_page 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.inert.ignores_find_in_page API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 120 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 124

### Firefox

- **支持版本**: 120

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.inert.ignores_find_in_page是否支持
function isHTMLElementInertSupported() {
    return 'inert' in htmlelement && typeof htmlelement.inert === 'function';
}

if (isHTMLElementInertSupported()) {
    console.log('HTMLElement.inert.ignores_find_in_page 支持');
    // 使用HTMLElement.inert.ignores_find_in_page
} else {
    console.log('HTMLElement.inert.ignores_find_in_page 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.inert.ignores_find_in_page polyfill
if (!htmlelement.inert) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.inert.ignores_find_in_page polyfill');
}
```

