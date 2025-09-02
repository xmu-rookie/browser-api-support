# TransitionEvent API 兼容性数据

## 基本信息

- **API名称**: `TransitionEvent`
- **MDN文档**: [TransitionEvent](https://developer.mozilla.org/docs/Web/API/TransitionEvent)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-transitions/#interface-transitionevent)
- **标签**: `web-features:transitions`

## 使用示例

### 基本用法

```javascript
// TransitionEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('TransitionEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 未知 |  |
| Safari iOS | 未知 |  |
| Samsung Internet | 未知 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari


### Safari iOS


### Samsung Internet


## 兼容性检查代码

### 特性检测

```javascript
// 检查TransitionEvent是否支持
function isTransitionEventSupported() {
    return 'TransitionEvent' in window || typeof TransitionEvent !== 'undefined';
}

if (isTransitionEventSupported()) {
    console.log('TransitionEvent 支持');
    // 使用TransitionEvent
} else {
    console.log('TransitionEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TransitionEvent polyfill
if (!window.TransitionEvent) {
    // 在这里添加polyfill实现
    console.log('加载TransitionEvent polyfill');
}
```

