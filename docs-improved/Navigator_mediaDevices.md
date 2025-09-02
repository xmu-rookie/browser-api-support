# Navigator.mediaDevices API 兼容性数据

## 基本信息

- **API名称**: `Navigator.mediaDevices`
- **MDN文档**: [Navigator.mediaDevices](https://developer.mozilla.org/docs/Web/API/Navigator/mediaDevices)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#mediadevices)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// Navigator.mediaDevices 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.mediaDevices API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 36 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 47

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 36

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.mediaDevices是否支持
function isNavigatorMediaDevicesSupported() {
    return 'mediaDevices' in navigator && typeof navigator.mediaDevices === 'function';
}

if (isNavigatorMediaDevicesSupported()) {
    console.log('Navigator.mediaDevices 支持');
    // 使用Navigator.mediaDevices
} else {
    console.log('Navigator.mediaDevices 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.mediaDevices polyfill
if (!navigator.mediaDevices) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.mediaDevices polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **secure_context_required**: Secure context required

