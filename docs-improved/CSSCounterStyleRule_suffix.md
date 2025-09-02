# CSSCounterStyleRule.suffix API 兼容性数据

## 基本信息

- **API名称**: `CSSCounterStyleRule.suffix`
- **MDN文档**: [CSSCounterStyleRule.suffix](https://developer.mozilla.org/docs/Web/API/CSSCounterStyleRule/suffix)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-counter-styles/#dom-csscounterstylerule-suffix)
- **标签**: `web-features:counter-style`

## 使用示例

### 基本用法

```javascript
// CSSCounterStyleRule.suffix 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSCounterStyleRule.suffix API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 91 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 33 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 91

### Firefox

- **支持版本**: 33

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSCounterStyleRule.suffix是否支持
function isCSSCounterStyleRuleSuffixSupported() {
    return 'suffix' in csscounterstylerule && typeof csscounterstylerule.suffix === 'function';
}

if (isCSSCounterStyleRuleSuffixSupported()) {
    console.log('CSSCounterStyleRule.suffix 支持');
    // 使用CSSCounterStyleRule.suffix
} else {
    console.log('CSSCounterStyleRule.suffix 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSCounterStyleRule.suffix polyfill
if (!csscounterstylerule.suffix) {
    // 在这里添加polyfill实现
    console.log('加载CSSCounterStyleRule.suffix polyfill');
}
```

