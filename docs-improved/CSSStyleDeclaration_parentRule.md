# CSSStyleDeclaration.parentRule API 兼容性数据

## 基本信息

- **API名称**: `CSSStyleDeclaration.parentRule`
- **MDN文档**: [CSSStyleDeclaration.parentRule](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/parentRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-parentrule)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSStyleDeclaration.parentRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSStyleDeclaration.parentRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSStyleDeclaration.parentRule是否支持
function isCSSStyleDeclarationParentRuleSupported() {
    return 'parentRule' in cssstyledeclaration && typeof cssstyledeclaration.parentRule === 'function';
}

if (isCSSStyleDeclarationParentRuleSupported()) {
    console.log('CSSStyleDeclaration.parentRule 支持');
    // 使用CSSStyleDeclaration.parentRule
} else {
    console.log('CSSStyleDeclaration.parentRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSStyleDeclaration.parentRule polyfill
if (!cssstyledeclaration.parentRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSStyleDeclaration.parentRule polyfill');
}
```

