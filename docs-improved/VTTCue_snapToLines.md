# VTTCue.snapToLines API 兼容性数据

## 基本信息

- **API名称**: `VTTCue.snapToLines`
- **MDN文档**: [VTTCue.snapToLines](https://developer.mozilla.org/docs/Web/API/VTTCue/snapToLines)
- **规范文档**: [查看规范](https://w3c.github.io/webvtt/#dom-vttcue-snaptolines)
- **标签**: `web-features:webvtt-cue-settings`

## 使用示例

### 基本用法

```javascript
// VTTCue.snapToLines 使用示例
// 请查阅MDN文档了解具体用法
console.log('VTTCue.snapToLines API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
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

### Firefox

- **支持版本**: 31

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
// 检查VTTCue.snapToLines是否支持
function isVTTCueSnapToLinesSupported() {
    return 'snapToLines' in vttcue && typeof vttcue.snapToLines === 'function';
}

if (isVTTCueSnapToLinesSupported()) {
    console.log('VTTCue.snapToLines 支持');
    // 使用VTTCue.snapToLines
} else {
    console.log('VTTCue.snapToLines 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VTTCue.snapToLines polyfill
if (!vttcue.snapToLines) {
    // 在这里添加polyfill实现
    console.log('加载VTTCue.snapToLines polyfill');
}
```

