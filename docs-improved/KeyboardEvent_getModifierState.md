# KeyboardEvent.getModifierState API 兼容性数据

## 基本信息

- **API名称**: `KeyboardEvent.getModifierState`
- **MDN文档**: [KeyboardEvent.getModifierState](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/getModifierState)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-keyboardevent-getmodifierstate)
- **标签**: `web-features:keyboard-events`

## 使用示例

### 基本用法

```javascript
// KeyboardEvent.getModifierState 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyboardEvent.getModifierState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 30 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 15 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 30

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 15

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyboardEvent.getModifierState是否支持
function isKeyboardEventGetModifierStateSupported() {
    return 'getModifierState' in keyboardevent && typeof keyboardevent.getModifierState === 'function';
}

if (isKeyboardEventGetModifierStateSupported()) {
    console.log('KeyboardEvent.getModifierState 支持');
    // 使用KeyboardEvent.getModifierState
} else {
    console.log('KeyboardEvent.getModifierState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyboardEvent.getModifierState polyfill
if (!keyboardevent.getModifierState) {
    // 在这里添加polyfill实现
    console.log('加载KeyboardEvent.getModifierState polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **key_parameter_accel**: `"Accel"` as `key` parameter
- **key_parameter_alt**: `"Alt"` as `key` parameter
- **key_parameter_altgraph**: `"AltGraph"` as `key` parameter
- **key_parameter_capslock**: `"CapsLock"` as `key` parameter
- **key_parameter_control**: `"Control"` as `key` parameter
- **key_parameter_fn**: `"Fn"` as `key` parameter
- **key_parameter_meta**: `"Meta"` as `key` parameter
- **key_parameter_numlock**: `"NumLock"` as `key` parameter
- **key_parameter_os**: `"OS"` as `key` parameter
- **key_parameter_scrolllock**: `"ScrollLock"` as `key` parameter
- **key_parameter_shift**: `"Shift"` as `key` parameter
- **key_parameter_symbol**: `"Symbol"` as `key` parameter

