# HTMLMediaElement.mediaKeys API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.mediaKeys`
- **MDN文档**: [HTMLMediaElement.mediaKeys](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/mediaKeys)
- **规范文档**: [查看规范](https://w3c.github.io/encrypted-media/#dom-htmlmediaelement-mediakeys)
- **标签**: `web-features:encrypted-media-extensions`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.mediaKeys 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.mediaKeys API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 38 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 42

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 38

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.mediaKeys是否支持
function isHTMLMediaElementMediaKeysSupported() {
    return 'mediaKeys' in htmlmediaelement && typeof htmlmediaelement.mediaKeys === 'function';
}

if (isHTMLMediaElementMediaKeysSupported()) {
    console.log('HTMLMediaElement.mediaKeys 支持');
    // 使用HTMLMediaElement.mediaKeys
} else {
    console.log('HTMLMediaElement.mediaKeys 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.mediaKeys polyfill
if (!htmlmediaelement.mediaKeys) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.mediaKeys polyfill');
}
```

