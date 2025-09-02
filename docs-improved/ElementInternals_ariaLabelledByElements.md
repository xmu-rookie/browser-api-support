# ElementInternals.ariaLabelledByElements API 兼容性数据

## 基本信息

- **API名称**: `ElementInternals.ariaLabelledByElements`
- **MDN文档**: [ElementInternals.ariaLabelledByElements](https://developer.mozilla.org/docs/Web/API/ElementInternals/ariaLabelledByElements)
- **规范文档**: [查看规范](https://w3c.github.io/aria/#dom-ariamixin-arialabelledbyelements)
- **标签**: `web-features:aria-attribute-reflection`

## 使用示例

### 基本用法

```javascript
// ElementInternals.ariaLabelledByElements 使用示例
// 请查阅MDN文档了解具体用法
console.log('ElementInternals.ariaLabelledByElements API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 135 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 136 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 135

### Firefox

- **支持版本**: 136

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ElementInternals.ariaLabelledByElements是否支持
function isElementInternalsAriaLabelledByElementsSupported() {
    return 'ariaLabelledByElements' in elementinternals && typeof elementinternals.ariaLabelledByElements === 'function';
}

if (isElementInternalsAriaLabelledByElementsSupported()) {
    console.log('ElementInternals.ariaLabelledByElements 支持');
    // 使用ElementInternals.ariaLabelledByElements
} else {
    console.log('ElementInternals.ariaLabelledByElements 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ElementInternals.ariaLabelledByElements polyfill
if (!elementinternals.ariaLabelledByElements) {
    // 在这里添加polyfill实现
    console.log('加载ElementInternals.ariaLabelledByElements polyfill');
}
```

