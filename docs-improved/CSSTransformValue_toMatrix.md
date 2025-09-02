# CSSTransformValue.toMatrix API 兼容性数据

## 基本信息

- **API名称**: `CSSTransformValue.toMatrix`
- **MDN文档**: [CSSTransformValue.toMatrix](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/toMatrix)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-csstransformvalue-tomatrix)
- **标签**: `web-features:css-typed-om`

## 使用示例

### 基本用法

```javascript
// CSSTransformValue.toMatrix 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSTransformValue.toMatrix API');
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
// 检查CSSTransformValue.toMatrix是否支持
function isCSSTransformValueToMatrixSupported() {
    return 'toMatrix' in csstransformvalue && typeof csstransformvalue.toMatrix === 'function';
}

if (isCSSTransformValueToMatrixSupported()) {
    console.log('CSSTransformValue.toMatrix 支持');
    // 使用CSSTransformValue.toMatrix
} else {
    console.log('CSSTransformValue.toMatrix 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSTransformValue.toMatrix polyfill
if (!csstransformvalue.toMatrix) {
    // 在这里添加polyfill实现
    console.log('加载CSSTransformValue.toMatrix polyfill');
}
```

