# CSSPositionTryRule API 兼容性数据

## 基本信息

- **API名称**: `CSSPositionTryRule`
- **MDN文档**: [CSSPositionTryRule](https://developer.mozilla.org/docs/Web/API/CSSPositionTryRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-anchor-position-1/#csspositiontryrule)
- **标签**: `web-features:anchor-positioning`

## 使用示例

### 基本用法

```javascript
// CSSPositionTryRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPositionTryRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 131 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 125

### Firefox

- **支持版本**: 131

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSPositionTryRule是否支持
function isCSSPositionTryRuleSupported() {
    return 'CSSPositionTryRule' in window || typeof CSSPositionTryRule !== 'undefined';
}

if (isCSSPositionTryRuleSupported()) {
    console.log('CSSPositionTryRule 支持');
    // 使用CSSPositionTryRule
} else {
    console.log('CSSPositionTryRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPositionTryRule polyfill
if (!window.CSSPositionTryRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSPositionTryRule polyfill');
}
```

