# Performance.measure.returns_performancemeasure API 兼容性数据

## 基本信息

- **API名称**: `Performance.measure.returns_performancemeasure`
- **标签**: `web-features:performance`
- **描述**: Returns `PerformanceMeasure`

## 使用示例

### 基本用法

```javascript
// Performance.measure.returns_performancemeasure 使用示例
// 请查阅MDN文档了解具体用法
console.log('Performance.measure.returns_performancemeasure API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.22 |  |
| Chrome | 78 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.2 |  |
| Edge | 同主版本 |  |
| Firefox | 103 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 8.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.22

### Chrome

- **支持版本**: 78

### Deno

- **支持版本**: 1.2

### Firefox

- **支持版本**: 103

### Node.js

- **支持版本**: 8.5.0

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Performance.measure.returns_performancemeasure是否支持
function isPerformanceMeasureSupported() {
    return 'measure' in performance && typeof performance.measure === 'function';
}

if (isPerformanceMeasureSupported()) {
    console.log('Performance.measure.returns_performancemeasure 支持');
    // 使用Performance.measure.returns_performancemeasure
} else {
    console.log('Performance.measure.returns_performancemeasure 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Performance.measure.returns_performancemeasure polyfill
if (!performance.measure) {
    // 在这里添加polyfill实现
    console.log('加载Performance.measure.returns_performancemeasure polyfill');
}
```

