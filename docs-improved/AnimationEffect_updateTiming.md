# AnimationEffect.updateTiming API 兼容性数据

## 基本信息

- **API名称**: `AnimationEffect.updateTiming`
- **MDN文档**: [AnimationEffect.updateTiming](https://developer.mozilla.org/docs/Web/API/AnimationEffect/updateTiming)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-animationeffect-updatetiming)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// AnimationEffect.updateTiming 使用示例
// 请查阅MDN文档了解具体用法
console.log('AnimationEffect.updateTiming API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 75 |  |
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

- **支持版本**: 75

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AnimationEffect.updateTiming是否支持
function isAnimationEffectUpdateTimingSupported() {
    return 'updateTiming' in animationeffect && typeof animationeffect.updateTiming === 'function';
}

if (isAnimationEffectUpdateTimingSupported()) {
    console.log('AnimationEffect.updateTiming 支持');
    // 使用AnimationEffect.updateTiming
} else {
    console.log('AnimationEffect.updateTiming 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AnimationEffect.updateTiming polyfill
if (!animationeffect.updateTiming) {
    // 在这里添加polyfill实现
    console.log('加载AnimationEffect.updateTiming polyfill');
}
```

