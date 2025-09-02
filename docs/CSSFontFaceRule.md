# CSSFontFaceRule API 兼容性数据

## 基本信息

- **API名称**: `CSSFontFaceRule`
- **MDN文档**: [CSSFontFaceRule](https://developer.mozilla.org/docs/Web/API/CSSFontFaceRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-fonts/#om-fontface)
- **标签**: `web-features:font-face`

## 使用示例

### 基本用法

```javascript
// CSSFontFaceRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSFontFaceRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3.1 |  |
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

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSFontFaceRule是否支持
function isCSSFontFaceRuleSupported() {
    return 'CSSFontFaceRule' in window || typeof CSSFontFaceRule !== 'undefined';
}

if (isCSSFontFaceRuleSupported()) {
    console.log('CSSFontFaceRule 支持');
    // 使用CSSFontFaceRule
} else {
    console.log('CSSFontFaceRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSFontFaceRule polyfill
if (!window.CSSFontFaceRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSFontFaceRule polyfill');
}
```

