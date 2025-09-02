# CommandEvent.CommandEvent API 兼容性数据

## 基本信息

- **API名称**: `CommandEvent.CommandEvent`
- **MDN文档**: [CommandEvent.CommandEvent](https://developer.mozilla.org/docs/Web/API/CommandEvent/CommandEvent)
- **标签**: `web-features:invoker-commands`
- **描述**: `CommandEvent()` constructor

## 使用示例

### 基本用法

```javascript
// CommandEvent.CommandEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('CommandEvent.CommandEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 135 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | preview |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | preview |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 135

### Firefox

- **支持版本**: preview
- **需要标志**: 
  - dom.element.commandfor.enabled: true

### Safari

- **支持版本**: preview

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CommandEvent.CommandEvent是否支持
function isCommandEventCommandEventSupported() {
    return 'CommandEvent' in commandevent && typeof commandevent.CommandEvent === 'function';
}

if (isCommandEventCommandEventSupported()) {
    console.log('CommandEvent.CommandEvent 支持');
    // 使用CommandEvent.CommandEvent
} else {
    console.log('CommandEvent.CommandEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CommandEvent.CommandEvent polyfill
if (!commandevent.CommandEvent) {
    // 在这里添加polyfill实现
    console.log('加载CommandEvent.CommandEvent polyfill');
}
```

