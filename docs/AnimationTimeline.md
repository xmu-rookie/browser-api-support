# AnimationTimeline API 兼容性数据

## 基本信息

- **API名称**: `AnimationTimeline`
- **MDN文档**: [AnimationTimeline](https://developer.mozilla.org/docs/Web/API/AnimationTimeline)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#the-animationtimeline-interface)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// AnimationTimeline 使用示例
// 请查阅MDN文档了解具体用法
console.log('AnimationTimeline API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 75 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
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

- **支持版本**: 75

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AnimationTimeline是否支持
function isAnimationTimelineSupported() {
    return 'AnimationTimeline' in window || typeof AnimationTimeline !== 'undefined';
}

if (isAnimationTimelineSupported()) {
    console.log('AnimationTimeline 支持');
    // 使用AnimationTimeline
} else {
    console.log('AnimationTimeline 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AnimationTimeline polyfill
if (!window.AnimationTimeline) {
    // 在这里添加polyfill实现
    console.log('加载AnimationTimeline polyfill');
}
```

