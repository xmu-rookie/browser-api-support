# Clients.openWindow API 兼容性数据

## 基本信息

- **API名称**: `Clients.openWindow`
- **MDN文档**: [Clients.openWindow](https://developer.mozilla.org/docs/Web/API/Clients/openWindow)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#clients-openwindow)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// Clients.openWindow 使用示例
// 请查阅MDN文档了解具体用法
console.log('Clients.openWindow API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 | Before Chrome 43, this method could only open URLs on the same origin.; Since Chrome 51, URLs may op... |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 38 |  |
| Opera Android | 41 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40
- **注意事项**:
  - Before Chrome 43, this method could only open URLs on the same origin.
  - Since Chrome 51, URLs may open inside an existing browsing context provided by a standalone web app.

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Opera

- **支持版本**: 38

### Opera Android

- **支持版本**: 41

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Clients.openWindow是否支持
function isClientsOpenWindowSupported() {
    return 'openWindow' in clients && typeof clients.openWindow === 'function';
}

if (isClientsOpenWindowSupported()) {
    console.log('Clients.openWindow 支持');
    // 使用Clients.openWindow
} else {
    console.log('Clients.openWindow 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Clients.openWindow polyfill
if (!clients.openWindow) {
    // 在这里添加polyfill实现
    console.log('加载Clients.openWindow polyfill');
}
```

