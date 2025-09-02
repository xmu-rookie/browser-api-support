# CSSCounterStyleRule.range API 兼容性数据

## 基本信息

- **API名称**: `CSSCounterStyleRule.range`
- **MDN文档**: [CSSCounterStyleRule.range](https://developer.mozilla.org/docs/Web/API/CSSCounterStyleRule/range)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-counter-styles/#dom-csscounterstylerule-range)
- **标签**: `web-features:counter-style`

## 使用示例

### 基本用法

```javascript
// CSSCounterStyleRule.range 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSCounterStyleRule.range API');
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
// 检查CSSCounterStyleRule.range是否支持
function isCSSCounterStyleRuleRangeSupported() {
    return 'range' in csscounterstylerule && typeof csscounterstylerule.range === 'function';
}

if (isCSSCounterStyleRuleRangeSupported()) {
    console.log('CSSCounterStyleRule.range 支持');
    // 使用CSSCounterStyleRule.range
} else {
    console.log('CSSCounterStyleRule.range 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSCounterStyleRule.range polyfill
if (!csscounterstylerule.range) {
    // 在这里添加polyfill实现
    console.log('加载CSSCounterStyleRule.range polyfill');
}
```

