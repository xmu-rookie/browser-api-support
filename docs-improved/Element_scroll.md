# Element.scroll API 兼容性数据

## 基本信息

- **API名称**: `Element.scroll`
- **MDN文档**: [Element.scroll](https://developer.mozilla.org/docs/Web/API/Element/scroll)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-element-scroll)
- **标签**: `web-features:scroll-elements`

## 使用示例

### 基本用法

```javascript
// Element.scroll 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.scroll API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 36 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 36

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.scroll是否支持
function isElementScrollSupported() {
    return 'scroll' in element && typeof element.scroll === 'function';
}

if (isElementScrollSupported()) {
    console.log('Element.scroll 支持');
    // 使用Element.scroll
} else {
    console.log('Element.scroll 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.scroll polyfill
if (!element.scroll) {
    // 在这里添加polyfill实现
    console.log('加载Element.scroll polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_behavior_parameter**: `options.behavior` parameter
- **options_left_parameter**: `options.left` parameter
- **options_top_parameter**: `options.top` parameter

