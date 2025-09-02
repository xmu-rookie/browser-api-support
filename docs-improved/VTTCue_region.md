# VTTCue.region API 兼容性数据

## 基本信息

- **API名称**: `VTTCue.region`
- **MDN文档**: [VTTCue.region](https://developer.mozilla.org/docs/Web/API/VTTCue/region)
- **规范文档**: [查看规范](https://w3c.github.io/webvtt/#dom-vttcue-region)
- **标签**: `web-features:webvtt-regions`

## 使用示例

### 基本用法

```javascript
// VTTCue.region 使用示例
// 请查阅MDN文档了解具体用法
console.log('VTTCue.region API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
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

- **支持版本**: 59

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查VTTCue.region是否支持
function isVTTCueRegionSupported() {
    return 'region' in vttcue && typeof vttcue.region === 'function';
}

if (isVTTCueRegionSupported()) {
    console.log('VTTCue.region 支持');
    // 使用VTTCue.region
} else {
    console.log('VTTCue.region 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VTTCue.region polyfill
if (!vttcue.region) {
    // 在这里添加polyfill实现
    console.log('加载VTTCue.region polyfill');
}
```

