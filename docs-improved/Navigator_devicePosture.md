# Navigator.devicePosture API 兼容性数据

## 基本信息

- **API名称**: `Navigator.devicePosture`
- **MDN文档**: [Navigator.devicePosture](https://developer.mozilla.org/docs/Web/API/Navigator/devicePosture)
- **规范文档**: [查看规范](https://w3c.github.io/device-posture/#dom-navigator-deviceposture)
- **标签**: `web-features:device-posture`

## 使用示例

### 基本用法

```javascript
// Navigator.devicePosture 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.devicePosture API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 132 |  |
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
| Samsung Internet | 16.2 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 132

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 16.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.devicePosture是否支持
function isNavigatorDevicePostureSupported() {
    return 'devicePosture' in navigator && typeof navigator.devicePosture === 'function';
}

if (isNavigatorDevicePostureSupported()) {
    console.log('Navigator.devicePosture 支持');
    // 使用Navigator.devicePosture
} else {
    console.log('Navigator.devicePosture 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.devicePosture polyfill
if (!navigator.devicePosture) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.devicePosture polyfill');
}
```

