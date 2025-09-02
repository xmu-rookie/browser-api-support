# MediaRecorderErrorEvent API 兼容性数据

## 基本信息

- **API名称**: `MediaRecorderErrorEvent`
- **MDN文档**: [MediaRecorderErrorEvent](https://developer.mozilla.org/docs/Web/API/MediaRecorderErrorEvent)

## 使用示例

### 基本用法

```javascript
// MediaRecorderErrorEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaRecorderErrorEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 57

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaRecorderErrorEvent是否支持
function isMediaRecorderErrorEventSupported() {
    return 'MediaRecorderErrorEvent' in window || typeof MediaRecorderErrorEvent !== 'undefined';
}

if (isMediaRecorderErrorEventSupported()) {
    console.log('MediaRecorderErrorEvent 支持');
    // 使用MediaRecorderErrorEvent
} else {
    console.log('MediaRecorderErrorEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaRecorderErrorEvent polyfill
if (!window.MediaRecorderErrorEvent) {
    // 在这里添加polyfill实现
    console.log('加载MediaRecorderErrorEvent polyfill');
}
```

