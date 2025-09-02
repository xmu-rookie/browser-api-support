# ElementInternals.ariaHasPopup API 兼容性数据

## 基本信息

- **API名称**: `ElementInternals.ariaHasPopup`
- **MDN文档**: [ElementInternals.ariaHasPopup](https://developer.mozilla.org/docs/Web/API/ElementInternals/ariaHasPopup)
- **规范文档**: [查看规范](https://w3c.github.io/aria/#dom-ariamixin-ariahaspopup)
- **标签**: `web-features:aria-attribute-reflection`

## 使用示例

### 基本用法

```javascript
// ElementInternals.ariaHasPopup 使用示例
// 请查阅MDN文档了解具体用法
console.log('ElementInternals.ariaHasPopup API');
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
| Safari | 16.4 |  |
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

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ElementInternals.ariaHasPopup是否支持
function isElementInternalsAriaHasPopupSupported() {
    return 'ariaHasPopup' in elementinternals && typeof elementinternals.ariaHasPopup === 'function';
}

if (isElementInternalsAriaHasPopupSupported()) {
    console.log('ElementInternals.ariaHasPopup 支持');
    // 使用ElementInternals.ariaHasPopup
} else {
    console.log('ElementInternals.ariaHasPopup 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ElementInternals.ariaHasPopup polyfill
if (!elementinternals.ariaHasPopup) {
    // 在这里添加polyfill实现
    console.log('加载ElementInternals.ariaHasPopup polyfill');
}
```

