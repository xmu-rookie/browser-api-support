# VTTCue.align API 兼容性数据

## 基本信息

- **API名称**: `VTTCue.align`
- **MDN文档**: [VTTCue.align](https://developer.mozilla.org/docs/Web/API/VTTCue/align)
- **规范文档**: [查看规范](https://w3c.github.io/webvtt/#dom-vttcue-align)
- **标签**: `web-features:webvtt-cue-settings`

## 使用示例

### 基本用法

```javascript
// VTTCue.align 使用示例
// 请查阅MDN文档了解具体用法
console.log('VTTCue.align API');
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
// 检查VTTCue.align是否支持
function isVTTCueAlignSupported() {
    return 'align' in vttcue && typeof vttcue.align === 'function';
}

if (isVTTCueAlignSupported()) {
    console.log('VTTCue.align 支持');
    // 使用VTTCue.align
} else {
    console.log('VTTCue.align 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VTTCue.align polyfill
if (!vttcue.align) {
    // 在这里添加polyfill实现
    console.log('加载VTTCue.align polyfill');
}
```

