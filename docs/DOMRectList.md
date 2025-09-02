# DOMRectList API 兼容性数据

## 基本信息

- **API名称**: `DOMRectList`
- **MDN文档**: [DOMRectList](https://developer.mozilla.org/docs/Web/API/DOMRectList)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#DOMRectList)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMRectList 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMRectList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 未知 |  |
| Firefox | 未知 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

- **支持版本**: 9

### Opera


### Opera Android


### Safari


### Safari iOS


## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMRectList是否支持
function isDOMRectListSupported() {
    return 'DOMRectList' in window || typeof DOMRectList !== 'undefined';
}

if (isDOMRectListSupported()) {
    console.log('DOMRectList 支持');
    // 使用DOMRectList
} else {
    console.log('DOMRectList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMRectList polyfill
if (!window.DOMRectList) {
    // 在这里添加polyfill实现
    console.log('加载DOMRectList polyfill');
}
```

