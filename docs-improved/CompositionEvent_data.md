# CompositionEvent.data API 兼容性数据

## 基本信息

- **API名称**: `CompositionEvent.data`
- **MDN文档**: [CompositionEvent.data](https://developer.mozilla.org/docs/Web/API/CompositionEvent/data)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-compositionevent-data)
- **标签**: `web-features:composition-events`

## 使用示例

### 基本用法

```javascript
// CompositionEvent.data 使用示例
// 请查阅MDN文档了解具体用法
console.log('CompositionEvent.data API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 15 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 15

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 9

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查CompositionEvent.data是否支持
function isCompositionEventDataSupported() {
    return 'data' in compositionevent && typeof compositionevent.data === 'function';
}

if (isCompositionEventDataSupported()) {
    console.log('CompositionEvent.data 支持');
    // 使用CompositionEvent.data
} else {
    console.log('CompositionEvent.data 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CompositionEvent.data polyfill
if (!compositionevent.data) {
    // 在这里添加polyfill实现
    console.log('加载CompositionEvent.data polyfill');
}
```

