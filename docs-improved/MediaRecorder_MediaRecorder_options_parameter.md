# MediaRecorder.MediaRecorder.options_parameter API 兼容性数据

## 基本信息

- **API名称**: `MediaRecorder.MediaRecorder.options_parameter`
- **标签**: `web-features:mediastream-recording`
- **描述**: `options` parameter

## 使用示例

### 基本用法

```javascript
// MediaRecorder.MediaRecorder.options_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaRecorder.MediaRecorder.options_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 43 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 14 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Firefox

- **支持版本**: 43

### Safari

- **支持版本**: 14.1

### Safari iOS

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaRecorder.MediaRecorder.options_parameter是否支持
function isMediaRecorderMediaRecorderSupported() {
    return 'MediaRecorder' in mediarecorder && typeof mediarecorder.MediaRecorder === 'function';
}

if (isMediaRecorderMediaRecorderSupported()) {
    console.log('MediaRecorder.MediaRecorder.options_parameter 支持');
    // 使用MediaRecorder.MediaRecorder.options_parameter
} else {
    console.log('MediaRecorder.MediaRecorder.options_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaRecorder.MediaRecorder.options_parameter polyfill
if (!mediarecorder.MediaRecorder) {
    // 在这里添加polyfill实现
    console.log('加载MediaRecorder.MediaRecorder.options_parameter polyfill');
}
```

