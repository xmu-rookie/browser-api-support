# AnimationPlaybackEvent API 兼容性数据

## 基本信息

- **API名称**: `AnimationPlaybackEvent`
- **MDN文档**: [AnimationPlaybackEvent](https://developer.mozilla.org/docs/Web/API/AnimationPlaybackEvent)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#the-animationplaybackevent-interface)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// AnimationPlaybackEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('AnimationPlaybackEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
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

- **支持版本**: 84

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AnimationPlaybackEvent是否支持
function isAnimationPlaybackEventSupported() {
    return 'AnimationPlaybackEvent' in window || typeof AnimationPlaybackEvent !== 'undefined';
}

if (isAnimationPlaybackEventSupported()) {
    console.log('AnimationPlaybackEvent 支持');
    // 使用AnimationPlaybackEvent
} else {
    console.log('AnimationPlaybackEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AnimationPlaybackEvent polyfill
if (!window.AnimationPlaybackEvent) {
    // 在这里添加polyfill实现
    console.log('加载AnimationPlaybackEvent polyfill');
}
```

