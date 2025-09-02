# CSS.supports_static API 兼容性数据

## 基本信息

- **API名称**: `CSS.supports_static`
- **MDN文档**: [CSS.supports_static](https://developer.mozilla.org/docs/Web/API/CSS/supports_static)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-conditional-3/#dom-css-supports)
- **标签**: `web-features:css-supports`
- **描述**: `supports()` static method

## 使用示例

### 基本用法

```javascript
// CSS.supports_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSS.supports_static API');
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
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
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

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSS.supports_static是否支持
function isCSSSupports_staticSupported() {
    return 'supports_static' in css && typeof css.supports_static === 'function';
}

if (isCSSSupports_staticSupported()) {
    console.log('CSS.supports_static 支持');
    // 使用CSS.supports_static
} else {
    console.log('CSS.supports_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSS.supports_static polyfill
if (!css.supports_static) {
    // 在这里添加polyfill实现
    console.log('加载CSS.supports_static polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **optional_parens**: Parentheses for single-argument version are optional.

