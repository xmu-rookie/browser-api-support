# CSSVariableReferenceValue.fallback API 兼容性数据

## 基本信息

- **API名称**: `CSSVariableReferenceValue.fallback`
- **MDN文档**: [CSSVariableReferenceValue.fallback](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue/fallback)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-cssvariablereferencevalue-fallback)
- **标签**: `web-features:css-typed-om`

## 使用示例

### 基本用法

```javascript
// CSSVariableReferenceValue.fallback 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSVariableReferenceValue.fallback API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSVariableReferenceValue.fallback是否支持
function isCSSVariableReferenceValueFallbackSupported() {
    return 'fallback' in cssvariablereferencevalue && typeof cssvariablereferencevalue.fallback === 'function';
}

if (isCSSVariableReferenceValueFallbackSupported()) {
    console.log('CSSVariableReferenceValue.fallback 支持');
    // 使用CSSVariableReferenceValue.fallback
} else {
    console.log('CSSVariableReferenceValue.fallback 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSVariableReferenceValue.fallback polyfill
if (!cssvariablereferencevalue.fallback) {
    // 在这里添加polyfill实现
    console.log('加载CSSVariableReferenceValue.fallback polyfill');
}
```

