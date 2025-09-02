# TextEncoder.worker_support API 兼容性数据

## 基本信息

- **API名称**: `TextEncoder.worker_support`
- **标签**: `web-features:text-encoding`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// TextEncoder.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextEncoder.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 20 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 11.7.0 |  |
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

- **支持版本**: 38

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 20

### Node.js

- **支持版本**: 11.7.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextEncoder.worker_support是否支持
function isTextEncoderWorker_supportSupported() {
    return 'worker_support' in textencoder && typeof textencoder.worker_support === 'function';
}

if (isTextEncoderWorker_supportSupported()) {
    console.log('TextEncoder.worker_support 支持');
    // 使用TextEncoder.worker_support
} else {
    console.log('TextEncoder.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextEncoder.worker_support polyfill
if (!textencoder.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载TextEncoder.worker_support polyfill');
}
```

