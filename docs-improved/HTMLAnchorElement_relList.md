# HTMLAnchorElement.relList API 兼容性数据

## 基本信息

- **API名称**: `HTMLAnchorElement.relList`
- **MDN文档**: [HTMLAnchorElement.relList](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/relList)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/text-level-semantics.html#dom-a-rellist)
- **标签**: `web-features:a`

## 使用示例

### 基本用法

```javascript
// HTMLAnchorElement.relList 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAnchorElement.relList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 30 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 65

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 30

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAnchorElement.relList是否支持
function isHTMLAnchorElementRelListSupported() {
    return 'relList' in htmlanchorelement && typeof htmlanchorelement.relList === 'function';
}

if (isHTMLAnchorElementRelListSupported()) {
    console.log('HTMLAnchorElement.relList 支持');
    // 使用HTMLAnchorElement.relList
} else {
    console.log('HTMLAnchorElement.relList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAnchorElement.relList polyfill
if (!htmlanchorelement.relList) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAnchorElement.relList polyfill');
}
```

