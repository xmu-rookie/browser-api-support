# CSSStyleSheet.insertRule.index_parameter_optional API 兼容性数据

## 基本信息

- **API名称**: `CSSStyleSheet.insertRule.index_parameter_optional`
- **标签**: `web-features:css-object-model`
- **描述**: `index` parameter is optional

## 使用示例

### 基本用法

```javascript
// CSSStyleSheet.insertRule.index_parameter_optional 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSStyleSheet.insertRule.index_parameter_optional API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSStyleSheet.insertRule.index_parameter_optional是否支持
function isCSSStyleSheetInsertRuleSupported() {
    return 'insertRule' in cssstylesheet && typeof cssstylesheet.insertRule === 'function';
}

if (isCSSStyleSheetInsertRuleSupported()) {
    console.log('CSSStyleSheet.insertRule.index_parameter_optional 支持');
    // 使用CSSStyleSheet.insertRule.index_parameter_optional
} else {
    console.log('CSSStyleSheet.insertRule.index_parameter_optional 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSStyleSheet.insertRule.index_parameter_optional polyfill
if (!cssstylesheet.insertRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSStyleSheet.insertRule.index_parameter_optional polyfill');
}
```

