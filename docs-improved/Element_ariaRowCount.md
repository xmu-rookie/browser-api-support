# Element.ariaRowCount API 兼容性数据

## 基本信息

- **API名称**: `Element.ariaRowCount`
- **MDN文档**: [Element.ariaRowCount](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)
- **规范文档**: [查看规范](https://w3c.github.io/aria/#dom-ariamixin-ariarowcount)
- **标签**: `web-features:aria-attribute-reflection`

## 使用示例

### 基本用法

```javascript
// Element.ariaRowCount 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.ariaRowCount API');
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
// 检查Element.ariaRowCount是否支持
function isElementAriaRowCountSupported() {
    return 'ariaRowCount' in element && typeof element.ariaRowCount === 'function';
}

if (isElementAriaRowCountSupported()) {
    console.log('Element.ariaRowCount 支持');
    // 使用Element.ariaRowCount
} else {
    console.log('Element.ariaRowCount 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.ariaRowCount polyfill
if (!element.ariaRowCount) {
    // 在这里添加polyfill实现
    console.log('加载Element.ariaRowCount polyfill');
}
```

