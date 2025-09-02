# DevicePosture.type API 兼容性数据

## 基本信息

- **API名称**: `DevicePosture.type`
- **MDN文档**: [DevicePosture.type](https://developer.mozilla.org/docs/Web/API/DevicePosture/type)
- **规范文档**: [查看规范](https://w3c.github.io/device-posture/#dom-deviceposture-type)
- **标签**: `web-features:device-posture`

## 使用示例

### 基本用法

```javascript
// DevicePosture.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('DevicePosture.type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 132 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 16.2 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 132

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 16.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查DevicePosture.type是否支持
function isDevicePostureTypeSupported() {
    return 'type' in deviceposture && typeof deviceposture.type === 'function';
}

if (isDevicePostureTypeSupported()) {
    console.log('DevicePosture.type 支持');
    // 使用DevicePosture.type
} else {
    console.log('DevicePosture.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DevicePosture.type polyfill
if (!deviceposture.type) {
    // 在这里添加polyfill实现
    console.log('加载DevicePosture.type polyfill');
}
```

