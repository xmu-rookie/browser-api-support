# PresentationConnection.state API 兼容性数据

## 基本信息

- **API名称**: `PresentationConnection.state`
- **MDN文档**: [PresentationConnection.state](https://developer.mozilla.org/docs/Web/API/PresentationConnection/state)
- **规范文档**: [查看规范](https://w3c.github.io/presentation-api/#dom-presentationconnection-state)
- **标签**: `web-features:presentation-api`

## 使用示例

### 基本用法

```javascript
// PresentationConnection.state 使用示例
// 请查阅MDN文档了解具体用法
console.log('PresentationConnection.state API');
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
// 检查PresentationConnection.state是否支持
function isPresentationConnectionStateSupported() {
    return 'state' in presentationconnection && typeof presentationconnection.state === 'function';
}

if (isPresentationConnectionStateSupported()) {
    console.log('PresentationConnection.state 支持');
    // 使用PresentationConnection.state
} else {
    console.log('PresentationConnection.state 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PresentationConnection.state polyfill
if (!presentationconnection.state) {
    // 在这里添加polyfill实现
    console.log('加载PresentationConnection.state polyfill');
}
```

