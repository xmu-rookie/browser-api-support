# Animation.remove_filling_animation API 兼容性数据

## 基本信息

- **API名称**: `Animation.remove_filling_animation`
- **MDN文档**: [Animation.remove_filling_animation](https://developer.mozilla.org/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations)
- **标签**: `web-features:web-animations`
- **描述**: Browsers automatically remove indefinite filling animations

## 使用示例

### 基本用法

```javascript
// Animation.remove_filling_animation 使用示例
// 请查阅MDN文档了解具体用法
console.log('Animation.remove_filling_animation API');
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
// 检查Animation.remove_filling_animation是否支持
function isAnimationRemove_filling_animationSupported() {
    return 'remove_filling_animation' in animation && typeof animation.remove_filling_animation === 'function';
}

if (isAnimationRemove_filling_animationSupported()) {
    console.log('Animation.remove_filling_animation 支持');
    // 使用Animation.remove_filling_animation
} else {
    console.log('Animation.remove_filling_animation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Animation.remove_filling_animation polyfill
if (!animation.remove_filling_animation) {
    // 在这里添加polyfill实现
    console.log('加载Animation.remove_filling_animation polyfill');
}
```

