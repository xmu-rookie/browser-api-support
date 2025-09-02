# ImageData.worker_support API 兼容性数据

## 基本信息

- **API名称**: `ImageData.worker_support`
- **标签**: `web-features:canvas-2d`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// ImageData.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageData.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 36 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.39 |  |
| Edge | 14 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 36

### Deno

- **支持版本**: 1.39

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageData.worker_support是否支持
function isImageDataWorker_supportSupported() {
    return 'worker_support' in imagedata && typeof imagedata.worker_support === 'function';
}

if (isImageDataWorker_supportSupported()) {
    console.log('ImageData.worker_support 支持');
    // 使用ImageData.worker_support
} else {
    console.log('ImageData.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageData.worker_support polyfill
if (!imagedata.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载ImageData.worker_support polyfill');
}
```

