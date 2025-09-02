# Element.attachShadow.options_delegatesFocus_parameter API 兼容性数据

## 基本信息

- **API名称**: `Element.attachShadow.options_delegatesFocus_parameter`
- **MDN文档**: [Element.attachShadow.options_delegatesFocus_parameter](https://developer.mozilla.org/docs/Web/API/Element/attachShadow#delegatesfocus)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-shadowrootinit-delegatesfocus)
- **标签**: `web-features:shadow-dom`
- **描述**: `options.delegatesFocus` parameter

## 使用示例

### 基本用法

```javascript
// Element.attachShadow.options_delegatesFocus_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.attachShadow.options_delegatesFocus_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 94 |  |
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

- **支持版本**: 53

### Firefox

- **支持版本**: 94

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.attachShadow.options_delegatesFocus_parameter是否支持
function isElementAttachShadowSupported() {
    return 'attachShadow' in element && typeof element.attachShadow === 'function';
}

if (isElementAttachShadowSupported()) {
    console.log('Element.attachShadow.options_delegatesFocus_parameter 支持');
    // 使用Element.attachShadow.options_delegatesFocus_parameter
} else {
    console.log('Element.attachShadow.options_delegatesFocus_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.attachShadow.options_delegatesFocus_parameter polyfill
if (!element.attachShadow) {
    // 在这里添加polyfill实现
    console.log('加载Element.attachShadow.options_delegatesFocus_parameter polyfill');
}
```

