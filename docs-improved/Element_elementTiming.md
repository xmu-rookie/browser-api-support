# Element.elementTiming API 兼容性数据

## 基本信息

- **API名称**: `Element.elementTiming`
- **MDN文档**: [Element.elementTiming](https://developer.mozilla.org/docs/Web/API/Element/elementTiming)
- **规范文档**: [查看规范](https://w3c.github.io/element-timing/#dom-element-elementtiming)
- **标签**: `web-features:element-timing`

## 使用示例

### 基本用法

```javascript
// Element.elementTiming 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.elementTiming API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 77

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.elementTiming是否支持
function isElementElementTimingSupported() {
    return 'elementTiming' in element && typeof element.elementTiming === 'function';
}

if (isElementElementTimingSupported()) {
    console.log('Element.elementTiming 支持');
    // 使用Element.elementTiming
} else {
    console.log('Element.elementTiming 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.elementTiming polyfill
if (!element.elementTiming) {
    // 在这里添加polyfill实现
    console.log('加载Element.elementTiming polyfill');
}
```

