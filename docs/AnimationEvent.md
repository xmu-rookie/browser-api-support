# AnimationEvent API 兼容性数据

## 基本信息

- **API名称**: `AnimationEvent`
- **MDN文档**: [AnimationEvent](https://developer.mozilla.org/docs/Web/API/AnimationEvent)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations/#interface-animationevent)
- **标签**: `web-features:animations-css`

## 使用示例

### 基本用法

```javascript
// AnimationEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('AnimationEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| oculus | 同主版本 |  |
| Opera | 未知 |  |
| Opera Android | 未知 |  |
| Safari | 未知 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 5

### Internet Explorer

- **支持版本**: 10

### Opera


### Opera Android


### Safari


## 兼容性检查代码

### 特性检测

```javascript
// 检查AnimationEvent是否支持
function isAnimationEventSupported() {
    return 'AnimationEvent' in window || typeof AnimationEvent !== 'undefined';
}

if (isAnimationEventSupported()) {
    console.log('AnimationEvent 支持');
    // 使用AnimationEvent
} else {
    console.log('AnimationEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AnimationEvent polyfill
if (!window.AnimationEvent) {
    // 在这里添加polyfill实现
    console.log('加载AnimationEvent polyfill');
}
```

