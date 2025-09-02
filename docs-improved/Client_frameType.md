# Client.frameType API 兼容性数据

## 基本信息

- **API名称**: `Client.frameType`
- **MDN文档**: [Client.frameType](https://developer.mozilla.org/docs/Web/API/Client/frameType)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#client-frametype)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// Client.frameType 使用示例
// 请查阅MDN文档了解具体用法
console.log('Client.frameType API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 43

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Client.frameType是否支持
function isClientFrameTypeSupported() {
    return 'frameType' in client && typeof client.frameType === 'function';
}

if (isClientFrameTypeSupported()) {
    console.log('Client.frameType 支持');
    // 使用Client.frameType
} else {
    console.log('Client.frameType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Client.frameType polyfill
if (!client.frameType) {
    // 在这里添加polyfill实现
    console.log('加载Client.frameType polyfill');
}
```

