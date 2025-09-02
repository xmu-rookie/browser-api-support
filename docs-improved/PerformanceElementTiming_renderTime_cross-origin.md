# PerformanceElementTiming.renderTime.cross-origin API 兼容性数据

## 基本信息

- **API名称**: `PerformanceElementTiming.renderTime.cross-origin`
- **MDN文档**: [PerformanceElementTiming.renderTime.cross-origin](https://developer.mozilla.org/docs/Web/API/PerformanceElementTiming/renderTime#cross-origin_image_render_time)
- **标签**: `web-features:element-timing`
- **描述**: Cross-origin

## 使用示例

### 基本用法

```javascript
// PerformanceElementTiming.renderTime.cross-origin 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceElementTiming.renderTime.cross-origin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 133 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 133

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceElementTiming.renderTime.cross-origin是否支持
function isPerformanceElementTimingRenderTimeSupported() {
    return 'renderTime' in performanceelementtiming && typeof performanceelementtiming.renderTime === 'function';
}

if (isPerformanceElementTimingRenderTimeSupported()) {
    console.log('PerformanceElementTiming.renderTime.cross-origin 支持');
    // 使用PerformanceElementTiming.renderTime.cross-origin
} else {
    console.log('PerformanceElementTiming.renderTime.cross-origin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceElementTiming.renderTime.cross-origin polyfill
if (!performanceelementtiming.renderTime) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceElementTiming.renderTime.cross-origin polyfill');
}
```

