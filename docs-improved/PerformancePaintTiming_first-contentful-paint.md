# PerformancePaintTiming.first-contentful-paint API 兼容性数据

## 基本信息

- **API名称**: `PerformancePaintTiming.first-contentful-paint`
- **MDN文档**: [PerformancePaintTiming.first-contentful-paint](https://developer.mozilla.org/docs/Glossary/First_contentful_paint)
- **规范文档**: [查看规范](https://w3c.github.io/paint-timing/#first-contentful-paint)
- **标签**: `web-features:paint-timing`
- **描述**: `first-contentful-paint` named entry

## 使用示例

### 基本用法

```javascript
// PerformancePaintTiming.first-contentful-paint 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformancePaintTiming.first-contentful-paint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 116 | See [bug 40066208](https://crbug.com/40066208). |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 84 |  |
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

- **支持版本**: 116
- **需要标志**: 
  - --enable-blink-features: SoftNavigationHeuristicsExposeFPAndFCP
- **注意事项**:
  - See [bug 40066208](https://crbug.com/40066208).
- **支持版本**: 60
- **移除版本**: 116

### Firefox

- **支持版本**: 84

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformancePaintTiming.first-contentful-paint是否支持
function isPerformancePaintTimingFirst-contentful-paintSupported() {
    return 'first-contentful-paint' in performancepainttiming && typeof performancepainttiming.first-contentful-paint === 'function';
}

if (isPerformancePaintTimingFirst-contentful-paintSupported()) {
    console.log('PerformancePaintTiming.first-contentful-paint 支持');
    // 使用PerformancePaintTiming.first-contentful-paint
} else {
    console.log('PerformancePaintTiming.first-contentful-paint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformancePaintTiming.first-contentful-paint polyfill
if (!performancepainttiming.first-contentful-paint) {
    // 在这里添加polyfill实现
    console.log('加载PerformancePaintTiming.first-contentful-paint polyfill');
}
```

