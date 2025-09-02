# CSSAnimation.animationName API 兼容性数据

## 基本信息

- **API名称**: `CSSAnimation.animationName`
- **MDN文档**: [CSSAnimation.animationName](https://developer.mozilla.org/docs/Web/API/CSSAnimation/animationName)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations-2/#dom-cssanimation-animationname)
- **标签**: `web-features:animations-css`

## 使用示例

### 基本用法

```javascript
// CSSAnimation.animationName 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSAnimation.animationName API');
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
// 检查CSSAnimation.animationName是否支持
function isCSSAnimationAnimationNameSupported() {
    return 'animationName' in cssanimation && typeof cssanimation.animationName === 'function';
}

if (isCSSAnimationAnimationNameSupported()) {
    console.log('CSSAnimation.animationName 支持');
    // 使用CSSAnimation.animationName
} else {
    console.log('CSSAnimation.animationName 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSAnimation.animationName polyfill
if (!cssanimation.animationName) {
    // 在这里添加polyfill实现
    console.log('加载CSSAnimation.animationName polyfill');
}
```

