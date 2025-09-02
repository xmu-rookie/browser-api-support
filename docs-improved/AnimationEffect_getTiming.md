# AnimationEffect.getTiming API 兼容性数据

## 基本信息

- **API名称**: `AnimationEffect.getTiming`
- **MDN文档**: [AnimationEffect.getTiming](https://developer.mozilla.org/docs/Web/API/AnimationEffect/getTiming)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-animationeffect-gettiming)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// AnimationEffect.getTiming 使用示例
// 请查阅MDN文档了解具体用法
console.log('AnimationEffect.getTiming API');
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
// 检查AnimationEffect.getTiming是否支持
function isAnimationEffectGetTimingSupported() {
    return 'getTiming' in animationeffect && typeof animationeffect.getTiming === 'function';
}

if (isAnimationEffectGetTimingSupported()) {
    console.log('AnimationEffect.getTiming 支持');
    // 使用AnimationEffect.getTiming
} else {
    console.log('AnimationEffect.getTiming 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AnimationEffect.getTiming polyfill
if (!animationeffect.getTiming) {
    // 在这里添加polyfill实现
    console.log('加载AnimationEffect.getTiming polyfill');
}
```

