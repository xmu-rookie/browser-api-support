# DOMMatrix.translateSelf API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrix.translateSelf`
- **MDN文档**: [DOMMatrix.translateSelf](https://developer.mozilla.org/docs/Web/API/DOMMatrix/translateSelf)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dommatrix-translateself)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMMatrix.translateSelf 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrix.translateSelf API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 33 |  |
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

- **支持版本**: 33

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMMatrix.translateSelf是否支持
function isDOMMatrixTranslateSelfSupported() {
    return 'translateSelf' in dommatrix && typeof dommatrix.translateSelf === 'function';
}

if (isDOMMatrixTranslateSelfSupported()) {
    console.log('DOMMatrix.translateSelf 支持');
    // 使用DOMMatrix.translateSelf
} else {
    console.log('DOMMatrix.translateSelf 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrix.translateSelf polyfill
if (!dommatrix.translateSelf) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrix.translateSelf polyfill');
}
```

