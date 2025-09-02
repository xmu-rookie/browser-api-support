# CSSMediaRule.media API 兼容性数据

## 基本信息

- **API名称**: `CSSMediaRule.media`
- **MDN文档**: [CSSMediaRule.media](https://developer.mozilla.org/docs/Web/API/CSSMediaRule/media)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-conditional-3/#dom-cssmediarule-media)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSMediaRule.media 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSMediaRule.media API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
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

- **支持版本**: 1

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
// 检查CSSMediaRule.media是否支持
function isCSSMediaRuleMediaSupported() {
    return 'media' in cssmediarule && typeof cssmediarule.media === 'function';
}

if (isCSSMediaRuleMediaSupported()) {
    console.log('CSSMediaRule.media 支持');
    // 使用CSSMediaRule.media
} else {
    console.log('CSSMediaRule.media 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSMediaRule.media polyfill
if (!cssmediarule.media) {
    // 在这里添加polyfill实现
    console.log('加载CSSMediaRule.media polyfill');
}
```

