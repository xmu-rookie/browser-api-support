# BackgroundFetchManager.fetch API 兼容性数据

## 基本信息

- **API名称**: `BackgroundFetchManager.fetch`
- **MDN文档**: [BackgroundFetchManager.fetch](https://developer.mozilla.org/docs/Web/API/BackgroundFetchManager/fetch)
- **规范文档**: [查看规范](https://wicg.github.io/background-fetch/#background-fetch-manager-fetch)
- **标签**: `web-features:background-fetch`

## 使用示例

### 基本用法

```javascript
// BackgroundFetchManager.fetch 使用示例
// 请查阅MDN文档了解具体用法
console.log('BackgroundFetchManager.fetch API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
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

- **支持版本**: 74

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查BackgroundFetchManager.fetch是否支持
function isBackgroundFetchManagerFetchSupported() {
    return 'fetch' in backgroundfetchmanager && typeof backgroundfetchmanager.fetch === 'function';
}

if (isBackgroundFetchManagerFetchSupported()) {
    console.log('BackgroundFetchManager.fetch 支持');
    // 使用BackgroundFetchManager.fetch
} else {
    console.log('BackgroundFetchManager.fetch 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BackgroundFetchManager.fetch polyfill
if (!backgroundfetchmanager.fetch) {
    // 在这里添加polyfill实现
    console.log('加载BackgroundFetchManager.fetch polyfill');
}
```

