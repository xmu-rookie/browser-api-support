# FileReader.worker_support API 兼容性数据

## 基本信息

- **API名称**: `FileReader.worker_support`
- **标签**: `web-features:file`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// FileReader.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileReader.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.3 |  |
| Edge | 12 |  |
| Firefox | 46 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

### Deno

- **支持版本**: 1.3

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 46

### Internet Explorer

- **支持版本**: 11

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileReader.worker_support是否支持
function isFileReaderWorker_supportSupported() {
    return 'worker_support' in filereader && typeof filereader.worker_support === 'function';
}

if (isFileReaderWorker_supportSupported()) {
    console.log('FileReader.worker_support 支持');
    // 使用FileReader.worker_support
} else {
    console.log('FileReader.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileReader.worker_support polyfill
if (!filereader.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载FileReader.worker_support polyfill');
}
```

