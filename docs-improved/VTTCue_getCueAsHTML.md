# VTTCue.getCueAsHTML API 兼容性数据

## 基本信息

- **API名称**: `VTTCue.getCueAsHTML`
- **MDN文档**: [VTTCue.getCueAsHTML](https://developer.mozilla.org/docs/Web/API/VTTCue/getCueAsHTML)
- **规范文档**: [查看规范](https://w3c.github.io/webvtt/#dom-vttcue-getcueashtml)
- **标签**: `web-features:webvtt`

## 使用示例

### 基本用法

```javascript
// VTTCue.getCueAsHTML 使用示例
// 请查阅MDN文档了解具体用法
console.log('VTTCue.getCueAsHTML API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 8 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 31

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

### Safari iOS

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查VTTCue.getCueAsHTML是否支持
function isVTTCueGetCueAsHTMLSupported() {
    return 'getCueAsHTML' in vttcue && typeof vttcue.getCueAsHTML === 'function';
}

if (isVTTCueGetCueAsHTMLSupported()) {
    console.log('VTTCue.getCueAsHTML 支持');
    // 使用VTTCue.getCueAsHTML
} else {
    console.log('VTTCue.getCueAsHTML 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VTTCue.getCueAsHTML polyfill
if (!vttcue.getCueAsHTML) {
    // 在这里添加polyfill实现
    console.log('加载VTTCue.getCueAsHTML polyfill');
}
```

