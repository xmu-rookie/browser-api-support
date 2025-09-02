# CSSNamespaceRule.prefix API 兼容性数据

## 基本信息

- **API名称**: `CSSNamespaceRule.prefix`
- **MDN文档**: [CSSNamespaceRule.prefix](https://developer.mozilla.org/docs/Web/API/CSSNamespaceRule/prefix)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-cssnamespacerule-prefix)
- **标签**: `web-features:namespace`

## 使用示例

### 基本用法

```javascript
// CSSNamespaceRule.prefix 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSNamespaceRule.prefix API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 59 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 36 |  |
| Opera Android | 36 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 47

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 59

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 36

### Opera Android

- **支持版本**: 36

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSNamespaceRule.prefix是否支持
function isCSSNamespaceRulePrefixSupported() {
    return 'prefix' in cssnamespacerule && typeof cssnamespacerule.prefix === 'function';
}

if (isCSSNamespaceRulePrefixSupported()) {
    console.log('CSSNamespaceRule.prefix 支持');
    // 使用CSSNamespaceRule.prefix
} else {
    console.log('CSSNamespaceRule.prefix 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSNamespaceRule.prefix polyfill
if (!cssnamespacerule.prefix) {
    // 在这里添加polyfill实现
    console.log('加载CSSNamespaceRule.prefix polyfill');
}
```

