# CSSConditionRule.conditionText API 兼容性数据

## 基本信息

- **API名称**: `CSSConditionRule.conditionText`
- **MDN文档**: [CSSConditionRule.conditionText](https://developer.mozilla.org/docs/Web/API/CSSConditionRule/conditionText)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-conditional-3/#dom-cssconditionrule-conditiontext)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSConditionRule.conditionText 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSConditionRule.conditionText API');
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
// 检查CSSConditionRule.conditionText是否支持
function isCSSConditionRuleConditionTextSupported() {
    return 'conditionText' in cssconditionrule && typeof cssconditionrule.conditionText === 'function';
}

if (isCSSConditionRuleConditionTextSupported()) {
    console.log('CSSConditionRule.conditionText 支持');
    // 使用CSSConditionRule.conditionText
} else {
    console.log('CSSConditionRule.conditionText 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSConditionRule.conditionText polyfill
if (!cssconditionrule.conditionText) {
    // 在这里添加polyfill实现
    console.log('加载CSSConditionRule.conditionText polyfill');
}
```

