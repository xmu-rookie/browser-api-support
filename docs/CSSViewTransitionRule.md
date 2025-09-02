# CSSViewTransitionRule API 兼容性数据

## 基本信息

- **API名称**: `CSSViewTransitionRule`
- **规范文档**: [查看规范](https://drafts.csswg.org/css-view-transitions-2/#cssviewtransitionrule)
- **标签**: `web-features:cross-document-view-transitions`

## 使用示例

### 基本用法

```javascript
// CSSViewTransitionRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSViewTransitionRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 126

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSViewTransitionRule是否支持
function isCSSViewTransitionRuleSupported() {
    return 'CSSViewTransitionRule' in window || typeof CSSViewTransitionRule !== 'undefined';
}

if (isCSSViewTransitionRuleSupported()) {
    console.log('CSSViewTransitionRule 支持');
    // 使用CSSViewTransitionRule
} else {
    console.log('CSSViewTransitionRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSViewTransitionRule polyfill
if (!window.CSSViewTransitionRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSViewTransitionRule polyfill');
}
```

