# CSSMathMax API 兼容性数据

## 基本信息

- **API名称**: `CSSMathMax`
- **MDN文档**: [CSSMathMax](https://developer.mozilla.org/docs/Web/API/CSSMathMax)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#cssmathmax)
- **标签**: `web-features:css-typed-om`

## 使用示例

### 基本用法

```javascript
// CSSMathMax 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSMathMax API');
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
// 检查CSSMathMax是否支持
function isCSSMathMaxSupported() {
    return 'CSSMathMax' in window || typeof CSSMathMax !== 'undefined';
}

if (isCSSMathMaxSupported()) {
    console.log('CSSMathMax 支持');
    // 使用CSSMathMax
} else {
    console.log('CSSMathMax 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSMathMax polyfill
if (!window.CSSMathMax) {
    // 在这里添加polyfill实现
    console.log('加载CSSMathMax polyfill');
}
```

