# HID.worker_support API 兼容性数据

## 基本信息

- **API名称**: `HID.worker_support`
- **标签**: `web-features:webhid`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// HID.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('HID.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 131 | Dedicated workers and WebExtension service workers, not shared workers and non-WebExtension service ... |
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

- **支持版本**: 131
- **部分实现**: 是
- **注意事项**:
  - Dedicated workers and WebExtension service workers, not shared workers and non-WebExtension service workers.
- **支持版本**: 117
- **移除版本**: 131
- **部分实现**: 是
- **注意事项**:
  - WebExtension service workers only.

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HID.worker_support是否支持
function isHIDWorker_supportSupported() {
    return 'worker_support' in hid && typeof hid.worker_support === 'function';
}

if (isHIDWorker_supportSupported()) {
    console.log('HID.worker_support 支持');
    // 使用HID.worker_support
} else {
    console.log('HID.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HID.worker_support polyfill
if (!hid.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载HID.worker_support polyfill');
}
```

