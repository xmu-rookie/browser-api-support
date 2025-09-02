# MediaKeyStatusMap.keys API 兼容性数据

## 基本信息

- **API名称**: `MediaKeyStatusMap.keys`
- **MDN文档**: [MediaKeyStatusMap.keys](https://developer.mozilla.org/docs/Web/API/MediaKeyStatusMap/keys)
- **标签**: `web-features:encrypted-media-extensions`

## 使用示例

### 基本用法

```javascript
// MediaKeyStatusMap.keys 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaKeyStatusMap.keys API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 16 |  |
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

- **支持版本**: 16

### Firefox

- **支持版本**: 38

### Safari

- **支持版本**: 12.1

### WebView Android

- **支持版本**: 43

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaKeyStatusMap.keys是否支持
function isMediaKeyStatusMapKeysSupported() {
    return 'keys' in mediakeystatusmap && typeof mediakeystatusmap.keys === 'function';
}

if (isMediaKeyStatusMapKeysSupported()) {
    console.log('MediaKeyStatusMap.keys 支持');
    // 使用MediaKeyStatusMap.keys
} else {
    console.log('MediaKeyStatusMap.keys 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaKeyStatusMap.keys polyfill
if (!mediakeystatusmap.keys) {
    // 在这里添加polyfill实现
    console.log('加载MediaKeyStatusMap.keys polyfill');
}
```

