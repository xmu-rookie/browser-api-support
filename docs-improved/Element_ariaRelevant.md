# Element.ariaRelevant API 兼容性数据

## 基本信息

- **API名称**: `Element.ariaRelevant`
- **MDN文档**: [Element.ariaRelevant](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)
- **标签**: `web-features:aria-attribute-reflection`

## 使用示例

### 基本用法

```javascript
// Element.ariaRelevant 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.ariaRelevant API');
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
// 检查Element.ariaRelevant是否支持
function isElementAriaRelevantSupported() {
    return 'ariaRelevant' in element && typeof element.ariaRelevant === 'function';
}

if (isElementAriaRelevantSupported()) {
    console.log('Element.ariaRelevant 支持');
    // 使用Element.ariaRelevant
} else {
    console.log('Element.ariaRelevant 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.ariaRelevant polyfill
if (!element.ariaRelevant) {
    // 在这里添加polyfill实现
    console.log('加载Element.ariaRelevant polyfill');
}
```

