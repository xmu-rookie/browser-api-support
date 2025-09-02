# BatteryManager.level API 兼容性数据

## 基本信息

- **API名称**: `BatteryManager.level`
- **MDN文档**: [BatteryManager.level](https://developer.mozilla.org/docs/Web/API/BatteryManager/level)
- **规范文档**: [查看规范](https://w3c.github.io/battery/#dom-batterymanager-level)
- **标签**: `web-features:battery`

## 使用示例

### 基本用法

```javascript
// BatteryManager.level 使用示例
// 请查阅MDN文档了解具体用法
console.log('BatteryManager.level API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 43 |  |
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

- **支持版本**: 38

### Firefox

- **支持版本**: 43
- **移除版本**: 52

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查BatteryManager.level是否支持
function isBatteryManagerLevelSupported() {
    return 'level' in batterymanager && typeof batterymanager.level === 'function';
}

if (isBatteryManagerLevelSupported()) {
    console.log('BatteryManager.level 支持');
    // 使用BatteryManager.level
} else {
    console.log('BatteryManager.level 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BatteryManager.level polyfill
if (!batterymanager.level) {
    // 在这里添加polyfill实现
    console.log('加载BatteryManager.level polyfill');
}
```

