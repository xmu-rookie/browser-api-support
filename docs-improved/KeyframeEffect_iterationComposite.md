# KeyframeEffect.iterationComposite API 兼容性数据

## 基本信息

- **API名称**: `KeyframeEffect.iterationComposite`
- **MDN文档**: [KeyframeEffect.iterationComposite](https://developer.mozilla.org/docs/Web/API/KeyframeEffect/iterationComposite)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-2/#dom-keyframeeffect-iterationcomposite)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// KeyframeEffect.iterationComposite 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyframeEffect.iterationComposite API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 80 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 80

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyframeEffect.iterationComposite是否支持
function isKeyframeEffectIterationCompositeSupported() {
    return 'iterationComposite' in keyframeeffect && typeof keyframeeffect.iterationComposite === 'function';
}

if (isKeyframeEffectIterationCompositeSupported()) {
    console.log('KeyframeEffect.iterationComposite 支持');
    // 使用KeyframeEffect.iterationComposite
} else {
    console.log('KeyframeEffect.iterationComposite 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyframeEffect.iterationComposite polyfill
if (!keyframeeffect.iterationComposite) {
    // 在这里添加polyfill实现
    console.log('加载KeyframeEffect.iterationComposite polyfill');
}
```

