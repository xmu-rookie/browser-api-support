# CSSFontPaletteValuesRule.name API 兼容性数据

## 基本信息

- **API名称**: `CSSFontPaletteValuesRule.name`
- **MDN文档**: [CSSFontPaletteValuesRule.name](https://developer.mozilla.org/docs/Web/API/CSSFontPaletteValuesRule/name)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-fonts/#dom-cssfontpalettevaluesrule-name)
- **标签**: `web-features:font-palette`

## 使用示例

### 基本用法

```javascript
// CSSFontPaletteValuesRule.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSFontPaletteValuesRule.name API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 101 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 107 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 101

### Firefox

- **支持版本**: 107

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSFontPaletteValuesRule.name是否支持
function isCSSFontPaletteValuesRuleNameSupported() {
    return 'name' in cssfontpalettevaluesrule && typeof cssfontpalettevaluesrule.name === 'function';
}

if (isCSSFontPaletteValuesRuleNameSupported()) {
    console.log('CSSFontPaletteValuesRule.name 支持');
    // 使用CSSFontPaletteValuesRule.name
} else {
    console.log('CSSFontPaletteValuesRule.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSFontPaletteValuesRule.name polyfill
if (!cssfontpalettevaluesrule.name) {
    // 在这里添加polyfill实现
    console.log('加载CSSFontPaletteValuesRule.name polyfill');
}
```

