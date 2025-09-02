# NDEFReadingEvent.secure_context_required API 兼容性数据

## 基本信息

- **API名称**: `NDEFReadingEvent.secure_context_required`
- **标签**: `web-features:web-nfc`
- **描述**: Secure context required

## 使用示例

### 基本用法

```javascript
// NDEFReadingEvent.secure_context_required 使用示例
// 请查阅MDN文档了解具体用法
console.log('NDEFReadingEvent.secure_context_required API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 89 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Chrome Android

- **支持版本**: 89

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NDEFReadingEvent.secure_context_required是否支持
function isNDEFReadingEventSecure_context_requiredSupported() {
    return 'secure_context_required' in ndefreadingevent && typeof ndefreadingevent.secure_context_required === 'function';
}

if (isNDEFReadingEventSecure_context_requiredSupported()) {
    console.log('NDEFReadingEvent.secure_context_required 支持');
    // 使用NDEFReadingEvent.secure_context_required
} else {
    console.log('NDEFReadingEvent.secure_context_required 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NDEFReadingEvent.secure_context_required polyfill
if (!ndefreadingevent.secure_context_required) {
    // 在这里添加polyfill实现
    console.log('加载NDEFReadingEvent.secure_context_required polyfill');
}
```

