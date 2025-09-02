# ProgressEvent.worker_support API 兼容性数据

## 基本信息

- **API名称**: `ProgressEvent.worker_support`
- **标签**: `web-features:xhr`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// ProgressEvent.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('ProgressEvent.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 | Available in dedicated workers and shared workers, not available in service workers. See [bug 332663... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 54 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 47
- **部分实现**: 是
- **注意事项**:
  - Available in dedicated workers and shared workers, not available in service workers. See [bug 332663431](https://crbug.com/332663431).

### Firefox

- **支持版本**: 54

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查ProgressEvent.worker_support是否支持
function isProgressEventWorker_supportSupported() {
    return 'worker_support' in progressevent && typeof progressevent.worker_support === 'function';
}

if (isProgressEventWorker_supportSupported()) {
    console.log('ProgressEvent.worker_support 支持');
    // 使用ProgressEvent.worker_support
} else {
    console.log('ProgressEvent.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ProgressEvent.worker_support polyfill
if (!progressevent.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载ProgressEvent.worker_support polyfill');
}
```

