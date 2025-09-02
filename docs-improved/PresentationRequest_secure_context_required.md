# PresentationRequest.secure_context_required API 兼容性数据

## 基本信息

- **API名称**: `PresentationRequest.secure_context_required`
- **标签**: `web-features:presentation-api`
- **描述**: Secure context required

## 使用示例

### 基本用法

```javascript
// PresentationRequest.secure_context_required 使用示例
// 请查阅MDN文档了解具体用法
console.log('PresentationRequest.secure_context_required API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 51 |  |
| Firefox Android | 51 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 51
- **移除版本**: 61

### Firefox Android

- **支持版本**: 51
- **移除版本**: 79

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PresentationRequest.secure_context_required是否支持
function isPresentationRequestSecure_context_requiredSupported() {
    return 'secure_context_required' in presentationrequest && typeof presentationrequest.secure_context_required === 'function';
}

if (isPresentationRequestSecure_context_requiredSupported()) {
    console.log('PresentationRequest.secure_context_required 支持');
    // 使用PresentationRequest.secure_context_required
} else {
    console.log('PresentationRequest.secure_context_required 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PresentationRequest.secure_context_required polyfill
if (!presentationrequest.secure_context_required) {
    // 在这里添加polyfill实现
    console.log('加载PresentationRequest.secure_context_required polyfill');
}
```

