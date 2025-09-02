# WindowClient API 兼容性数据

## 基本信息

- **API名称**: `WindowClient`
- **MDN文档**: [WindowClient](https://developer.mozilla.org/docs/Web/API/WindowClient)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#windowclient)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// WindowClient 使用示例
// 请查阅MDN文档了解具体用法
console.log('WindowClient API');
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
// 检查WindowClient是否支持
function isWindowClientSupported() {
    return 'WindowClient' in window || typeof WindowClient !== 'undefined';
}

if (isWindowClientSupported()) {
    console.log('WindowClient 支持');
    // 使用WindowClient
} else {
    console.log('WindowClient 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WindowClient polyfill
if (!window.WindowClient) {
    // 在这里添加polyfill实现
    console.log('加载WindowClient polyfill');
}
```

