# InputEvent.data API 兼容性数据

## 基本信息

- **API名称**: `InputEvent.data`
- **MDN文档**: [InputEvent.data](https://developer.mozilla.org/docs/Web/API/InputEvent/data)
- **规范文档**: [查看规范](https://w3c.github.io/input-events/#dfn-data)
- **标签**: `web-features:input-event`

## 使用示例

### 基本用法

```javascript
// InputEvent.data 使用示例
// 请查阅MDN文档了解具体用法
console.log('InputEvent.data API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 67 |  |
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

- **支持版本**: 67

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查InputEvent.data是否支持
function isInputEventDataSupported() {
    return 'data' in inputevent && typeof inputevent.data === 'function';
}

if (isInputEventDataSupported()) {
    console.log('InputEvent.data 支持');
    // 使用InputEvent.data
} else {
    console.log('InputEvent.data 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// InputEvent.data polyfill
if (!inputevent.data) {
    // 在这里添加polyfill实现
    console.log('加载InputEvent.data polyfill');
}
```

