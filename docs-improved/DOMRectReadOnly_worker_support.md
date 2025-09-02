# DOMRectReadOnly.worker_support API 兼容性数据

## 基本信息

- **API名称**: `DOMRectReadOnly.worker_support`
- **标签**: `web-features:dom-geometry`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// DOMRectReadOnly.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMRectReadOnly.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 69

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMRectReadOnly.worker_support是否支持
function isDOMRectReadOnlyWorker_supportSupported() {
    return 'worker_support' in domrectreadonly && typeof domrectreadonly.worker_support === 'function';
}

if (isDOMRectReadOnlyWorker_supportSupported()) {
    console.log('DOMRectReadOnly.worker_support 支持');
    // 使用DOMRectReadOnly.worker_support
} else {
    console.log('DOMRectReadOnly.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMRectReadOnly.worker_support polyfill
if (!domrectreadonly.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载DOMRectReadOnly.worker_support polyfill');
}
```

