# Animation.playState API 兼容性数据

## 基本信息

- **API名称**: `Animation.playState`
- **MDN文档**: [Animation.playState](https://developer.mozilla.org/docs/Web/API/Animation/playState)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-animation-playstate)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// Animation.playState 使用示例
// 请查阅MDN文档了解具体用法
console.log('Animation.playState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 75 | Before Chrome 50/Opera 37, this property returned `idle` for an animation that had not yet started. ... |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 48 | Before Firefox 59, this property returned `pending` for Animations with incomplete asynchronous oper... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 62 | Before Chrome 50/Opera 37, this property returned `idle` for an animation that had not yet started. ... |
| Opera Android | 54 | Before Chrome 50/Opera 37, this property returned `idle` for an animation that had not yet started. ... |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 75
- **注意事项**:
  - Before Chrome 50/Opera 37, this property returned `idle` for an animation that had not yet started. Starting with Chrome 50/Opera 37, it shows `paused`.

### Edge

- **支持版本**: 79

### Firefox

- **支持版本**: 48
- **注意事项**:
  - Before Firefox 59, this property returned `pending` for Animations with incomplete asynchronous operations but as of Firefox 59 this is indicated by the separate [`Animation.pending`](https://developer.mozilla.org/docs/Web/API/Animation/pending) property. This reflects recent changes to the specification.

### Opera

- **支持版本**: 62
- **注意事项**:
  - Before Chrome 50/Opera 37, this property returned `idle` for an animation that had not yet started. Starting with Chrome 50/Opera 37, it shows `paused`.

### Opera Android

- **支持版本**: 54
- **注意事项**:
  - Before Chrome 50/Opera 37, this property returned `idle` for an animation that had not yet started. Starting with Chrome 50/Opera 37, it shows `paused`.

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Animation.playState是否支持
function isAnimationPlayStateSupported() {
    return 'playState' in animation && typeof animation.playState === 'function';
}

if (isAnimationPlayStateSupported()) {
    console.log('Animation.playState 支持');
    // 使用Animation.playState
} else {
    console.log('Animation.playState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Animation.playState polyfill
if (!animation.playState) {
    // 在这里添加polyfill实现
    console.log('加载Animation.playState polyfill');
}
```

