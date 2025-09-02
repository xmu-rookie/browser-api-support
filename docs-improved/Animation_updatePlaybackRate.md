# Animation.updatePlaybackRate API 兼容性数据

## 基本信息

- **API名称**: `Animation.updatePlaybackRate`
- **MDN文档**: [Animation.updatePlaybackRate](https://developer.mozilla.org/docs/Web/API/Animation/updatePlaybackRate)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-animation-updateplaybackrate)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// Animation.updatePlaybackRate 使用示例
// 请查阅MDN文档了解具体用法
console.log('Animation.updatePlaybackRate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 76 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 60 |  |
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

- **支持版本**: 76

### Firefox

- **支持版本**: 60

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Animation.updatePlaybackRate是否支持
function isAnimationUpdatePlaybackRateSupported() {
    return 'updatePlaybackRate' in animation && typeof animation.updatePlaybackRate === 'function';
}

if (isAnimationUpdatePlaybackRateSupported()) {
    console.log('Animation.updatePlaybackRate 支持');
    // 使用Animation.updatePlaybackRate
} else {
    console.log('Animation.updatePlaybackRate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Animation.updatePlaybackRate polyfill
if (!animation.updatePlaybackRate) {
    // 在这里添加polyfill实现
    console.log('加载Animation.updatePlaybackRate polyfill');
}
```

