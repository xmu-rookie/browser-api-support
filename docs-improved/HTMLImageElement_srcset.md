# HTMLImageElement.srcset API 兼容性数据

## 基本信息

- **API名称**: `HTMLImageElement.srcset`
- **MDN文档**: [HTMLImageElement.srcset](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/srcset)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-srcset)
- **标签**: `web-features:srcset`

## 使用示例

### 基本用法

```javascript
// HTMLImageElement.srcset 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLImageElement.srcset API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 34 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 38 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 34

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 38

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLImageElement.srcset是否支持
function isHTMLImageElementSrcsetSupported() {
    return 'srcset' in htmlimageelement && typeof htmlimageelement.srcset === 'function';
}

if (isHTMLImageElementSrcsetSupported()) {
    console.log('HTMLImageElement.srcset 支持');
    // 使用HTMLImageElement.srcset
} else {
    console.log('HTMLImageElement.srcset 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLImageElement.srcset polyfill
if (!htmlimageelement.srcset) {
    // 在这里添加polyfill实现
    console.log('加载HTMLImageElement.srcset polyfill');
}
```

