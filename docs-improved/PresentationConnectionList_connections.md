# PresentationConnectionList.connections API 兼容性数据

## 基本信息

- **API名称**: `PresentationConnectionList.connections`
- **规范文档**: [查看规范](https://w3c.github.io/presentation-api/#dom-presentationconnectionlist-connections)
- **标签**: `web-features:presentation-api`

## 使用示例

### 基本用法

```javascript
// PresentationConnectionList.connections 使用示例
// 请查阅MDN文档了解具体用法
console.log('PresentationConnectionList.connections API');
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
// 检查PresentationConnectionList.connections是否支持
function isPresentationConnectionListConnectionsSupported() {
    return 'connections' in presentationconnectionlist && typeof presentationconnectionlist.connections === 'function';
}

if (isPresentationConnectionListConnectionsSupported()) {
    console.log('PresentationConnectionList.connections 支持');
    // 使用PresentationConnectionList.connections
} else {
    console.log('PresentationConnectionList.connections 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PresentationConnectionList.connections polyfill
if (!presentationconnectionlist.connections) {
    // 在这里添加polyfill实现
    console.log('加载PresentationConnectionList.connections polyfill');
}
```

