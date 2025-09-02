# CSSSupportsRule API 兼容性数据

## 基本信息

- **API名称**: `CSSSupportsRule`
- **MDN文档**: [CSSSupportsRule](https://developer.mozilla.org/docs/Web/API/CSSSupportsRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-conditional-3/#the-csssupportsrule-interface)
- **标签**: `web-features:supports`

## 使用示例

### 基本用法

```javascript
// CSSSupportsRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSSupportsRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 28 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 15 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 28

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 22

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 15
- **支持版本**: 12.1
- **移除版本**: 14

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSSupportsRule是否支持
function isCSSSupportsRuleSupported() {
    return 'CSSSupportsRule' in window || typeof CSSSupportsRule !== 'undefined';
}

if (isCSSSupportsRuleSupported()) {
    console.log('CSSSupportsRule 支持');
    // 使用CSSSupportsRule
} else {
    console.log('CSSSupportsRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSSupportsRule polyfill
if (!window.CSSSupportsRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSSupportsRule polyfill');
}
```

