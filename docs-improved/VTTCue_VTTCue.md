# VTTCue.VTTCue API 兼容性数据

## 基本信息

- **API名称**: `VTTCue.VTTCue`
- **MDN文档**: [VTTCue.VTTCue](https://developer.mozilla.org/docs/Web/API/VTTCue/VTTCue)
- **规范文档**: [查看规范](https://w3c.github.io/webvtt/#dom-vttcue-vttcue)
- **标签**: `web-features:webvtt`
- **描述**: `VTTCue()` constructor

## 使用示例

### 基本用法

```javascript
// VTTCue.VTTCue 使用示例
// 请查阅MDN文档了解具体用法
console.log('VTTCue.VTTCue API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33

### Firefox

- **支持版本**: 31

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查VTTCue.VTTCue是否支持
function isVTTCueVTTCueSupported() {
    return 'VTTCue' in vttcue && typeof vttcue.VTTCue === 'function';
}

if (isVTTCueVTTCueSupported()) {
    console.log('VTTCue.VTTCue 支持');
    // 使用VTTCue.VTTCue
} else {
    console.log('VTTCue.VTTCue 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VTTCue.VTTCue polyfill
if (!vttcue.VTTCue) {
    // 在这里添加polyfill实现
    console.log('加载VTTCue.VTTCue polyfill');
}
```

