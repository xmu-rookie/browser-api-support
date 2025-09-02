# CSSUnparsedValue.CSSUnparsedValue API 兼容性数据

## 基本信息

- **API名称**: `CSSUnparsedValue.CSSUnparsedValue`
- **MDN文档**: [CSSUnparsedValue.CSSUnparsedValue](https://developer.mozilla.org/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-cssunparsedvalue-cssunparsedvalue)
- **标签**: `web-features:css-typed-om`
- **描述**: `CSSUnparsedValue()` constructor

## 使用示例

### 基本用法

```javascript
// CSSUnparsedValue.CSSUnparsedValue 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSUnparsedValue.CSSUnparsedValue API');
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
// 检查CSSUnparsedValue.CSSUnparsedValue是否支持
function isCSSUnparsedValueCSSUnparsedValueSupported() {
    return 'CSSUnparsedValue' in cssunparsedvalue && typeof cssunparsedvalue.CSSUnparsedValue === 'function';
}

if (isCSSUnparsedValueCSSUnparsedValueSupported()) {
    console.log('CSSUnparsedValue.CSSUnparsedValue 支持');
    // 使用CSSUnparsedValue.CSSUnparsedValue
} else {
    console.log('CSSUnparsedValue.CSSUnparsedValue 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSUnparsedValue.CSSUnparsedValue polyfill
if (!cssunparsedvalue.CSSUnparsedValue) {
    // 在这里添加polyfill实现
    console.log('加载CSSUnparsedValue.CSSUnparsedValue polyfill');
}
```

