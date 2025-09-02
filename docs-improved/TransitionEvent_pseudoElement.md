# TransitionEvent.pseudoElement API 兼容性数据

## 基本信息

- **API名称**: `TransitionEvent.pseudoElement`
- **MDN文档**: [TransitionEvent.pseudoElement](https://developer.mozilla.org/docs/Web/API/TransitionEvent/pseudoElement)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-transitions/#Events-TransitionEvent-pseudoElement)
- **标签**: `web-features:transitions`

## 使用示例

### 基本用法

```javascript
// TransitionEvent.pseudoElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('TransitionEvent.pseudoElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 23 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Firefox

- **支持版本**: 23

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查TransitionEvent.pseudoElement是否支持
function isTransitionEventPseudoElementSupported() {
    return 'pseudoElement' in transitionevent && typeof transitionevent.pseudoElement === 'function';
}

if (isTransitionEventPseudoElementSupported()) {
    console.log('TransitionEvent.pseudoElement 支持');
    // 使用TransitionEvent.pseudoElement
} else {
    console.log('TransitionEvent.pseudoElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TransitionEvent.pseudoElement polyfill
if (!transitionevent.pseudoElement) {
    // 在这里添加polyfill实现
    console.log('加载TransitionEvent.pseudoElement polyfill');
}
```

