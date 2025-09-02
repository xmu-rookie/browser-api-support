# CSSPropertyRule.initialValue API 兼容性数据

## 基本信息

- **API名称**: `CSSPropertyRule.initialValue`
- **MDN文档**: [CSSPropertyRule.initialValue](https://developer.mozilla.org/docs/Web/API/CSSPropertyRule/initialValue)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-properties-values-api/#dom-csspropertyrule-initialvalue)
- **标签**: `web-features:registered-custom-properties`

## 使用示例

### 基本用法

```javascript
// CSSPropertyRule.initialValue 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPropertyRule.initialValue API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 85 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 128 |  |
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

- **支持版本**: 85

### Firefox

- **支持版本**: 128

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSPropertyRule.initialValue是否支持
function isCSSPropertyRuleInitialValueSupported() {
    return 'initialValue' in csspropertyrule && typeof csspropertyrule.initialValue === 'function';
}

if (isCSSPropertyRuleInitialValueSupported()) {
    console.log('CSSPropertyRule.initialValue 支持');
    // 使用CSSPropertyRule.initialValue
} else {
    console.log('CSSPropertyRule.initialValue 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPropertyRule.initialValue polyfill
if (!csspropertyrule.initialValue) {
    // 在这里添加polyfill实现
    console.log('加载CSSPropertyRule.initialValue polyfill');
}
```

