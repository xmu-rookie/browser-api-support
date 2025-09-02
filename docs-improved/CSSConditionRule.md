# CSSConditionRule API 兼容性数据

## 基本信息

- **API名称**: `CSSConditionRule`
- **MDN文档**: [CSSConditionRule](https://developer.mozilla.org/docs/Web/API/CSSConditionRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-conditional-3/#the-cssconditionrule-interface)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSConditionRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSConditionRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 20 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 56

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 20

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSConditionRule是否支持
function isCSSConditionRuleSupported() {
    return 'CSSConditionRule' in window || typeof CSSConditionRule !== 'undefined';
}

if (isCSSConditionRuleSupported()) {
    console.log('CSSConditionRule 支持');
    // 使用CSSConditionRule
} else {
    console.log('CSSConditionRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSConditionRule polyfill
if (!window.CSSConditionRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSConditionRule polyfill');
}
```

