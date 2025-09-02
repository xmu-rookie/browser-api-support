# TextEvent.initTextEvent API 兼容性数据

## 基本信息

- **API名称**: `TextEvent.initTextEvent`
- **MDN文档**: [TextEvent.initTextEvent](https://developer.mozilla.org/docs/Web/API/TextEvent/initTextEvent)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-textevent-inittextevent)

## 使用示例

### 基本用法

```javascript
// TextEvent.initTextEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextEvent.initTextEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 129 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | ≤10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 129

### Internet Explorer

- **支持版本**: ≤10

### Safari

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextEvent.initTextEvent是否支持
function isTextEventInitTextEventSupported() {
    return 'initTextEvent' in textevent && typeof textevent.initTextEvent === 'function';
}

if (isTextEventInitTextEventSupported()) {
    console.log('TextEvent.initTextEvent 支持');
    // 使用TextEvent.initTextEvent
} else {
    console.log('TextEvent.initTextEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextEvent.initTextEvent polyfill
if (!textevent.initTextEvent) {
    // 在这里添加polyfill实现
    console.log('加载TextEvent.initTextEvent polyfill');
}
```

