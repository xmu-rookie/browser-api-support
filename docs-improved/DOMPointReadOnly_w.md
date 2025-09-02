# DOMPointReadOnly.w API 兼容性数据

## 基本信息

- **API名称**: `DOMPointReadOnly.w`
- **MDN文档**: [DOMPointReadOnly.w](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/w)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dompointreadonly-w)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMPointReadOnly.w 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMPointReadOnly.w API');
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
| Safari | 10.1 |  |
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

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMPointReadOnly.w是否支持
function isDOMPointReadOnlyWSupported() {
    return 'w' in dompointreadonly && typeof dompointreadonly.w === 'function';
}

if (isDOMPointReadOnlyWSupported()) {
    console.log('DOMPointReadOnly.w 支持');
    // 使用DOMPointReadOnly.w
} else {
    console.log('DOMPointReadOnly.w 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMPointReadOnly.w polyfill
if (!dompointreadonly.w) {
    // 在这里添加polyfill实现
    console.log('加载DOMPointReadOnly.w polyfill');
}
```

