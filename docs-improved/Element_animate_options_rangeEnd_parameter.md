# Element.animate.options_rangeEnd_parameter API 兼容性数据

## 基本信息

- **API名称**: `Element.animate.options_rangeEnd_parameter`
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-2/#dom-keyframeanimationoptions-rangeend)
- **标签**: `web-features:web-animations`
- **描述**: `options.rangeEnd` parameter

## 使用示例

### 基本用法

```javascript
// Element.animate.options_rangeEnd_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.animate.options_rangeEnd_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 115 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 115

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.animate.options_rangeEnd_parameter是否支持
function isElementAnimateSupported() {
    return 'animate' in element && typeof element.animate === 'function';
}

if (isElementAnimateSupported()) {
    console.log('Element.animate.options_rangeEnd_parameter 支持');
    // 使用Element.animate.options_rangeEnd_parameter
} else {
    console.log('Element.animate.options_rangeEnd_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.animate.options_rangeEnd_parameter polyfill
if (!element.animate) {
    // 在这里添加polyfill实现
    console.log('加载Element.animate.options_rangeEnd_parameter polyfill');
}
```

