# MediaKeySession.update API 兼容性数据

## 基本信息

- **API名称**: `MediaKeySession.update`
- **MDN文档**: [MediaKeySession.update](https://developer.mozilla.org/docs/Web/API/MediaKeySession/update)
- **规范文档**: [查看规范](https://w3c.github.io/encrypted-media/#dom-mediakeysession-update)
- **标签**: `web-features:encrypted-media-extensions`

## 使用示例

### 基本用法

```javascript
// MediaKeySession.update 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaKeySession.update API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 38 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 43 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 42

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 38

### Safari

- **支持版本**: 12.1

### WebView Android

- **支持版本**: 43

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaKeySession.update是否支持
function isMediaKeySessionUpdateSupported() {
    return 'update' in mediakeysession && typeof mediakeysession.update === 'function';
}

if (isMediaKeySessionUpdateSupported()) {
    console.log('MediaKeySession.update 支持');
    // 使用MediaKeySession.update
} else {
    console.log('MediaKeySession.update 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaKeySession.update polyfill
if (!mediakeysession.update) {
    // 在这里添加polyfill实现
    console.log('加载MediaKeySession.update polyfill');
}
```

