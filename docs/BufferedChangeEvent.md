# BufferedChangeEvent API 兼容性数据

## 基本信息

- **API名称**: `BufferedChangeEvent`
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-bufferedchangeevent)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// BufferedChangeEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('BufferedChangeEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | ❌ 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 17.1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 17

### Safari iOS

- **支持版本**: 17.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查BufferedChangeEvent是否支持
function isBufferedChangeEventSupported() {
    return 'BufferedChangeEvent' in window || typeof BufferedChangeEvent !== 'undefined';
}

if (isBufferedChangeEventSupported()) {
    console.log('BufferedChangeEvent 支持');
    // 使用BufferedChangeEvent
} else {
    console.log('BufferedChangeEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BufferedChangeEvent polyfill
if (!window.BufferedChangeEvent) {
    // 在这里添加polyfill实现
    console.log('加载BufferedChangeEvent polyfill');
}
```

