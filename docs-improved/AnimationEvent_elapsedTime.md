# AnimationEvent.elapsedTime API 兼容性数据

## 基本信息

- **API名称**: `AnimationEvent.elapsedTime`
- **MDN文档**: [AnimationEvent.elapsedTime](https://developer.mozilla.org/docs/Web/API/AnimationEvent/elapsedTime)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations/#dom-animationevent-elapsedtime)
- **标签**: `web-features:animations-css`

## 使用示例

### 基本用法

```javascript
// AnimationEvent.elapsedTime 使用示例
// 请查阅MDN文档了解具体用法
console.log('AnimationEvent.elapsedTime API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 43

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 5

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查AnimationEvent.elapsedTime是否支持
function isAnimationEventElapsedTimeSupported() {
    return 'elapsedTime' in animationevent && typeof animationevent.elapsedTime === 'function';
}

if (isAnimationEventElapsedTimeSupported()) {
    console.log('AnimationEvent.elapsedTime 支持');
    // 使用AnimationEvent.elapsedTime
} else {
    console.log('AnimationEvent.elapsedTime 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AnimationEvent.elapsedTime polyfill
if (!animationevent.elapsedTime) {
    // 在这里添加polyfill实现
    console.log('加载AnimationEvent.elapsedTime polyfill');
}
```

