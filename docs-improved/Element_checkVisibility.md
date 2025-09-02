# Element.checkVisibility API 兼容性数据

## 基本信息

- **API名称**: `Element.checkVisibility`
- **MDN文档**: [Element.checkVisibility](https://developer.mozilla.org/docs/Web/API/Element/checkVisibility)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view-1/#dom-element-checkvisibility)
- **标签**: `web-features:check-visibility`

## 使用示例

### 基本用法

```javascript
// Element.checkVisibility 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.checkVisibility API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 105 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 106 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 105

### Firefox

- **支持版本**: 106

### Safari

- **支持版本**: 17.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.checkVisibility是否支持
function isElementCheckVisibilitySupported() {
    return 'checkVisibility' in element && typeof element.checkVisibility === 'function';
}

if (isElementCheckVisibilitySupported()) {
    console.log('Element.checkVisibility 支持');
    // 使用Element.checkVisibility
} else {
    console.log('Element.checkVisibility 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.checkVisibility polyfill
if (!element.checkVisibility) {
    // 在这里添加polyfill实现
    console.log('加载Element.checkVisibility polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_checkOpacity_parameter**: `options.checkOpacity` parameter
- **options_checkVisibilityCSS_parameter**: `options.checkVisibilityCSS` parameter
- **options_contentVisibilityAuto_parameter**: `options.contentVisibilityAuto` parameter
- **options_opacityProperty_parameter**: `options.opacityProperty` parameter
- **options_visibilityProperty_parameter**: `options.visibilityProperty` parameter

