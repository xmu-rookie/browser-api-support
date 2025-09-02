# NavigationPreloadManager.getState API 兼容性数据

## 基本信息

- **API名称**: `NavigationPreloadManager.getState`
- **MDN文档**: [NavigationPreloadManager.getState](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/getState)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#dom-navigationpreloadmanager-getstate)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// NavigationPreloadManager.getState 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigationPreloadManager.getState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 99 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 59

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 99

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查NavigationPreloadManager.getState是否支持
function isNavigationPreloadManagerGetStateSupported() {
    return 'getState' in navigationpreloadmanager && typeof navigationpreloadmanager.getState === 'function';
}

if (isNavigationPreloadManagerGetStateSupported()) {
    console.log('NavigationPreloadManager.getState 支持');
    // 使用NavigationPreloadManager.getState
} else {
    console.log('NavigationPreloadManager.getState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigationPreloadManager.getState polyfill
if (!navigationpreloadmanager.getState) {
    // 在这里添加polyfill实现
    console.log('加载NavigationPreloadManager.getState polyfill');
}
```

