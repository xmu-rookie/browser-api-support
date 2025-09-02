# WakeLock API 兼容性数据

## 基本信息

- **API名称**: `WakeLock`
- **MDN文档**: [WakeLock](https://developer.mozilla.org/docs/Web/API/WakeLock)
- **规范文档**: [查看规范](https://w3c.github.io/screen-wake-lock/#the-wakelock-interface)
- **标签**: `web-features:screen-wake-lock`

## 使用示例

### 基本用法

```javascript
// WakeLock 使用示例
// 请查阅MDN文档了解具体用法
console.log('WakeLock API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 126 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 未知 |  |
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


## 兼容性检查代码

### 特性检测

```javascript
// 检查WakeLock是否支持
function isWakeLockSupported() {
    return 'WakeLock' in window || typeof WakeLock !== 'undefined';
}

if (isWakeLockSupported()) {
    console.log('WakeLock 支持');
    // 使用WakeLock
} else {
    console.log('WakeLock 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WakeLock polyfill
if (!window.WakeLock) {
    // 在这里添加polyfill实现
    console.log('加载WakeLock polyfill');
}
```

