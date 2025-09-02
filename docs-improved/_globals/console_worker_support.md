# console.worker_support API 兼容性数据

## 基本信息

- **API名称**: `console.worker_support`
- **标签**: `web-features:console`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// console.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 29 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 11.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 31

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 29

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 11.7.0

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.worker_support是否支持
function isconsoleWorker_supportSupported() {
    return 'worker_support' in console && typeof console.worker_support === 'function';
}

if (isconsoleWorker_supportSupported()) {
    console.log('console.worker_support 支持');
    // 使用console.worker_support
} else {
    console.log('console.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.worker_support polyfill
if (!console.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载console.worker_support polyfill');
}
```

