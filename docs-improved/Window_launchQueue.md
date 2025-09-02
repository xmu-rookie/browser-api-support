# Window.launchQueue API 兼容性数据

## 基本信息

- **API名称**: `Window.launchQueue`
- **MDN文档**: [Window.launchQueue](https://developer.mozilla.org/docs/Web/API/Window/launchQueue)
- **规范文档**: [查看规范](https://wicg.github.io/web-app-launch/#launchqueue-interface)
- **标签**: `web-features:app-launch-handler`

## 使用示例

### 基本用法

```javascript
// Window.launchQueue 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.launchQueue API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 不支持 |  |
| Deno | 不支持 |  |
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

- **支持版本**: 102

### Chrome Android

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.launchQueue是否支持
function isWindowLaunchQueueSupported() {
    return 'launchQueue' in window && typeof window.launchQueue === 'function';
}

if (isWindowLaunchQueueSupported()) {
    console.log('Window.launchQueue 支持');
    // 使用Window.launchQueue
} else {
    console.log('Window.launchQueue 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.launchQueue polyfill
if (!window.launchQueue) {
    // 在这里添加polyfill实现
    console.log('加载Window.launchQueue polyfill');
}
```

