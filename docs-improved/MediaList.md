# MediaList API 兼容性数据

## 基本信息

- **API名称**: `MediaList`
- **MDN文档**: [MediaList](https://developer.mozilla.org/docs/Web/API/MediaList)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#the-medialist-interface)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// MediaList 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaList是否支持
function isMediaListSupported() {
    return 'MediaList' in window || typeof MediaList !== 'undefined';
}

if (isMediaListSupported()) {
    console.log('MediaList 支持');
    // 使用MediaList
} else {
    console.log('MediaList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaList polyfill
if (!window.MediaList) {
    // 在这里添加polyfill实现
    console.log('加载MediaList polyfill');
}
```

