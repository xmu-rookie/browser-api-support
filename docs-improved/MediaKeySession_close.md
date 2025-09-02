# MediaKeySession.close API 兼容性数据

## 基本信息

- **API名称**: `MediaKeySession.close`
- **MDN文档**: [MediaKeySession.close](https://developer.mozilla.org/docs/Web/API/MediaKeySession/close)
- **规范文档**: [查看规范](https://w3c.github.io/encrypted-media/#dom-mediakeysession-close)
- **标签**: `web-features:encrypted-media-extensions`

## 使用示例

### 基本用法

```javascript
// MediaKeySession.close 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaKeySession.close API');
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
// 检查MediaKeySession.close是否支持
function isMediaKeySessionCloseSupported() {
    return 'close' in mediakeysession && typeof mediakeysession.close === 'function';
}

if (isMediaKeySessionCloseSupported()) {
    console.log('MediaKeySession.close 支持');
    // 使用MediaKeySession.close
} else {
    console.log('MediaKeySession.close 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaKeySession.close polyfill
if (!mediakeysession.close) {
    // 在这里添加polyfill实现
    console.log('加载MediaKeySession.close polyfill');
}
```

