# AnimationEvent.pseudoElement API 兼容性数据

## 基本信息

- **API名称**: `AnimationEvent.pseudoElement`
- **MDN文档**: [AnimationEvent.pseudoElement](https://developer.mozilla.org/docs/Web/API/AnimationEvent/pseudoElement)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations/#dom-animationevent-pseudoelement)
- **标签**: `web-features:animations-css`

## 使用示例

### 基本用法

```javascript
// AnimationEvent.pseudoElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('AnimationEvent.pseudoElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 68 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 23 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 68

### Firefox

- **支持版本**: 23

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AnimationEvent.pseudoElement是否支持
function isAnimationEventPseudoElementSupported() {
    return 'pseudoElement' in animationevent && typeof animationevent.pseudoElement === 'function';
}

if (isAnimationEventPseudoElementSupported()) {
    console.log('AnimationEvent.pseudoElement 支持');
    // 使用AnimationEvent.pseudoElement
} else {
    console.log('AnimationEvent.pseudoElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AnimationEvent.pseudoElement polyfill
if (!animationevent.pseudoElement) {
    // 在这里添加polyfill实现
    console.log('加载AnimationEvent.pseudoElement polyfill');
}
```

