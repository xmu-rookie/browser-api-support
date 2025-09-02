# DocumentPictureInPictureEvent API 兼容性数据

## 基本信息

- **API名称**: `DocumentPictureInPictureEvent`
- **MDN文档**: [DocumentPictureInPictureEvent](https://developer.mozilla.org/docs/Web/API/DocumentPictureInPictureEvent)
- **规范文档**: [查看规范](https://wicg.github.io/document-picture-in-picture/#documentpictureinpictureevent)
- **标签**: `web-features:document-picture-in-picture`

## 使用示例

### 基本用法

```javascript
// DocumentPictureInPictureEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('DocumentPictureInPictureEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 116 |  |
| Chrome Android | ❌ 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 116

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DocumentPictureInPictureEvent是否支持
function isDocumentPictureInPictureEventSupported() {
    return 'DocumentPictureInPictureEvent' in window || typeof DocumentPictureInPictureEvent !== 'undefined';
}

if (isDocumentPictureInPictureEventSupported()) {
    console.log('DocumentPictureInPictureEvent 支持');
    // 使用DocumentPictureInPictureEvent
} else {
    console.log('DocumentPictureInPictureEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DocumentPictureInPictureEvent polyfill
if (!window.DocumentPictureInPictureEvent) {
    // 在这里添加polyfill实现
    console.log('加载DocumentPictureInPictureEvent polyfill');
}
```

