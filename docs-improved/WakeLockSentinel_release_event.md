# WakeLockSentinel.release_event API 兼容性数据

## 基本信息

- **API名称**: `WakeLockSentinel.release_event`
- **MDN文档**: [WakeLockSentinel.release_event](https://developer.mozilla.org/docs/Web/API/WakeLockSentinel/release_event)
- **规范文档**: [查看规范](https://w3c.github.io/screen-wake-lock/#the-onrelease-attribute)
- **标签**: `web-features:screen-wake-lock`
- **描述**: `release` event

## 使用示例

### 基本用法

```javascript
// WakeLockSentinel.release_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('WakeLockSentinel.release_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 126 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 18.4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 84

### Firefox

- **支持版本**: 126

### Safari

- **支持版本**: 16.4

### Safari iOS

- **支持版本**: 18.4
- **支持版本**: 16.4
- **移除版本**: 18.4
- **部分实现**: 是
- **注意事项**:
  - Does not work in standalone Home Screen Web Apps. See [bug 254545](https://webkit.org/b/254545#c32).

## 兼容性检查代码

### 特性检测

```javascript
// 检查WakeLockSentinel.release_event是否支持
function isWakeLockSentinelRelease_eventSupported() {
    return 'release_event' in wakelocksentinel && typeof wakelocksentinel.release_event === 'function';
}

if (isWakeLockSentinelRelease_eventSupported()) {
    console.log('WakeLockSentinel.release_event 支持');
    // 使用WakeLockSentinel.release_event
} else {
    console.log('WakeLockSentinel.release_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WakeLockSentinel.release_event polyfill
if (!wakelocksentinel.release_event) {
    // 在这里添加polyfill实现
    console.log('加载WakeLockSentinel.release_event polyfill');
}
```

