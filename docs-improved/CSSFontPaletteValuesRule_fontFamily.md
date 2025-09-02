# CSSFontPaletteValuesRule.fontFamily API 兼容性数据

## 基本信息

- **API名称**: `CSSFontPaletteValuesRule.fontFamily`
- **MDN文档**: [CSSFontPaletteValuesRule.fontFamily](https://developer.mozilla.org/docs/Web/API/CSSFontPaletteValuesRule/fontFamily)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-fonts/#dom-cssfontpalettevaluesrule-fontfamily)
- **标签**: `web-features:font-palette`

## 使用示例

### 基本用法

```javascript
// CSSFontPaletteValuesRule.fontFamily 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSFontPaletteValuesRule.fontFamily API');
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
// 检查CSSFontPaletteValuesRule.fontFamily是否支持
function isCSSFontPaletteValuesRuleFontFamilySupported() {
    return 'fontFamily' in cssfontpalettevaluesrule && typeof cssfontpalettevaluesrule.fontFamily === 'function';
}

if (isCSSFontPaletteValuesRuleFontFamilySupported()) {
    console.log('CSSFontPaletteValuesRule.fontFamily 支持');
    // 使用CSSFontPaletteValuesRule.fontFamily
} else {
    console.log('CSSFontPaletteValuesRule.fontFamily 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSFontPaletteValuesRule.fontFamily polyfill
if (!cssfontpalettevaluesrule.fontFamily) {
    // 在这里添加polyfill实现
    console.log('加载CSSFontPaletteValuesRule.fontFamily polyfill');
}
```

