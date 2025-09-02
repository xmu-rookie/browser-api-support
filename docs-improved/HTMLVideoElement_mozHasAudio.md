# HTMLVideoElement.mozHasAudio API 兼容性数据

## 基本信息

- **API名称**: `HTMLVideoElement.mozHasAudio`

## 使用示例

### 基本用法

```javascript
// HTMLVideoElement.mozHasAudio 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLVideoElement.mozHasAudio API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 15 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 15

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLVideoElement.mozHasAudio是否支持
function isHTMLVideoElementMozHasAudioSupported() {
    return 'mozHasAudio' in htmlvideoelement && typeof htmlvideoelement.mozHasAudio === 'function';
}

if (isHTMLVideoElementMozHasAudioSupported()) {
    console.log('HTMLVideoElement.mozHasAudio 支持');
    // 使用HTMLVideoElement.mozHasAudio
} else {
    console.log('HTMLVideoElement.mozHasAudio 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLVideoElement.mozHasAudio polyfill
if (!htmlvideoelement.mozHasAudio) {
    // 在这里添加polyfill实现
    console.log('加载HTMLVideoElement.mozHasAudio polyfill');
}
```

