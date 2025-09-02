# EventTarget.removeEventListener.options_parameter API 兼容性数据

## 基本信息

- **API名称**: `EventTarget.removeEventListener.options_parameter`
- **标签**: `web-features:events`
- **描述**: Form with `options` object supported (third parameter can be either options or a `Boolean`, for backwards compatibility)

## 使用示例

### 基本用法

```javascript
// EventTarget.removeEventListener.options_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventTarget.removeEventListener.options_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 16 |  |
| Firefox | 49 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 14.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 49

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 49

### Node.js

- **支持版本**: 14.5.0

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查EventTarget.removeEventListener.options_parameter是否支持
function isEventTargetRemoveEventListenerSupported() {
    return 'removeEventListener' in eventtarget && typeof eventtarget.removeEventListener === 'function';
}

if (isEventTargetRemoveEventListenerSupported()) {
    console.log('EventTarget.removeEventListener.options_parameter 支持');
    // 使用EventTarget.removeEventListener.options_parameter
} else {
    console.log('EventTarget.removeEventListener.options_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EventTarget.removeEventListener.options_parameter polyfill
if (!eventtarget.removeEventListener) {
    // 在这里添加polyfill实现
    console.log('加载EventTarget.removeEventListener.options_parameter polyfill');
}
```

