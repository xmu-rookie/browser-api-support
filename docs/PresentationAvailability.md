# PresentationAvailability API 兼容性数据

## 基本信息

- **API名称**: `PresentationAvailability`
- **MDN文档**: [PresentationAvailability](https://developer.mozilla.org/docs/Web/API/PresentationAvailability)
- **规范文档**: [查看规范](https://w3c.github.io/presentation-api/#interface-presentationavailability)
- **标签**: `web-features:presentation-api`

## 使用示例

### 基本用法

```javascript
// PresentationAvailability 使用示例
// 请查阅MDN文档了解具体用法
console.log('PresentationAvailability API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | ❌ 不支持 |  |
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
// 检查PresentationAvailability是否支持
function isPresentationAvailabilitySupported() {
    return 'PresentationAvailability' in window || typeof PresentationAvailability !== 'undefined';
}

if (isPresentationAvailabilitySupported()) {
    console.log('PresentationAvailability 支持');
    // 使用PresentationAvailability
} else {
    console.log('PresentationAvailability 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PresentationAvailability polyfill
if (!window.PresentationAvailability) {
    // 在这里添加polyfill实现
    console.log('加载PresentationAvailability polyfill');
}
```

