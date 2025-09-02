# WindowClient.navigate API 兼容性数据

## 基本信息

- **API名称**: `WindowClient.navigate`
- **MDN文档**: [WindowClient.navigate](https://developer.mozilla.org/docs/Web/API/WindowClient/navigate)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#client-navigate)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// WindowClient.navigate 使用示例
// 请查阅MDN文档了解具体用法
console.log('WindowClient.navigate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 4.0 |  |
| WebView Android | 42 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 16
- **支持版本**: 11.1
- **移除版本**: 16
- **部分实现**: 是
- **注意事项**:
  - This method exists, but always throws `NotSupportedError`.

### Samsung Internet

- **支持版本**: 4.0

### WebView Android

- **支持版本**: 42

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WindowClient.navigate是否支持
function isWindowClientNavigateSupported() {
    return 'navigate' in windowclient && typeof windowclient.navigate === 'function';
}

if (isWindowClientNavigateSupported()) {
    console.log('WindowClient.navigate 支持');
    // 使用WindowClient.navigate
} else {
    console.log('WindowClient.navigate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WindowClient.navigate polyfill
if (!windowclient.navigate) {
    // 在这里添加polyfill实现
    console.log('加载WindowClient.navigate polyfill');
}
```

