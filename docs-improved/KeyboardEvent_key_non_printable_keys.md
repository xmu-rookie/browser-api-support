# KeyboardEvent.key.non_printable_keys API 兼容性数据

## 基本信息

- **API名称**: `KeyboardEvent.key.non_printable_keys`
- **标签**: `web-features:keyboard-events`
- **描述**: Non-printable keys

## 使用示例

### 基本用法

```javascript
// KeyboardEvent.key.non_printable_keys 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyboardEvent.key.non_printable_keys API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 23 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | IE's implementation does not completely match the current spec because it is based on an older versi... |
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

- **支持版本**: 51

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 23

### Internet Explorer

- **支持版本**: 9
- **注意事项**:
  - IE's implementation does not completely match the current spec because it is based on an older version of the spec.

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyboardEvent.key.non_printable_keys是否支持
function isKeyboardEventKeySupported() {
    return 'key' in keyboardevent && typeof keyboardevent.key === 'function';
}

if (isKeyboardEventKeySupported()) {
    console.log('KeyboardEvent.key.non_printable_keys 支持');
    // 使用KeyboardEvent.key.non_printable_keys
} else {
    console.log('KeyboardEvent.key.non_printable_keys 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyboardEvent.key.non_printable_keys polyfill
if (!keyboardevent.key) {
    // 在这里添加polyfill实现
    console.log('加载KeyboardEvent.key.non_printable_keys polyfill');
}
```

