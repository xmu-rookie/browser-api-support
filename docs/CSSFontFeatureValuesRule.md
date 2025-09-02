# CSSFontFeatureValuesRule API 兼容性数据

## 基本信息

- **API名称**: `CSSFontFeatureValuesRule`
- **MDN文档**: [CSSFontFeatureValuesRule](https://developer.mozilla.org/docs/Web/API/CSSFontFeatureValuesRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-fonts/#cssfontfeaturevaluesrule)
- **标签**: `web-features:font-variant-alternates`

## 使用示例

### 基本用法

```javascript
// CSSFontFeatureValuesRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSFontFeatureValuesRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Firefox

- **支持版本**: 34

### Safari

- **支持版本**: 16.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSFontFeatureValuesRule是否支持
function isCSSFontFeatureValuesRuleSupported() {
    return 'CSSFontFeatureValuesRule' in window || typeof CSSFontFeatureValuesRule !== 'undefined';
}

if (isCSSFontFeatureValuesRuleSupported()) {
    console.log('CSSFontFeatureValuesRule 支持');
    // 使用CSSFontFeatureValuesRule
} else {
    console.log('CSSFontFeatureValuesRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSFontFeatureValuesRule polyfill
if (!window.CSSFontFeatureValuesRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSFontFeatureValuesRule polyfill');
}
```

