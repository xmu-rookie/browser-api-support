# PresentationRequest.PresentationRequest API 兼容性数据

## 基本信息

- **API名称**: `PresentationRequest.PresentationRequest`
- **MDN文档**: [PresentationRequest.PresentationRequest](https://developer.mozilla.org/docs/Web/API/PresentationRequest/PresentationRequest)
- **规范文档**: [查看规范](https://w3c.github.io/presentation-api/#constructing-a-presentationrequest)
- **标签**: `web-features:presentation-api`
- **描述**: `PresentationRequest()` constructor

## 使用示例

### 基本用法

```javascript
// PresentationRequest.PresentationRequest 使用示例
// 请查阅MDN文档了解具体用法
console.log('PresentationRequest.PresentationRequest API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 47

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PresentationRequest.PresentationRequest是否支持
function isPresentationRequestPresentationRequestSupported() {
    return 'PresentationRequest' in presentationrequest && typeof presentationrequest.PresentationRequest === 'function';
}

if (isPresentationRequestPresentationRequestSupported()) {
    console.log('PresentationRequest.PresentationRequest 支持');
    // 使用PresentationRequest.PresentationRequest
} else {
    console.log('PresentationRequest.PresentationRequest 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PresentationRequest.PresentationRequest polyfill
if (!presentationrequest.PresentationRequest) {
    // 在这里添加polyfill实现
    console.log('加载PresentationRequest.PresentationRequest polyfill');
}
```

