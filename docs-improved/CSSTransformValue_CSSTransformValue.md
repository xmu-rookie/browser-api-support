# CSSTransformValue.CSSTransformValue API 兼容性数据

## 基本信息

- **API名称**: `CSSTransformValue.CSSTransformValue`
- **MDN文档**: [CSSTransformValue.CSSTransformValue](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/CSSTransformValue)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-csstransformvalue-csstransformvalue)
- **标签**: `web-features:css-typed-om`
- **描述**: `CSSTransformValue()` constructor

## 使用示例

### 基本用法

```javascript
// CSSTransformValue.CSSTransformValue 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSTransformValue.CSSTransformValue API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSTransformValue.CSSTransformValue是否支持
function isCSSTransformValueCSSTransformValueSupported() {
    return 'CSSTransformValue' in csstransformvalue && typeof csstransformvalue.CSSTransformValue === 'function';
}

if (isCSSTransformValueCSSTransformValueSupported()) {
    console.log('CSSTransformValue.CSSTransformValue 支持');
    // 使用CSSTransformValue.CSSTransformValue
} else {
    console.log('CSSTransformValue.CSSTransformValue 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSTransformValue.CSSTransformValue polyfill
if (!csstransformvalue.CSSTransformValue) {
    // 在这里添加polyfill实现
    console.log('加载CSSTransformValue.CSSTransformValue polyfill');
}
```

