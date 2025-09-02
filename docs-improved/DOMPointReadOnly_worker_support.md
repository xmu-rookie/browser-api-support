# DOMPointReadOnly.worker_support API 兼容性数据

## 基本信息

- **API名称**: `DOMPointReadOnly.worker_support`
- **标签**: `web-features:dom-geometry`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// DOMPointReadOnly.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMPointReadOnly.worker_support API');
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
// 检查DOMPointReadOnly.worker_support是否支持
function isDOMPointReadOnlyWorker_supportSupported() {
    return 'worker_support' in dompointreadonly && typeof dompointreadonly.worker_support === 'function';
}

if (isDOMPointReadOnlyWorker_supportSupported()) {
    console.log('DOMPointReadOnly.worker_support 支持');
    // 使用DOMPointReadOnly.worker_support
} else {
    console.log('DOMPointReadOnly.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMPointReadOnly.worker_support polyfill
if (!dompointreadonly.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载DOMPointReadOnly.worker_support polyfill');
}
```

