# DOMQuad.p2 API 兼容性数据

## 基本信息

- **API名称**: `DOMQuad.p2`
- **MDN文档**: [DOMQuad.p2](https://developer.mozilla.org/docs/Web/API/DOMQuad/p2)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-domquad-p2)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMQuad.p2 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMQuad.p2 API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 31 | Before Firefox 69, the default value of `p1` through `p4` was undefined; now `DOMQuadInit` defines t... |
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
- **注意事项**:
  - Before Firefox 69, the default value of `p1` through `p4` was undefined; now `DOMQuadInit` defines these as `false`.

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMQuad.p2是否支持
function isDOMQuadP2Supported() {
    return 'p2' in domquad && typeof domquad.p2 === 'function';
}

if (isDOMQuadP2Supported()) {
    console.log('DOMQuad.p2 支持');
    // 使用DOMQuad.p2
} else {
    console.log('DOMQuad.p2 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMQuad.p2 polyfill
if (!domquad.p2) {
    // 在这里添加polyfill实现
    console.log('加载DOMQuad.p2 polyfill');
}
```

