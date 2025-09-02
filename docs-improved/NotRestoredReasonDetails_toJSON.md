# NotRestoredReasonDetails.toJSON API 兼容性数据

## 基本信息

- **API名称**: `NotRestoredReasonDetails.toJSON`
- **MDN文档**: [NotRestoredReasonDetails.toJSON](https://developer.mozilla.org/docs/Web/API/NotRestoredReasonDetails/toJSON)
- **标签**: `web-features:bfcache-blocking-reasons`

## 使用示例

### 基本用法

```javascript
// NotRestoredReasonDetails.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('NotRestoredReasonDetails.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
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
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 125

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NotRestoredReasonDetails.toJSON是否支持
function isNotRestoredReasonDetailsToJSONSupported() {
    return 'toJSON' in notrestoredreasondetails && typeof notrestoredreasondetails.toJSON === 'function';
}

if (isNotRestoredReasonDetailsToJSONSupported()) {
    console.log('NotRestoredReasonDetails.toJSON 支持');
    // 使用NotRestoredReasonDetails.toJSON
} else {
    console.log('NotRestoredReasonDetails.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NotRestoredReasonDetails.toJSON polyfill
if (!notrestoredreasondetails.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载NotRestoredReasonDetails.toJSON polyfill');
}
```

