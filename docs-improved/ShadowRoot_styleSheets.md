# ShadowRoot.styleSheets API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.styleSheets`
- **MDN文档**: [ShadowRoot.styleSheets](https://developer.mozilla.org/docs/Web/API/ShadowRoot/styleSheets)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-documentorshadowroot-stylesheets)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// ShadowRoot.styleSheets 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.styleSheets API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.styleSheets是否支持
function isShadowRootStyleSheetsSupported() {
    return 'styleSheets' in shadowroot && typeof shadowroot.styleSheets === 'function';
}

if (isShadowRootStyleSheetsSupported()) {
    console.log('ShadowRoot.styleSheets 支持');
    // 使用ShadowRoot.styleSheets
} else {
    console.log('ShadowRoot.styleSheets 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.styleSheets polyfill
if (!shadowroot.styleSheets) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.styleSheets polyfill');
}
```

