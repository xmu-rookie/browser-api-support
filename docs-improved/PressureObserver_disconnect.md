# PressureObserver.disconnect API 兼容性数据

## 基本信息

- **API名称**: `PressureObserver.disconnect`
- **MDN文档**: [PressureObserver.disconnect](https://developer.mozilla.org/docs/Web/API/PressureObserver/disconnect)
- **规范文档**: [查看规范](https://w3c.github.io/compute-pressure/#dom-pressureobserver-disconnect)
- **标签**: `web-features:compute-pressure`

## 使用示例

### 基本用法

```javascript
// PressureObserver.disconnect 使用示例
// 请查阅MDN文档了解具体用法
console.log('PressureObserver.disconnect API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
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

- **支持版本**: 125

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PressureObserver.disconnect是否支持
function isPressureObserverDisconnectSupported() {
    return 'disconnect' in pressureobserver && typeof pressureobserver.disconnect === 'function';
}

if (isPressureObserverDisconnectSupported()) {
    console.log('PressureObserver.disconnect 支持');
    // 使用PressureObserver.disconnect
} else {
    console.log('PressureObserver.disconnect 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PressureObserver.disconnect polyfill
if (!pressureobserver.disconnect) {
    // 在这里添加polyfill实现
    console.log('加载PressureObserver.disconnect polyfill');
}
```

