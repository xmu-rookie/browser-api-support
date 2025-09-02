# CSSPseudoElement.type API 兼容性数据

## 基本信息

- **API名称**: `CSSPseudoElement.type`
- **MDN文档**: [CSSPseudoElement.type](https://developer.mozilla.org/docs/Web/API/CSSPseudoElement/type)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-pseudo/#dom-csspseudoelement-type)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSPseudoElement.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPseudoElement.type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 75 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 75
- **需要标志**: 
  - dom.css_pseudo_element.enabled: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSPseudoElement.type是否支持
function isCSSPseudoElementTypeSupported() {
    return 'type' in csspseudoelement && typeof csspseudoelement.type === 'function';
}

if (isCSSPseudoElementTypeSupported()) {
    console.log('CSSPseudoElement.type 支持');
    // 使用CSSPseudoElement.type
} else {
    console.log('CSSPseudoElement.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPseudoElement.type polyfill
if (!csspseudoelement.type) {
    // 在这里添加polyfill实现
    console.log('加载CSSPseudoElement.type polyfill');
}
```

