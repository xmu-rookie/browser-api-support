# Presentation.receiver API 兼容性数据

## 基本信息

- **API名称**: `Presentation.receiver`
- **MDN文档**: [Presentation.receiver](https://developer.mozilla.org/docs/Web/API/Presentation/receiver)
- **规范文档**: [查看规范](https://w3c.github.io/presentation-api/#dom-presentation-receiver)
- **标签**: `web-features:presentation-api`

## 使用示例

### 基本用法

```javascript
// Presentation.receiver 使用示例
// 请查阅MDN文档了解具体用法
console.log('Presentation.receiver API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
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

- **支持版本**: 59

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Presentation.receiver是否支持
function isPresentationReceiverSupported() {
    return 'receiver' in presentation && typeof presentation.receiver === 'function';
}

if (isPresentationReceiverSupported()) {
    console.log('Presentation.receiver 支持');
    // 使用Presentation.receiver
} else {
    console.log('Presentation.receiver 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Presentation.receiver polyfill
if (!presentation.receiver) {
    // 在这里添加polyfill实现
    console.log('加载Presentation.receiver polyfill');
}
```

