# KeyframeEffect.KeyframeEffect API 兼容性数据

## 基本信息

- **API名称**: `KeyframeEffect.KeyframeEffect`
- **MDN文档**: [KeyframeEffect.KeyframeEffect](https://developer.mozilla.org/docs/Web/API/KeyframeEffect/KeyframeEffect)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-keyframeeffect-keyframeeffect)
- **标签**: `web-features:web-animations`
- **描述**: `KeyframeEffect()` constructor

## 使用示例

### 基本用法

```javascript
// KeyframeEffect.KeyframeEffect 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyframeEffect.KeyframeEffect API');
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
// 检查KeyframeEffect.KeyframeEffect是否支持
function isKeyframeEffectKeyframeEffectSupported() {
    return 'KeyframeEffect' in keyframeeffect && typeof keyframeeffect.KeyframeEffect === 'function';
}

if (isKeyframeEffectKeyframeEffectSupported()) {
    console.log('KeyframeEffect.KeyframeEffect 支持');
    // 使用KeyframeEffect.KeyframeEffect
} else {
    console.log('KeyframeEffect.KeyframeEffect 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyframeEffect.KeyframeEffect polyfill
if (!keyframeeffect.KeyframeEffect) {
    // 在这里添加polyfill实现
    console.log('加载KeyframeEffect.KeyframeEffect polyfill');
}
```

