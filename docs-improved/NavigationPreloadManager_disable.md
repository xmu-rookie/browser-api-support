# NavigationPreloadManager.disable API 兼容性数据

## 基本信息

- **API名称**: `NavigationPreloadManager.disable`
- **MDN文档**: [NavigationPreloadManager.disable](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/disable)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#dom-navigationpreloadmanager-disable)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// NavigationPreloadManager.disable 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigationPreloadManager.disable API');
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
// 检查NavigationPreloadManager.disable是否支持
function isNavigationPreloadManagerDisableSupported() {
    return 'disable' in navigationpreloadmanager && typeof navigationpreloadmanager.disable === 'function';
}

if (isNavigationPreloadManagerDisableSupported()) {
    console.log('NavigationPreloadManager.disable 支持');
    // 使用NavigationPreloadManager.disable
} else {
    console.log('NavigationPreloadManager.disable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigationPreloadManager.disable polyfill
if (!navigationpreloadmanager.disable) {
    // 在这里添加polyfill实现
    console.log('加载NavigationPreloadManager.disable polyfill');
}
```

