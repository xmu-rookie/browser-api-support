# CSSNestedDeclarations API 兼容性数据

## 基本信息

- **API名称**: `CSSNestedDeclarations`
- **MDN文档**: [CSSNestedDeclarations](https://developer.mozilla.org/docs/Web/API/CSSNestedDeclarations)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-nesting-1/#cssnesteddeclarations)
- **标签**: `web-features:nesting`

## 使用示例

### 基本用法

```javascript
// CSSNestedDeclarations 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSNestedDeclarations API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 130 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 132 |  |
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

- **支持版本**: 130

### Firefox

- **支持版本**: 132

### Safari

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSNestedDeclarations是否支持
function isCSSNestedDeclarationsSupported() {
    return 'CSSNestedDeclarations' in window || typeof CSSNestedDeclarations !== 'undefined';
}

if (isCSSNestedDeclarationsSupported()) {
    console.log('CSSNestedDeclarations 支持');
    // 使用CSSNestedDeclarations
} else {
    console.log('CSSNestedDeclarations 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSNestedDeclarations polyfill
if (!window.CSSNestedDeclarations) {
    // 在这里添加polyfill实现
    console.log('加载CSSNestedDeclarations polyfill');
}
```

