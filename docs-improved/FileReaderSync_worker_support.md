# FileReaderSync.worker_support API 兼容性数据

## 基本信息

- **API名称**: `FileReaderSync.worker_support`
- **标签**: `web-features:file`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// FileReaderSync.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileReaderSync.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 7 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 8 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤15 |  |
| Opera Android | ≤14 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 7

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 8

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤15

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileReaderSync.worker_support是否支持
function isFileReaderSyncWorker_supportSupported() {
    return 'worker_support' in filereadersync && typeof filereadersync.worker_support === 'function';
}

if (isFileReaderSyncWorker_supportSupported()) {
    console.log('FileReaderSync.worker_support 支持');
    // 使用FileReaderSync.worker_support
} else {
    console.log('FileReaderSync.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileReaderSync.worker_support polyfill
if (!filereadersync.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载FileReaderSync.worker_support polyfill');
}
```

