# MediaKeySystemAccess.getConfiguration API 兼容性数据

## 基本信息

- **API名称**: `MediaKeySystemAccess.getConfiguration`
- **MDN文档**: [MediaKeySystemAccess.getConfiguration](https://developer.mozilla.org/docs/Web/API/MediaKeySystemAccess/getConfiguration)
- **规范文档**: [查看规范](https://w3c.github.io/encrypted-media/#dom-mediakeysystemaccess-getconfiguration)
- **标签**: `web-features:encrypted-media-extensions`

## 使用示例

### 基本用法

```javascript
// MediaKeySystemAccess.getConfiguration 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaKeySystemAccess.getConfiguration API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 43 | Before Firefox 50, the returned object has neither a `distinctiveIdentifier` nor a `persistentState`... |
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

- **支持版本**: 43
- **注意事项**:
  - Before Firefox 50, the returned object has neither a `distinctiveIdentifier` nor a `persistentState` property.

### Safari

- **支持版本**: 12.1

### WebView Android

- **支持版本**: 43

