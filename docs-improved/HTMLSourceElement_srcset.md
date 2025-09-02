# HTMLSourceElement.srcset API 兼容性数据

## 基本信息

- **API名称**: `HTMLSourceElement.srcset`
- **MDN文档**: [HTMLSourceElement.srcset](https://developer.mozilla.org/docs/Web/API/HTMLSourceElement/srcset)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content.html#dom-source-srcset)
- **标签**: `web-features:srcset`

## 使用示例

### 基本用法

```javascript
// HTMLSourceElement.srcset 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSourceElement.srcset API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 38 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 | The [`srcset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source#attr-srcset) at... |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 38

### Safari

- **支持版本**: 10.1
- **注意事项**:
  - The [`srcset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source#attr-srcset) attribute is supported since Safari 9.1.

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLSourceElement.srcset是否支持
function isHTMLSourceElementSrcsetSupported() {
    return 'srcset' in htmlsourceelement && typeof htmlsourceelement.srcset === 'function';
}

if (isHTMLSourceElementSrcsetSupported()) {
    console.log('HTMLSourceElement.srcset 支持');
    // 使用HTMLSourceElement.srcset
} else {
    console.log('HTMLSourceElement.srcset 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSourceElement.srcset polyfill
if (!htmlsourceelement.srcset) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSourceElement.srcset polyfill');
}
```

