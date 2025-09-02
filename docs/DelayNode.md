# DelayNode API 兼容性数据

## 基本信息

- **API名称**: `DelayNode`
- **MDN文档**: [DelayNode](https://developer.mozilla.org/docs/Web/API/DelayNode)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#DelayNode)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// DelayNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('DelayNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查DelayNode是否支持
function isDelayNodeSupported() {
    return 'DelayNode' in window || typeof DelayNode !== 'undefined';
}

if (isDelayNodeSupported()) {
    console.log('DelayNode 支持');
    // 使用DelayNode
} else {
    console.log('DelayNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DelayNode polyfill
if (!window.DelayNode) {
    // 在这里添加polyfill实现
    console.log('加载DelayNode polyfill');
}
```

