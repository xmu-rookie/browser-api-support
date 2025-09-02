# CSSSkewX.CSSSkewX API 兼容性数据

## 基本信息

- **API名称**: `CSSSkewX.CSSSkewX`
- **MDN文档**: [CSSSkewX.CSSSkewX](https://developer.mozilla.org/docs/Web/API/CSSSkewX/CSSSkewX)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-cssskewx-cssskewx)
- **标签**: `web-features:css-typed-om`
- **描述**: `CSSSkewX()` constructor

## 使用示例

### 基本用法

```javascript
// CSSSkewX.CSSSkewX 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSSkewX.CSSSkewX API');
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
// 检查CSSSkewX.CSSSkewX是否支持
function isCSSSkewXCSSSkewXSupported() {
    return 'CSSSkewX' in cssskewx && typeof cssskewx.CSSSkewX === 'function';
}

if (isCSSSkewXCSSSkewXSupported()) {
    console.log('CSSSkewX.CSSSkewX 支持');
    // 使用CSSSkewX.CSSSkewX
} else {
    console.log('CSSSkewX.CSSSkewX 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSSkewX.CSSSkewX polyfill
if (!cssskewx.CSSSkewX) {
    // 在这里添加polyfill实现
    console.log('加载CSSSkewX.CSSSkewX polyfill');
}
```

