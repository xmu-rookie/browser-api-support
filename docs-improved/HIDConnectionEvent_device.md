# HIDConnectionEvent.device API 兼容性数据

## 基本信息

- **API名称**: `HIDConnectionEvent.device`
- **MDN文档**: [HIDConnectionEvent.device](https://developer.mozilla.org/docs/Web/API/HIDConnectionEvent/device)
- **规范文档**: [查看规范](https://wicg.github.io/webhid/#dom-hidconnectionevent-device)
- **标签**: `web-features:webhid`

## 使用示例

### 基本用法

```javascript
// HIDConnectionEvent.device 使用示例
// 请查阅MDN文档了解具体用法
console.log('HIDConnectionEvent.device API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 89 |  |
| Chrome Android | 不支持 |  |
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

- **支持版本**: 89

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HIDConnectionEvent.device是否支持
function isHIDConnectionEventDeviceSupported() {
    return 'device' in hidconnectionevent && typeof hidconnectionevent.device === 'function';
}

if (isHIDConnectionEventDeviceSupported()) {
    console.log('HIDConnectionEvent.device 支持');
    // 使用HIDConnectionEvent.device
} else {
    console.log('HIDConnectionEvent.device 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HIDConnectionEvent.device polyfill
if (!hidconnectionevent.device) {
    // 在这里添加polyfill实现
    console.log('加载HIDConnectionEvent.device polyfill');
}
```

