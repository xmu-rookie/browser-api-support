# MediaQueryList.media API 兼容性数据

## 基本信息

- **API名称**: `MediaQueryList.media`
- **MDN文档**: [MediaQueryList.media](https://developer.mozilla.org/docs/Web/API/MediaQueryList/media)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-mediaquerylist-media)
- **标签**: `web-features:matchmedia`

## 使用示例

### 基本用法

```javascript
// MediaQueryList.media 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaQueryList.media API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 9

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 5.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaQueryList.media是否支持
function isMediaQueryListMediaSupported() {
    return 'media' in mediaquerylist && typeof mediaquerylist.media === 'function';
}

if (isMediaQueryListMediaSupported()) {
    console.log('MediaQueryList.media 支持');
    // 使用MediaQueryList.media
} else {
    console.log('MediaQueryList.media 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaQueryList.media polyfill
if (!mediaquerylist.media) {
    // 在这里添加polyfill实现
    console.log('加载MediaQueryList.media polyfill');
}
```

