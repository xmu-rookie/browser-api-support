# DOMMatrix API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrix`
- **MDN文档**: [DOMMatrix](https://developer.mozilla.org/docs/Web/API/DOMMatrix)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#DOMMatrix)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMMatrix 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrix API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 未知 |  |
| Firefox | 未知 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 未知 |  |
| Opera Android | 未知 |  |
| Safari | 未知 |  |
| Safari iOS | 未知 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge


### Firefox


### Internet Explorer


### Opera


### Opera Android


### Safari


### Safari iOS


## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMMatrix是否支持
function isDOMMatrixSupported() {
    return 'DOMMatrix' in window || typeof DOMMatrix !== 'undefined';
}

if (isDOMMatrixSupported()) {
    console.log('DOMMatrix 支持');
    // 使用DOMMatrix
} else {
    console.log('DOMMatrix 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrix polyfill
if (!window.DOMMatrix) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrix polyfill');
}
```

