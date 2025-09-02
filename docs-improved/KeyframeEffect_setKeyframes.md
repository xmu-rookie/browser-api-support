# KeyframeEffect.setKeyframes API 兼容性数据

## 基本信息

- **API名称**: `KeyframeEffect.setKeyframes`
- **MDN文档**: [KeyframeEffect.setKeyframes](https://developer.mozilla.org/docs/Web/API/KeyframeEffect/setKeyframes)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-keyframeeffect-setkeyframes)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// KeyframeEffect.setKeyframes 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyframeEffect.setKeyframes API');
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
| Opera | 71 |  |
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

### Opera

- **支持版本**: 71

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyframeEffect.setKeyframes是否支持
function isKeyframeEffectSetKeyframesSupported() {
    return 'setKeyframes' in keyframeeffect && typeof keyframeeffect.setKeyframes === 'function';
}

if (isKeyframeEffectSetKeyframesSupported()) {
    console.log('KeyframeEffect.setKeyframes 支持');
    // 使用KeyframeEffect.setKeyframes
} else {
    console.log('KeyframeEffect.setKeyframes 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyframeEffect.setKeyframes polyfill
if (!keyframeeffect.setKeyframes) {
    // 在这里添加polyfill实现
    console.log('加载KeyframeEffect.setKeyframes polyfill');
}
```

