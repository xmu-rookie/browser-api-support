# DOMMatrix.m13 API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrix.m13`
- **MDN文档**: [DOMMatrix.m13](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dommatrixreadonly-m13)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMMatrix.m13 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrix.m13 API');
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
// 检查DOMMatrix.m13是否支持
function isDOMMatrixM13Supported() {
    return 'm13' in dommatrix && typeof dommatrix.m13 === 'function';
}

if (isDOMMatrixM13Supported()) {
    console.log('DOMMatrix.m13 支持');
    // 使用DOMMatrix.m13
} else {
    console.log('DOMMatrix.m13 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrix.m13 polyfill
if (!dommatrix.m13) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrix.m13 polyfill');
}
```

