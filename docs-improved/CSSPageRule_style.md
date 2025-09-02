# CSSPageRule.style API 兼容性数据

## 基本信息

- **API名称**: `CSSPageRule.style`
- **MDN文档**: [CSSPageRule.style](https://developer.mozilla.org/docs/Web/API/CSSPageRule/style)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-csspagerule-style)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSPageRule.style 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPageRule.style API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 19 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 19

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSPageRule.style是否支持
function isCSSPageRuleStyleSupported() {
    return 'style' in csspagerule && typeof csspagerule.style === 'function';
}

if (isCSSPageRuleStyleSupported()) {
    console.log('CSSPageRule.style 支持');
    // 使用CSSPageRule.style
} else {
    console.log('CSSPageRule.style 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPageRule.style polyfill
if (!csspagerule.style) {
    // 在这里添加polyfill实现
    console.log('加载CSSPageRule.style polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **type_CSSPageDescriptors**: Type changed to [`CSSPageDescriptors`](https://developer.mozilla.org/docs/Web/API/CSSPageDescriptors)

