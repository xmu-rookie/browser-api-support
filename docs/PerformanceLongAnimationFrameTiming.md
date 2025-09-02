# PerformanceLongAnimationFrameTiming API 兼容性数据

## 基本信息

- **API名称**: `PerformanceLongAnimationFrameTiming`
- **MDN文档**: [PerformanceLongAnimationFrameTiming](https://developer.mozilla.org/docs/Web/API/PerformanceLongAnimationFrameTiming)
- **规范文档**: [查看规范](https://w3c.github.io/long-animation-frames/#sec-PerformanceLongAnimationFrameTiming)
- **标签**: `web-features:long-animation-frames`

## 使用示例

### 基本用法

```javascript
// PerformanceLongAnimationFrameTiming 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceLongAnimationFrameTiming API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 123 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 123

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceLongAnimationFrameTiming是否支持
function isPerformanceLongAnimationFrameTimingSupported() {
    return 'PerformanceLongAnimationFrameTiming' in window || typeof PerformanceLongAnimationFrameTiming !== 'undefined';
}

if (isPerformanceLongAnimationFrameTimingSupported()) {
    console.log('PerformanceLongAnimationFrameTiming 支持');
    // 使用PerformanceLongAnimationFrameTiming
} else {
    console.log('PerformanceLongAnimationFrameTiming 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceLongAnimationFrameTiming polyfill
if (!window.PerformanceLongAnimationFrameTiming) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceLongAnimationFrameTiming polyfill');
}
```

