# HIDDevice.collections API 兼容性数据

## 基本信息

- **API名称**: `HIDDevice.collections`
- **MDN文档**: [HIDDevice.collections](https://developer.mozilla.org/docs/Web/API/HIDDevice/collections)
- **规范文档**: [查看规范](https://wicg.github.io/webhid/#dom-hiddevice-collections)
- **标签**: `web-features:webhid`

## 使用示例

### 基本用法

```javascript
// HIDDevice.collections 使用示例
// 请查阅MDN文档了解具体用法
console.log('HIDDevice.collections API');
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
// 检查HIDDevice.collections是否支持
function isHIDDeviceCollectionsSupported() {
    return 'collections' in hiddevice && typeof hiddevice.collections === 'function';
}

if (isHIDDeviceCollectionsSupported()) {
    console.log('HIDDevice.collections 支持');
    // 使用HIDDevice.collections
} else {
    console.log('HIDDevice.collections 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HIDDevice.collections polyfill
if (!hiddevice.collections) {
    // 在这里添加polyfill实现
    console.log('加载HIDDevice.collections polyfill');
}
```

