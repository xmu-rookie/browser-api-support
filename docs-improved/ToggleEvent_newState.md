# ToggleEvent.newState API 兼容性数据

## 基本信息

- **API名称**: `ToggleEvent.newState`
- **MDN文档**: [ToggleEvent.newState](https://developer.mozilla.org/docs/Web/API/ToggleEvent/newState)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-toggleevent-newstate)
- **标签**: `web-features:popover`

## 使用示例

### 基本用法

```javascript
// ToggleEvent.newState 使用示例
// 请查阅MDN文档了解具体用法
console.log('ToggleEvent.newState API');
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
// 检查ToggleEvent.newState是否支持
function isToggleEventNewStateSupported() {
    return 'newState' in toggleevent && typeof toggleevent.newState === 'function';
}

if (isToggleEventNewStateSupported()) {
    console.log('ToggleEvent.newState 支持');
    // 使用ToggleEvent.newState
} else {
    console.log('ToggleEvent.newState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ToggleEvent.newState polyfill
if (!toggleevent.newState) {
    // 在这里添加polyfill实现
    console.log('加载ToggleEvent.newState polyfill');
}
```

