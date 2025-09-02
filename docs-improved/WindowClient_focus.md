# WindowClient.focus API 兼容性数据

## 基本信息

- **API名称**: `WindowClient.focus`
- **MDN文档**: [WindowClient.focus](https://developer.mozilla.org/docs/Web/API/WindowClient/focus)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#client-focus)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// WindowClient.focus 使用示例
// 请查阅MDN文档了解具体用法
console.log('WindowClient.focus API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 42

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WindowClient.focus是否支持
function isWindowClientFocusSupported() {
    return 'focus' in windowclient && typeof windowclient.focus === 'function';
}

if (isWindowClientFocusSupported()) {
    console.log('WindowClient.focus 支持');
    // 使用WindowClient.focus
} else {
    console.log('WindowClient.focus 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WindowClient.focus polyfill
if (!windowclient.focus) {
    // 在这里添加polyfill实现
    console.log('加载WindowClient.focus polyfill');
}
```

