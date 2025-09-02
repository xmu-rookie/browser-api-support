# Navigator.sendBeacon API 兼容性数据

## 基本信息

- **API名称**: `Navigator.sendBeacon`
- **MDN文档**: [Navigator.sendBeacon](https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon)
- **规范文档**: [查看规范](https://w3c.github.io/beacon/#sendbeacon-method)
- **标签**: `web-features:beacons`

## 使用示例

### 基本用法

```javascript
// Navigator.sendBeacon 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.sendBeacon API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 39 | Starting in Chrome 59, this method cannot send a `Blob` whose type is not CORS safelisted. This is a... |
| Chrome Android | 42 | Starting in Chrome 59, this method cannot send a `Blob` whose type is not CORS safelisted. This is a... |
| Edge | 14 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 40 | Starting in Chrome 59, this method cannot send a `Blob` whose type is not CORS safelisted. This is a... |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 39
- **注意事项**:
  - Starting in Chrome 59, this method cannot send a `Blob` whose type is not CORS safelisted. This is a temporary change until a mitigation can be found for the security issues that this creates. For more information, see [bug 40087600](https://crbug.com/40087600).

### Chrome Android

- **支持版本**: 42
- **注意事项**:
  - Starting in Chrome 59, this method cannot send a `Blob` whose type is not CORS safelisted. This is a temporary change until a mitigation can be found for the security issues that this creates. For more information, see [bug 40087600](https://crbug.com/40087600).

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 31

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 11.1

### WebView Android

- **支持版本**: 40
- **注意事项**:
  - Starting in Chrome 59, this method cannot send a `Blob` whose type is not CORS safelisted. This is a temporary change until a mitigation can be found for the security issues that this creates. For more information, see [bug 40087600](https://crbug.com/40087600).

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.sendBeacon是否支持
function isNavigatorSendBeaconSupported() {
    return 'sendBeacon' in navigator && typeof navigator.sendBeacon === 'function';
}

if (isNavigatorSendBeaconSupported()) {
    console.log('Navigator.sendBeacon 支持');
    // 使用Navigator.sendBeacon
} else {
    console.log('Navigator.sendBeacon 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.sendBeacon polyfill
if (!navigator.sendBeacon) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.sendBeacon polyfill');
}
```

