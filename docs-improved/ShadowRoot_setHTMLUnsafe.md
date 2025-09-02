# ShadowRoot.setHTMLUnsafe API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.setHTMLUnsafe`
- **MDN文档**: [ShadowRoot.setHTMLUnsafe](https://developer.mozilla.org/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-shadowroot-sethtmlunsafe)
- **标签**: `web-features:parse-html-unsafe`

## 使用示例

### 基本用法

```javascript
// ShadowRoot.setHTMLUnsafe 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.setHTMLUnsafe API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 123 |  |
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

- **支持版本**: 124

### Firefox

- **支持版本**: 123

### Safari

- **支持版本**: 26
- **支持版本**: 17.4
- **移除版本**: 26
- **部分实现**: 是
- **注意事项**:
  - If there are custom elements in a declarative shadow root in the parsed HTML, then the elements' constructors and `connectedCallback()` methods are not called ([bug 296420](https://webkit.org/b/296420)).

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.setHTMLUnsafe是否支持
function isShadowRootSetHTMLUnsafeSupported() {
    return 'setHTMLUnsafe' in shadowroot && typeof shadowroot.setHTMLUnsafe === 'function';
}

if (isShadowRootSetHTMLUnsafeSupported()) {
    console.log('ShadowRoot.setHTMLUnsafe 支持');
    // 使用ShadowRoot.setHTMLUnsafe
} else {
    console.log('ShadowRoot.setHTMLUnsafe 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.setHTMLUnsafe polyfill
if (!shadowroot.setHTMLUnsafe) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.setHTMLUnsafe polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **enforces_trusted_types**: Requires `TrustedHTML` instance when trusted types are enforced
- **options_sanitizer_parameter**: `options.sanitizer` parameter

