# ToggleEvent.oldState API 兼容性数据

## 基本信息

- **API名称**: `ToggleEvent.oldState`
- **MDN文档**: [ToggleEvent.oldState](https://developer.mozilla.org/docs/Web/API/ToggleEvent/oldState)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-toggleevent-oldstate)
- **标签**: `web-features:popover`

## 使用示例

### 基本用法

```javascript
// ToggleEvent.oldState 使用示例
// 请查阅MDN文档了解具体用法
console.log('ToggleEvent.oldState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 114 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 120 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 114

### Firefox

- **支持版本**: 120

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查ToggleEvent.oldState是否支持
function isToggleEventOldStateSupported() {
    return 'oldState' in toggleevent && typeof toggleevent.oldState === 'function';
}

if (isToggleEventOldStateSupported()) {
    console.log('ToggleEvent.oldState 支持');
    // 使用ToggleEvent.oldState
} else {
    console.log('ToggleEvent.oldState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ToggleEvent.oldState polyfill
if (!toggleevent.oldState) {
    // 在这里添加polyfill实现
    console.log('加载ToggleEvent.oldState polyfill');
}
```

