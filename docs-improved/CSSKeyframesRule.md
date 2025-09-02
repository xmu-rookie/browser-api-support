# CSSKeyframesRule API 兼容性数据

## 基本信息

- **API名称**: `CSSKeyframesRule`
- **MDN文档**: [CSSKeyframesRule](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations/#interface-csskeyframesrule)
- **标签**: `web-features:animations-css`

## 使用示例

### 基本用法

```javascript
// CSSKeyframesRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSKeyframesRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 48 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 18 |  |
| Opera Android | 18 |  |
| Safari | 9.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4.3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 31
- **支持版本**: 1
- **移除版本**: 31
- **前缀**: WebKit

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 48
- **支持版本**: 5
- **移除版本**: 48
- **前缀**: Moz

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 18
- **支持版本**: 15
- **移除版本**: 18
- **前缀**: WebKit
- **支持版本**: 12.1
- **移除版本**: 15
- **支持版本**: 12
- **移除版本**: 12.1
- **前缀**: O

### Opera Android

- **支持版本**: 18
- **支持版本**: 14
- **移除版本**: 18
- **前缀**: WebKit
- **支持版本**: 12.1
- **移除版本**: 14
- **支持版本**: 12
- **移除版本**: 12.1
- **前缀**: O

### Safari

- **支持版本**: 9.1
- **支持版本**: 4
- **移除版本**: 9.1
- **前缀**: WebKit

### WebView Android

- **支持版本**: 4.4.3
- **支持版本**: 1
- **移除版本**: 4.4.3
- **前缀**: WebKit

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSKeyframesRule是否支持
function isCSSKeyframesRuleSupported() {
    return 'CSSKeyframesRule' in window || typeof CSSKeyframesRule !== 'undefined';
}

if (isCSSKeyframesRuleSupported()) {
    console.log('CSSKeyframesRule 支持');
    // 使用CSSKeyframesRule
} else {
    console.log('CSSKeyframesRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSKeyframesRule polyfill
if (!window.CSSKeyframesRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSKeyframesRule polyfill');
}
```

