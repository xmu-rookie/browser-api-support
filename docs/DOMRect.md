# DOMRect API 兼容性数据

## 基本信息

- **API名称**: `DOMRect`
- **MDN文档**: [DOMRect](https://developer.mozilla.org/docs/Web/API/DOMRect)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#DOMRect)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMRect 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMRect API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 未知 |  |
| Firefox | 未知 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| oculus | 同主版本 |  |
| Opera | 未知 |  |
| Opera Android | 未知 |  |
| Safari | 未知 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 未知 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge


### Firefox


### Internet Explorer

- **支持版本**: 4

### Opera


### Opera Android


### Safari


### WebView Android


## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMRect是否支持
function isDOMRectSupported() {
    return 'DOMRect' in window || typeof DOMRect !== 'undefined';
}

if (isDOMRectSupported()) {
    console.log('DOMRect 支持');
    // 使用DOMRect
} else {
    console.log('DOMRect 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMRect polyfill
if (!window.DOMRect) {
    // 在这里添加polyfill实现
    console.log('加载DOMRect polyfill');
}
```

