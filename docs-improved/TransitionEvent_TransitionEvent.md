# TransitionEvent.TransitionEvent API 兼容性数据

## 基本信息

- **API名称**: `TransitionEvent.TransitionEvent`
- **MDN文档**: [TransitionEvent.TransitionEvent](https://developer.mozilla.org/docs/Web/API/TransitionEvent/TransitionEvent)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-transitions/#dom-transitionevent-transitionevent)
- **标签**: `web-features:transitions`
- **描述**: `TransitionEvent()` constructor

## 使用示例

### 基本用法

```javascript
// TransitionEvent.TransitionEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('TransitionEvent.TransitionEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 27 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 23 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 2.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 27

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 23

### Safari

- **支持版本**: 7
- **支持版本**: 6
- **前缀**: WebKit

### Samsung Internet

- **支持版本**: 2.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查TransitionEvent.TransitionEvent是否支持
function isTransitionEventTransitionEventSupported() {
    return 'TransitionEvent' in transitionevent && typeof transitionevent.TransitionEvent === 'function';
}

if (isTransitionEventTransitionEventSupported()) {
    console.log('TransitionEvent.TransitionEvent 支持');
    // 使用TransitionEvent.TransitionEvent
} else {
    console.log('TransitionEvent.TransitionEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TransitionEvent.TransitionEvent polyfill
if (!transitionevent.TransitionEvent) {
    // 在这里添加polyfill实现
    console.log('加载TransitionEvent.TransitionEvent polyfill');
}
```

