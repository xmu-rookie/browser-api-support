# KeyframeEffect.pseudoElement API 兼容性数据

## 基本信息

- **API名称**: `KeyframeEffect.pseudoElement`
- **MDN文档**: [KeyframeEffect.pseudoElement](https://developer.mozilla.org/docs/Web/API/KeyframeEffect/pseudoElement)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-keyframeeffect-pseudoelement)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// KeyframeEffect.pseudoElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyframeEffect.pseudoElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 75 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 71 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 84

### Firefox

- **支持版本**: 75

### Opera

- **支持版本**: 71

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyframeEffect.pseudoElement是否支持
function isKeyframeEffectPseudoElementSupported() {
    return 'pseudoElement' in keyframeeffect && typeof keyframeeffect.pseudoElement === 'function';
}

if (isKeyframeEffectPseudoElementSupported()) {
    console.log('KeyframeEffect.pseudoElement 支持');
    // 使用KeyframeEffect.pseudoElement
} else {
    console.log('KeyframeEffect.pseudoElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyframeEffect.pseudoElement polyfill
if (!keyframeeffect.pseudoElement) {
    // 在这里添加polyfill实现
    console.log('加载KeyframeEffect.pseudoElement polyfill');
}
```

