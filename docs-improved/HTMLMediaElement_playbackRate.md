# HTMLMediaElement.playbackRate API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.playbackRate`
- **MDN文档**: [HTMLMediaElement.playbackRate](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playbackRate)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-media-playbackrate-dev)
- **标签**: `web-features:video`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.playbackRate 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.playbackRate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 | Setting the `playbackRate` to a negative value will throw an error. |
| Chrome Android | 同主版本 |  |
| Edge | 12 | Setting the `playbackRate` to a negative value will throw an error. |
| Firefox | 20 | Setting the `playbackRate` to a negative value will throw an error. |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 | Setting the `playbackRate` to a negative value will throw an error. |
| Opera Android | ≤12.1 | Setting the `playbackRate` to a negative value will throw an error. |
| Safari | 3.1 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 3
- **部分实现**: 是
- **注意事项**:
  - Setting the `playbackRate` to a negative value will throw an error.

### Edge

- **支持版本**: 12
- **部分实现**: 是
- **注意事项**:
  - Setting the `playbackRate` to a negative value will throw an error.

### Firefox

- **支持版本**: 20
- **部分实现**: 是
- **注意事项**:
  - Setting the `playbackRate` to a negative value will throw an error.

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1
- **部分实现**: 是
- **注意事项**:
  - Setting the `playbackRate` to a negative value will throw an error.

### Opera Android

- **支持版本**: ≤12.1
- **部分实现**: 是
- **注意事项**:
  - Setting the `playbackRate` to a negative value will throw an error.

### Safari

- **支持版本**: 3.1

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.playbackRate是否支持
function isHTMLMediaElementPlaybackRateSupported() {
    return 'playbackRate' in htmlmediaelement && typeof htmlmediaelement.playbackRate === 'function';
}

if (isHTMLMediaElementPlaybackRateSupported()) {
    console.log('HTMLMediaElement.playbackRate 支持');
    // 使用HTMLMediaElement.playbackRate
} else {
    console.log('HTMLMediaElement.playbackRate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.playbackRate polyfill
if (!htmlmediaelement.playbackRate) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.playbackRate polyfill');
}
```

