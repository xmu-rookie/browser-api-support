# HTMLAudioElement.Audio API 兼容性数据

## 基本信息

- **API名称**: `HTMLAudioElement.Audio`
- **MDN文档**: [HTMLAudioElement.Audio](https://developer.mozilla.org/docs/Web/API/HTMLAudioElement/Audio)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-audio-dev)
- **标签**: `web-features:audio`
- **描述**: `Audio()` constructor

## 使用示例

### 基本用法

```javascript
// HTMLAudioElement.Audio 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAudioElement.Audio API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3.1 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAudioElement.Audio是否支持
function isHTMLAudioElementAudioSupported() {
    return 'Audio' in htmlaudioelement && typeof htmlaudioelement.Audio === 'function';
}

if (isHTMLAudioElementAudioSupported()) {
    console.log('HTMLAudioElement.Audio 支持');
    // 使用HTMLAudioElement.Audio
} else {
    console.log('HTMLAudioElement.Audio 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAudioElement.Audio polyfill
if (!htmlaudioelement.Audio) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAudioElement.Audio polyfill');
}
```

