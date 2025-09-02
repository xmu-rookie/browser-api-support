# MediaRecorderErrorEvent.error API 兼容性数据

## 基本信息

- **API名称**: `MediaRecorderErrorEvent.error`
- **MDN文档**: [MediaRecorderErrorEvent.error](https://developer.mozilla.org/docs/Web/API/MediaRecorderErrorEvent/error)

## 使用示例

### 基本用法

```javascript
// MediaRecorderErrorEvent.error 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaRecorderErrorEvent.error API');
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
// 检查MediaRecorderErrorEvent.error是否支持
function isMediaRecorderErrorEventErrorSupported() {
    return 'error' in mediarecordererrorevent && typeof mediarecordererrorevent.error === 'function';
}

if (isMediaRecorderErrorEventErrorSupported()) {
    console.log('MediaRecorderErrorEvent.error 支持');
    // 使用MediaRecorderErrorEvent.error
} else {
    console.log('MediaRecorderErrorEvent.error 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaRecorderErrorEvent.error polyfill
if (!mediarecordererrorevent.error) {
    // 在这里添加polyfill实现
    console.log('加载MediaRecorderErrorEvent.error polyfill');
}
```

