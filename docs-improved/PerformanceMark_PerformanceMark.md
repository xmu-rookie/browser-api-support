# PerformanceMark.PerformanceMark API 兼容性数据

## 基本信息

- **API名称**: `PerformanceMark.PerformanceMark`
- **MDN文档**: [PerformanceMark.PerformanceMark](https://developer.mozilla.org/docs/Web/API/PerformanceMark/PerformanceMark)
- **规范文档**: [查看规范](https://w3c.github.io/user-timing/#dom-performancemark-constructor)
- **标签**: `web-features:performance`
- **描述**: `PerformanceMark()` constructor

## 使用示例

### 基本用法

```javascript
// PerformanceMark.PerformanceMark 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceMark.PerformanceMark API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.22 |  |
| Chrome | 76 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.2 |  |
| Edge | 同主版本 |  |
| Firefox | 101 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 79 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.22

### Chrome

- **支持版本**: 76

### Deno

- **支持版本**: 1.2

### Firefox

- **支持版本**: 101

### Node.js

- **支持版本**: 16.0.0

### Safari

- **支持版本**: 14.1

### WebView Android

- **支持版本**: 79

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceMark.PerformanceMark是否支持
function isPerformanceMarkPerformanceMarkSupported() {
    return 'PerformanceMark' in performancemark && typeof performancemark.PerformanceMark === 'function';
}

if (isPerformanceMarkPerformanceMarkSupported()) {
    console.log('PerformanceMark.PerformanceMark 支持');
    // 使用PerformanceMark.PerformanceMark
} else {
    console.log('PerformanceMark.PerformanceMark 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceMark.PerformanceMark polyfill
if (!performancemark.PerformanceMark) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceMark.PerformanceMark polyfill');
}
```

