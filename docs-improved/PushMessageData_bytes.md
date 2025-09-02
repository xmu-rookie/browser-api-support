# PushMessageData.bytes API 兼容性数据

## 基本信息

- **API名称**: `PushMessageData.bytes`
- **MDN文档**: [PushMessageData.bytes](https://developer.mozilla.org/docs/Web/API/PushMessageData/bytes)
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#dom-pushmessagedata-bytes)
- **标签**: `web-features:push`

## 使用示例

### 基本用法

```javascript
// PushMessageData.bytes 使用示例
// 请查阅MDN文档了解具体用法
console.log('PushMessageData.bytes API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 132 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 128 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 132

### Firefox

- **支持版本**: 128

### Safari

- **支持版本**: 18

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PushMessageData.bytes是否支持
function isPushMessageDataBytesSupported() {
    return 'bytes' in pushmessagedata && typeof pushmessagedata.bytes === 'function';
}

if (isPushMessageDataBytesSupported()) {
    console.log('PushMessageData.bytes 支持');
    // 使用PushMessageData.bytes
} else {
    console.log('PushMessageData.bytes 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PushMessageData.bytes polyfill
if (!pushmessagedata.bytes) {
    // 在这里添加polyfill实现
    console.log('加载PushMessageData.bytes polyfill');
}
```

