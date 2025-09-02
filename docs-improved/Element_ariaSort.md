# Element.ariaSort API 兼容性数据

## 基本信息

- **API名称**: `Element.ariaSort`
- **MDN文档**: [Element.ariaSort](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)
- **规范文档**: [查看规范](https://w3c.github.io/aria/#dom-ariamixin-ariasort)
- **标签**: `web-features:aria-attribute-reflection`

## 使用示例

### 基本用法

```javascript
// Element.ariaSort 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.ariaSort API');
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
// 检查Element.ariaSort是否支持
function isElementAriaSortSupported() {
    return 'ariaSort' in element && typeof element.ariaSort === 'function';
}

if (isElementAriaSortSupported()) {
    console.log('Element.ariaSort 支持');
    // 使用Element.ariaSort
} else {
    console.log('Element.ariaSort 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.ariaSort polyfill
if (!element.ariaSort) {
    // 在这里添加polyfill实现
    console.log('加载Element.ariaSort polyfill');
}
```

