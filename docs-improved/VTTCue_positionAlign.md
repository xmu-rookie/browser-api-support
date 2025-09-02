# VTTCue.positionAlign API 兼容性数据

## 基本信息

- **API名称**: `VTTCue.positionAlign`
- **MDN文档**: [VTTCue.positionAlign](https://developer.mozilla.org/docs/Web/API/VTTCue/positionAlign)
- **规范文档**: [查看规范](https://w3c.github.io/webvtt/#dom-vttcue-positionalign)
- **标签**: `web-features:webvtt-cue-alignment`

## 使用示例

### 基本用法

```javascript
// VTTCue.positionAlign 使用示例
// 请查阅MDN文档了解具体用法
console.log('VTTCue.positionAlign API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 31

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查VTTCue.positionAlign是否支持
function isVTTCuePositionAlignSupported() {
    return 'positionAlign' in vttcue && typeof vttcue.positionAlign === 'function';
}

if (isVTTCuePositionAlignSupported()) {
    console.log('VTTCue.positionAlign 支持');
    // 使用VTTCue.positionAlign
} else {
    console.log('VTTCue.positionAlign 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VTTCue.positionAlign polyfill
if (!vttcue.positionAlign) {
    // 在这里添加polyfill实现
    console.log('加载VTTCue.positionAlign polyfill');
}
```

