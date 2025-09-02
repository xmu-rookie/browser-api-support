# Navigator.mediaDevices.secure_context_required API 兼容性数据

## 基本信息

- **API名称**: `Navigator.mediaDevices.secure_context_required`
- **标签**: `web-features:media-capture`
- **描述**: Secure context required

## 使用示例

### 基本用法

```javascript
// Navigator.mediaDevices.secure_context_required 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.mediaDevices.secure_context_required API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
| Firefox Android | 不支持 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 不支持 |  |
| Opera Android | 不支持 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 74

### Firefox

- **支持版本**: 69

### Firefox Android

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.mediaDevices.secure_context_required是否支持
function isNavigatorMediaDevicesSupported() {
    return 'mediaDevices' in navigator && typeof navigator.mediaDevices === 'function';
}

if (isNavigatorMediaDevicesSupported()) {
    console.log('Navigator.mediaDevices.secure_context_required 支持');
    // 使用Navigator.mediaDevices.secure_context_required
} else {
    console.log('Navigator.mediaDevices.secure_context_required 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.mediaDevices.secure_context_required polyfill
if (!navigator.mediaDevices) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.mediaDevices.secure_context_required polyfill');
}
```

