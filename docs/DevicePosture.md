# DevicePosture API 兼容性数据

## 基本信息

- **API名称**: `DevicePosture`
- **MDN文档**: [DevicePosture](https://developer.mozilla.org/docs/Web/API/DevicePosture)
- **规范文档**: [查看规范](https://w3c.github.io/device-posture/#dom-deviceposture)
- **标签**: `web-features:device-posture`

## 使用示例

### 基本用法

```javascript
// DevicePosture 使用示例
// 请查阅MDN文档了解具体用法
console.log('DevicePosture API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 132 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
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
// 检查DevicePosture是否支持
function isDevicePostureSupported() {
    return 'DevicePosture' in window || typeof DevicePosture !== 'undefined';
}

if (isDevicePostureSupported()) {
    console.log('DevicePosture 支持');
    // 使用DevicePosture
} else {
    console.log('DevicePosture 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DevicePosture polyfill
if (!window.DevicePosture) {
    // 在这里添加polyfill实现
    console.log('加载DevicePosture polyfill');
}
```

