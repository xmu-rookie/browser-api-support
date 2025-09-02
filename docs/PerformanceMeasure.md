# PerformanceMeasure API 兼容性数据

## 基本信息

- **API名称**: `PerformanceMeasure`
- **MDN文档**: [PerformanceMeasure](https://developer.mozilla.org/docs/Web/API/PerformanceMeasure)
- **规范文档**: [查看规范](https://w3c.github.io/user-timing/#performancemeasure)
- **标签**: `web-features:performance`

## 使用示例

### 基本用法

```javascript
// PerformanceMeasure 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceMeasure API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.22 |  |
| Chrome | 25 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.2 |  |
| Edge | 12 |  |
| Firefox | 38 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 33 |  |
| Opera Android | 33 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.22

### Chrome

- **支持版本**: 25

### deno

- **支持版本**: 1.2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 38

### Internet Explorer

- **支持版本**: 10

### Node.js


### Opera

- **支持版本**: 33

### Opera Android

- **支持版本**: 33

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceMeasure是否支持
function isPerformanceMeasureSupported() {
    return 'PerformanceMeasure' in window || typeof PerformanceMeasure !== 'undefined';
}

if (isPerformanceMeasureSupported()) {
    console.log('PerformanceMeasure 支持');
    // 使用PerformanceMeasure
} else {
    console.log('PerformanceMeasure 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceMeasure polyfill
if (!window.PerformanceMeasure) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceMeasure polyfill');
}
```

