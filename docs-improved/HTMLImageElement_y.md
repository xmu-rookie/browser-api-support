# HTMLImageElement.y API 兼容性数据

## 基本信息

- **API名称**: `HTMLImageElement.y`
- **MDN文档**: [HTMLImageElement.y](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/y)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-htmlimageelement-y)
- **标签**: `web-features:img`

## 使用示例

### 基本用法

```javascript
// HTMLImageElement.y 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLImageElement.y API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 14 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 14
- **支持版本**: 1
- **移除版本**: 7

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLImageElement.y是否支持
function isHTMLImageElementYSupported() {
    return 'y' in htmlimageelement && typeof htmlimageelement.y === 'function';
}

if (isHTMLImageElementYSupported()) {
    console.log('HTMLImageElement.y 支持');
    // 使用HTMLImageElement.y
} else {
    console.log('HTMLImageElement.y 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLImageElement.y polyfill
if (!htmlimageelement.y) {
    // 在这里添加polyfill实现
    console.log('加载HTMLImageElement.y polyfill');
}
```

