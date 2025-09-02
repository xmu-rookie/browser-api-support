# NDEFRecord.secure_context_required API 兼容性数据

## 基本信息

- **API名称**: `NDEFRecord.secure_context_required`
- **标签**: `web-features:web-nfc`
- **描述**: Secure context required

## 使用示例

### 基本用法

```javascript
// NDEFRecord.secure_context_required 使用示例
// 请查阅MDN文档了解具体用法
console.log('NDEFRecord.secure_context_required API');
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
// 检查NDEFRecord.secure_context_required是否支持
function isNDEFRecordSecure_context_requiredSupported() {
    return 'secure_context_required' in ndefrecord && typeof ndefrecord.secure_context_required === 'function';
}

if (isNDEFRecordSecure_context_requiredSupported()) {
    console.log('NDEFRecord.secure_context_required 支持');
    // 使用NDEFRecord.secure_context_required
} else {
    console.log('NDEFRecord.secure_context_required 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NDEFRecord.secure_context_required polyfill
if (!ndefrecord.secure_context_required) {
    // 在这里添加polyfill实现
    console.log('加载NDEFRecord.secure_context_required polyfill');
}
```

