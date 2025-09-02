# Element.animate API 兼容性数据

## 基本信息

- **API名称**: `Element.animate`
- **MDN文档**: [Element.animate](https://developer.mozilla.org/docs/Web/API/Element/animate)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-animatable-animate)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// Element.animate 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.animate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 36 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 48 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 36

### Firefox

- **支持版本**: 48

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.animate是否支持
function isElementAnimateSupported() {
    return 'animate' in element && typeof element.animate === 'function';
}

if (isElementAnimateSupported()) {
    console.log('Element.animate 支持');
    // 使用Element.animate
} else {
    console.log('Element.animate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.animate polyfill
if (!element.animate) {
    // 在这里添加polyfill实现
    console.log('加载Element.animate polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **implicit_tofrom**: Implicit to/from keyframes are supported
- **options_composite_parameter**: `options.composite` parameter
- **options_id_parameter**: `options.id` parameter
- **options_iterationComposite_parameter**: `options.iterationComposite` parameter
- **options_pseudoElement_parameter**: `options.pseudoElement` parameter
- **options_rangeEnd_parameter**: `options.rangeEnd` parameter
- **options_rangeStart_parameter**: `options.rangeStart` parameter
- **options_timeline_parameter**: `options.timeline` parameter

