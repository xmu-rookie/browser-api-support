# clearTimeout.worker_support API 兼容性数据

## 基本信息

- **API名称**: `clearTimeout.worker_support`
- **标签**: `web-features:settimeout`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// clearTimeout.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('clearTimeout.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 11.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 3

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 11.7.0

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查clearTimeout.worker_support是否支持
function isclearTimeoutWorker_supportSupported() {
    return 'worker_support' in cleartimeout && typeof cleartimeout.worker_support === 'function';
}

if (isclearTimeoutWorker_supportSupported()) {
    console.log('clearTimeout.worker_support 支持');
    // 使用clearTimeout.worker_support
} else {
    console.log('clearTimeout.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// clearTimeout.worker_support polyfill
if (!cleartimeout.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载clearTimeout.worker_support polyfill');
}
```

