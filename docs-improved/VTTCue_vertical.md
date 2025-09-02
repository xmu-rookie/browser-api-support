# VTTCue.vertical API 兼容性数据

## 基本信息

- **API名称**: `VTTCue.vertical`
- **MDN文档**: [VTTCue.vertical](https://developer.mozilla.org/docs/Web/API/VTTCue/vertical)
- **规范文档**: [查看规范](https://w3c.github.io/webvtt/#dom-vttcue-vertical)
- **标签**: `web-features:webvtt-cue-settings`

## 使用示例

### 基本用法

```javascript
// VTTCue.vertical 使用示例
// 请查阅MDN文档了解具体用法
console.log('VTTCue.vertical API');
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
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
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

### Safari

- **支持版本**: 6

### Safari iOS

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查VTTCue.vertical是否支持
function isVTTCueVerticalSupported() {
    return 'vertical' in vttcue && typeof vttcue.vertical === 'function';
}

if (isVTTCueVerticalSupported()) {
    console.log('VTTCue.vertical 支持');
    // 使用VTTCue.vertical
} else {
    console.log('VTTCue.vertical 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VTTCue.vertical polyfill
if (!vttcue.vertical) {
    // 在这里添加polyfill实现
    console.log('加载VTTCue.vertical polyfill');
}
```

