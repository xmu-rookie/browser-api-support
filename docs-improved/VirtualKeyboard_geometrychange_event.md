# VirtualKeyboard.geometrychange_event API 兼容性数据

## 基本信息

- **API名称**: `VirtualKeyboard.geometrychange_event`
- **MDN文档**: [VirtualKeyboard.geometrychange_event](https://developer.mozilla.org/docs/Web/API/VirtualKeyboard/geometrychange_event)
- **规范文档**: [查看规范](https://w3c.github.io/virtual-keyboard/#dom-virtualkeyboard-ongeometrychange)
- **标签**: `web-features:virtual-keyboard`
- **描述**: `geometrychange` event

## 使用示例

### 基本用法

```javascript
// VirtualKeyboard.geometrychange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('VirtualKeyboard.geometrychange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
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

- **支持版本**: 94

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查VirtualKeyboard.geometrychange_event是否支持
function isVirtualKeyboardGeometrychange_eventSupported() {
    return 'geometrychange_event' in virtualkeyboard && typeof virtualkeyboard.geometrychange_event === 'function';
}

if (isVirtualKeyboardGeometrychange_eventSupported()) {
    console.log('VirtualKeyboard.geometrychange_event 支持');
    // 使用VirtualKeyboard.geometrychange_event
} else {
    console.log('VirtualKeyboard.geometrychange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VirtualKeyboard.geometrychange_event polyfill
if (!virtualkeyboard.geometrychange_event) {
    // 在这里添加polyfill实现
    console.log('加载VirtualKeyboard.geometrychange_event polyfill');
}
```

