# PaintWorkletGlobalScope.registerPaint API 兼容性数据

## 基本信息

- **API名称**: `PaintWorkletGlobalScope.registerPaint`
- **MDN文档**: [PaintWorkletGlobalScope.registerPaint](https://developer.mozilla.org/docs/Web/API/PaintWorkletGlobalScope/registerPaint)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-paint-api/#dom-paintworkletglobalscope-registerpaint)
- **标签**: `web-features:paint`

## 使用示例

### 基本用法

```javascript
// PaintWorkletGlobalScope.registerPaint 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaintWorkletGlobalScope.registerPaint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 65

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaintWorkletGlobalScope.registerPaint是否支持
function isPaintWorkletGlobalScopeRegisterPaintSupported() {
    return 'registerPaint' in paintworkletglobalscope && typeof paintworkletglobalscope.registerPaint === 'function';
}

if (isPaintWorkletGlobalScopeRegisterPaintSupported()) {
    console.log('PaintWorkletGlobalScope.registerPaint 支持');
    // 使用PaintWorkletGlobalScope.registerPaint
} else {
    console.log('PaintWorkletGlobalScope.registerPaint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaintWorkletGlobalScope.registerPaint polyfill
if (!paintworkletglobalscope.registerPaint) {
    // 在这里添加polyfill实现
    console.log('加载PaintWorkletGlobalScope.registerPaint polyfill');
}
```

