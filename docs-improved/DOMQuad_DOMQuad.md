# DOMQuad.DOMQuad API 兼容性数据

## 基本信息

- **API名称**: `DOMQuad.DOMQuad`
- **MDN文档**: [DOMQuad.DOMQuad](https://developer.mozilla.org/docs/Web/API/DOMQuad/DOMQuad)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-domquad-domquad)
- **标签**: `web-features:dom-geometry`
- **描述**: `DOMQuad()` constructor

## 使用示例

### 基本用法

```javascript
// DOMQuad.DOMQuad 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMQuad.DOMQuad API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 31

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMQuad.DOMQuad是否支持
function isDOMQuadDOMQuadSupported() {
    return 'DOMQuad' in domquad && typeof domquad.DOMQuad === 'function';
}

if (isDOMQuadDOMQuadSupported()) {
    console.log('DOMQuad.DOMQuad 支持');
    // 使用DOMQuad.DOMQuad
} else {
    console.log('DOMQuad.DOMQuad 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMQuad.DOMQuad polyfill
if (!domquad.DOMQuad) {
    // 在这里添加polyfill实现
    console.log('加载DOMQuad.DOMQuad polyfill');
}
```

