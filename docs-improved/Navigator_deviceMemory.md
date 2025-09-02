# Navigator.deviceMemory API 兼容性数据

## 基本信息

- **API名称**: `Navigator.deviceMemory`
- **MDN文档**: [Navigator.deviceMemory](https://developer.mozilla.org/docs/Web/API/Navigator/deviceMemory)
- **规范文档**: [查看规范](https://www.w3.org/TR/device-memory/#sec-device-memory-js-api)
- **标签**: `web-features:device-memory`

## 使用示例

### 基本用法

```javascript
// Navigator.deviceMemory 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.deviceMemory API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 63 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 63

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.deviceMemory是否支持
function isNavigatorDeviceMemorySupported() {
    return 'deviceMemory' in navigator && typeof navigator.deviceMemory === 'function';
}

if (isNavigatorDeviceMemorySupported()) {
    console.log('Navigator.deviceMemory 支持');
    // 使用Navigator.deviceMemory
} else {
    console.log('Navigator.deviceMemory 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.deviceMemory polyfill
if (!navigator.deviceMemory) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.deviceMemory polyfill');
}
```

