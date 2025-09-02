# InputEvent.getTargetRanges API 兼容性数据

## 基本信息

- **API名称**: `InputEvent.getTargetRanges`
- **MDN文档**: [InputEvent.getTargetRanges](https://developer.mozilla.org/docs/Web/API/InputEvent/getTargetRanges)
- **规范文档**: [查看规范](https://w3c.github.io/input-events/#dom-inputevent-gettargetranges)
- **标签**: `web-features:input-event`

## 使用示例

### 基本用法

```javascript
// InputEvent.getTargetRanges 使用示例
// 请查阅MDN文档了解具体用法
console.log('InputEvent.getTargetRanges API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 87 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Firefox

- **支持版本**: 87

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查InputEvent.getTargetRanges是否支持
function isInputEventGetTargetRangesSupported() {
    return 'getTargetRanges' in inputevent && typeof inputevent.getTargetRanges === 'function';
}

if (isInputEventGetTargetRangesSupported()) {
    console.log('InputEvent.getTargetRanges 支持');
    // 使用InputEvent.getTargetRanges
} else {
    console.log('InputEvent.getTargetRanges 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// InputEvent.getTargetRanges polyfill
if (!inputevent.getTargetRanges) {
    // 在这里添加polyfill实现
    console.log('加载InputEvent.getTargetRanges polyfill');
}
```

