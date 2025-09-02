# DOMMatrix.m34 API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrix.m34`
- **MDN文档**: [DOMMatrix.m34](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dommatrixreadonly-m34)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMMatrix.m34 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrix.m34 API');
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
// 检查DOMMatrix.m34是否支持
function isDOMMatrixM34Supported() {
    return 'm34' in dommatrix && typeof dommatrix.m34 === 'function';
}

if (isDOMMatrixM34Supported()) {
    console.log('DOMMatrix.m34 支持');
    // 使用DOMMatrix.m34
} else {
    console.log('DOMMatrix.m34 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrix.m34 polyfill
if (!dommatrix.m34) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrix.m34 polyfill');
}
```

