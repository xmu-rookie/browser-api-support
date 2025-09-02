# CSSPropertyRule API 兼容性数据

## 基本信息

- **API名称**: `CSSPropertyRule`
- **MDN文档**: [CSSPropertyRule](https://developer.mozilla.org/docs/Web/API/CSSPropertyRule)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-properties-values-api/#the-css-property-rule-interface)
- **标签**: `web-features:registered-custom-properties`

## 使用示例

### 基本用法

```javascript
// CSSPropertyRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPropertyRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 85 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 128 |  |
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

- **支持版本**: 85

### Firefox

- **支持版本**: 128

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSPropertyRule是否支持
function isCSSPropertyRuleSupported() {
    return 'CSSPropertyRule' in window || typeof CSSPropertyRule !== 'undefined';
}

if (isCSSPropertyRuleSupported()) {
    console.log('CSSPropertyRule 支持');
    // 使用CSSPropertyRule
} else {
    console.log('CSSPropertyRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPropertyRule polyfill
if (!window.CSSPropertyRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSPropertyRule polyfill');
}
```

