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
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 27 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 48 |  |
| Opera Android | 45 |  |
| Safari | 10.1 |  |
| Safari iOS | 10.3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61
- **支持版本**: 2
- **移除版本**: 61

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 27
- **支持版本**: 3
- **移除版本**: 27

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 48
- **支持版本**: ≤12.1
- **移除版本**: 48

### Opera Android

- **支持版本**: 45
- **支持版本**: ≤12.1
- **移除版本**: 45

### Safari

- **支持版本**: 10.1
- **支持版本**: 4
- **移除版本**: 11

### Safari iOS

- **支持版本**: 10.3
- **支持版本**: 3
- **移除版本**: 11

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

