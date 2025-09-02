# DOMRectList.item API 兼容性数据

## 基本信息

- **API名称**: `DOMRectList.item`
- **MDN文档**: [DOMRectList.item](https://developer.mozilla.org/docs/Web/API/DOMRectList/item)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-domrectlist-item)
- **标签**: `web-features:dom-geometry`

## 使用示例

### 基本用法

```javascript
// DOMRectList.item 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMRectList.item API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMRectList.item是否支持
function isDOMRectListItemSupported() {
    return 'item' in domrectlist && typeof domrectlist.item === 'function';
}

if (isDOMRectListItemSupported()) {
    console.log('DOMRectList.item 支持');
    // 使用DOMRectList.item
} else {
    console.log('DOMRectList.item 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMRectList.item polyfill
if (!domrectlist.item) {
    // 在这里添加polyfill实现
    console.log('加载DOMRectList.item polyfill');
}
```

