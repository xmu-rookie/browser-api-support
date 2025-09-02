# KeyframeEffect.composite API 兼容性数据

## 基本信息

- **API名称**: `KeyframeEffect.composite`
- **MDN文档**: [KeyframeEffect.composite](https://developer.mozilla.org/docs/Web/API/KeyframeEffect/composite)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-keyframeeffect-composite)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// KeyframeEffect.composite 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyframeEffect.composite API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 80 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 71 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 84

### Firefox

- **支持版本**: 80

### Opera

- **支持版本**: 71

### Safari

- **支持版本**: 16

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyframeEffect.composite是否支持
function isKeyframeEffectCompositeSupported() {
    return 'composite' in keyframeeffect && typeof keyframeeffect.composite === 'function';
}

if (isKeyframeEffectCompositeSupported()) {
    console.log('KeyframeEffect.composite 支持');
    // 使用KeyframeEffect.composite
} else {
    console.log('KeyframeEffect.composite 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyframeEffect.composite polyfill
if (!keyframeeffect.composite) {
    // 在这里添加polyfill实现
    console.log('加载KeyframeEffect.composite polyfill');
}
```

