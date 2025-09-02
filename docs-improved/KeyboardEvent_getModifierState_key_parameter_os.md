# KeyboardEvent.getModifierState.key_parameter_os API 兼容性数据

## 基本信息

- **API名称**: `KeyboardEvent.getModifierState.key_parameter_os`
- **描述**: `"OS"` as `key` parameter

## 使用示例

### 基本用法

```javascript
// KeyboardEvent.getModifierState.key_parameter_os 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyboardEvent.getModifierState.key_parameter_os API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 48 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 15 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

- **支持版本**: 48

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 15

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyboardEvent.getModifierState.key_parameter_os是否支持
function isKeyboardEventGetModifierStateSupported() {
    return 'getModifierState' in keyboardevent && typeof keyboardevent.getModifierState === 'function';
}

if (isKeyboardEventGetModifierStateSupported()) {
    console.log('KeyboardEvent.getModifierState.key_parameter_os 支持');
    // 使用KeyboardEvent.getModifierState.key_parameter_os
} else {
    console.log('KeyboardEvent.getModifierState.key_parameter_os 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyboardEvent.getModifierState.key_parameter_os polyfill
if (!keyboardevent.getModifierState) {
    // 在这里添加polyfill实现
    console.log('加载KeyboardEvent.getModifierState.key_parameter_os polyfill');
}
```

