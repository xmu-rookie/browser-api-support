# EventTarget.addEventListener.options_parameter.options_passive_parameter_default_true_wheel API 兼容性数据

## 基本信息

- **API名称**: `EventTarget.addEventListener.options_parameter.options_passive_parameter_default_true_wheel`
- **标签**: `web-features:events`
- **描述**: `options.passive` parameter defaults to `true` for `wheel` and `mousewheel` events

## 使用示例

### 基本用法

```javascript
// EventTarget.addEventListener.options_parameter.options_passive_parameter_default_true_wheel 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventTarget.addEventListener.options_parameter.options_passive_parameter_default_true_wheel API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 73 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 84 |  |
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

- **支持版本**: 73

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 84

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查EventTarget.addEventListener.options_parameter.options_passive_parameter_default_true_wheel是否支持
function isEventTargetAddEventListenerSupported() {
    return 'addEventListener' in eventtarget && typeof eventtarget.addEventListener === 'function';
}

if (isEventTargetAddEventListenerSupported()) {
    console.log('EventTarget.addEventListener.options_parameter.options_passive_parameter_default_true_wheel 支持');
    // 使用EventTarget.addEventListener.options_parameter.options_passive_parameter_default_true_wheel
} else {
    console.log('EventTarget.addEventListener.options_parameter.options_passive_parameter_default_true_wheel 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EventTarget.addEventListener.options_parameter.options_passive_parameter_default_true_wheel polyfill
if (!eventtarget.addEventListener) {
    // 在这里添加polyfill实现
    console.log('加载EventTarget.addEventListener.options_parameter.options_passive_parameter_default_true_wheel polyfill');
}
```

