# PerformancePaintTiming.first-paint API 兼容性数据

## 基本信息

- **API名称**: `PerformancePaintTiming.first-paint`
- **MDN文档**: [PerformancePaintTiming.first-paint](https://developer.mozilla.org/docs/Glossary/First_paint)
- **规范文档**: [查看规范](https://w3c.github.io/paint-timing/#first-paint)
- **标签**: `web-features:paint-timing`
- **描述**: `first-paint` named entry

## 使用示例

### 基本用法

```javascript
// PerformancePaintTiming.first-paint 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformancePaintTiming.first-paint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 116 | See [bug 40066208](https://crbug.com/40066208). |
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

- **支持版本**: 116
- **需要标志**: 
  - --enable-blink-features: SoftNavigationHeuristicsExposeFPAndFCP
- **注意事项**:
  - See [bug 40066208](https://crbug.com/40066208).
- **支持版本**: 60
- **移除版本**: 116

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformancePaintTiming.first-paint是否支持
function isPerformancePaintTimingFirst-paintSupported() {
    return 'first-paint' in performancepainttiming && typeof performancepainttiming.first-paint === 'function';
}

if (isPerformancePaintTimingFirst-paintSupported()) {
    console.log('PerformancePaintTiming.first-paint 支持');
    // 使用PerformancePaintTiming.first-paint
} else {
    console.log('PerformancePaintTiming.first-paint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformancePaintTiming.first-paint polyfill
if (!performancepainttiming.first-paint) {
    // 在这里添加polyfill实现
    console.log('加载PerformancePaintTiming.first-paint polyfill');
}
```

