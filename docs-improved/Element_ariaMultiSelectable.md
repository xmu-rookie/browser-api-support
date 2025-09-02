# Element.ariaMultiSelectable API 兼容性数据

## 基本信息

- **API名称**: `Element.ariaMultiSelectable`
- **MDN文档**: [Element.ariaMultiSelectable](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)
- **规范文档**: [查看规范](https://w3c.github.io/aria/#dom-ariamixin-ariamultiselectable)
- **标签**: `web-features:aria-attribute-reflection`

## 使用示例

### 基本用法

```javascript
// Element.ariaMultiSelectable 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.ariaMultiSelectable API');
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
// 检查Element.ariaMultiSelectable是否支持
function isElementAriaMultiSelectableSupported() {
    return 'ariaMultiSelectable' in element && typeof element.ariaMultiSelectable === 'function';
}

if (isElementAriaMultiSelectableSupported()) {
    console.log('Element.ariaMultiSelectable 支持');
    // 使用Element.ariaMultiSelectable
} else {
    console.log('Element.ariaMultiSelectable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.ariaMultiSelectable polyfill
if (!element.ariaMultiSelectable) {
    // 在这里添加polyfill实现
    console.log('加载Element.ariaMultiSelectable polyfill');
}
```

