# BatteryManager.dischargingtimechange_event API 兼容性数据

## 基本信息

- **API名称**: `BatteryManager.dischargingtimechange_event`
- **MDN文档**: [BatteryManager.dischargingtimechange_event](https://developer.mozilla.org/docs/Web/API/BatteryManager/dischargingtimechange_event)
- **规范文档**: [查看规范](https://w3c.github.io/battery/#dfn-dischargingtimechange,https://w3c.github.io/battery/#dom-batterymanager-ondischargingtimechange)
- **标签**: `web-features:battery`
- **描述**: `dischargingtimechange` event

## 使用示例

### 基本用法

```javascript
// BatteryManager.dischargingtimechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('BatteryManager.dischargingtimechange_event API');
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
// 检查BatteryManager.dischargingtimechange_event是否支持
function isBatteryManagerDischargingtimechange_eventSupported() {
    return 'dischargingtimechange_event' in batterymanager && typeof batterymanager.dischargingtimechange_event === 'function';
}

if (isBatteryManagerDischargingtimechange_eventSupported()) {
    console.log('BatteryManager.dischargingtimechange_event 支持');
    // 使用BatteryManager.dischargingtimechange_event
} else {
    console.log('BatteryManager.dischargingtimechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BatteryManager.dischargingtimechange_event polyfill
if (!batterymanager.dischargingtimechange_event) {
    // 在这里添加polyfill实现
    console.log('加载BatteryManager.dischargingtimechange_event polyfill');
}
```

