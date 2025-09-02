# CSSMarginRule API 兼容性数据

## 基本信息

- **API名称**: `CSSMarginRule`
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#the-cssmarginrule-interface)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSMarginRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSMarginRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 131 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 131

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSMarginRule是否支持
function isCSSMarginRuleSupported() {
    return 'CSSMarginRule' in window || typeof CSSMarginRule !== 'undefined';
}

if (isCSSMarginRuleSupported()) {
    console.log('CSSMarginRule 支持');
    // 使用CSSMarginRule
} else {
    console.log('CSSMarginRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSMarginRule polyfill
if (!window.CSSMarginRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSMarginRule polyfill');
}
```

