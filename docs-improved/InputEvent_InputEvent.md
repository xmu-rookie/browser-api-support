# InputEvent.InputEvent API 兼容性数据

## 基本信息

- **API名称**: `InputEvent.InputEvent`
- **MDN文档**: [InputEvent.InputEvent](https://developer.mozilla.org/docs/Web/API/InputEvent/InputEvent)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-inputevent-inputevent)
- **标签**: `web-features:input-event`
- **描述**: `InputEvent()` constructor

## 使用示例

### 基本用法

```javascript
// InputEvent.InputEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('InputEvent.InputEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 60

### Firefox

- **支持版本**: 31

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查InputEvent.InputEvent是否支持
function isInputEventInputEventSupported() {
    return 'InputEvent' in inputevent && typeof inputevent.InputEvent === 'function';
}

if (isInputEventInputEventSupported()) {
    console.log('InputEvent.InputEvent 支持');
    // 使用InputEvent.InputEvent
} else {
    console.log('InputEvent.InputEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// InputEvent.InputEvent polyfill
if (!inputevent.InputEvent) {
    // 在这里添加polyfill实现
    console.log('加载InputEvent.InputEvent polyfill');
}
```

