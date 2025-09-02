# Element.ariaAutoComplete API 兼容性数据

## 基本信息

- **API名称**: `Element.ariaAutoComplete`
- **MDN文档**: [Element.ariaAutoComplete](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)
- **规范文档**: [查看规范](https://w3c.github.io/aria/#dom-ariamixin-ariaautocomplete)
- **标签**: `web-features:aria-attribute-reflection`

## 使用示例

### 基本用法

```javascript
// Element.ariaAutoComplete 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.ariaAutoComplete API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 119 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 81

### Firefox

- **支持版本**: 119

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.ariaAutoComplete是否支持
function isElementAriaAutoCompleteSupported() {
    return 'ariaAutoComplete' in element && typeof element.ariaAutoComplete === 'function';
}

if (isElementAriaAutoCompleteSupported()) {
    console.log('Element.ariaAutoComplete 支持');
    // 使用Element.ariaAutoComplete
} else {
    console.log('Element.ariaAutoComplete 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.ariaAutoComplete polyfill
if (!element.ariaAutoComplete) {
    // 在这里添加polyfill实现
    console.log('加载Element.ariaAutoComplete polyfill');
}
```

