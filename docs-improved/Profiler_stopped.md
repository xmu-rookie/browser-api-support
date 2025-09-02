# Profiler.stopped API 兼容性数据

## 基本信息

- **API名称**: `Profiler.stopped`
- **规范文档**: [查看规范](https://wicg.github.io/js-self-profiling/#dom-profiler-stopped)
- **标签**: `web-features:profiler`

## 使用示例

### 基本用法

```javascript
// Profiler.stopped 使用示例
// 请查阅MDN文档了解具体用法
console.log('Profiler.stopped API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
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

- **支持版本**: 94

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Profiler.stopped是否支持
function isProfilerStoppedSupported() {
    return 'stopped' in profiler && typeof profiler.stopped === 'function';
}

if (isProfilerStoppedSupported()) {
    console.log('Profiler.stopped 支持');
    // 使用Profiler.stopped
} else {
    console.log('Profiler.stopped 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Profiler.stopped polyfill
if (!profiler.stopped) {
    // 在这里添加polyfill实现
    console.log('加载Profiler.stopped polyfill');
}
```

