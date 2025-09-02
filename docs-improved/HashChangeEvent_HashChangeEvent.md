# HashChangeEvent.HashChangeEvent API 兼容性数据

## 基本信息

- **API名称**: `HashChangeEvent.HashChangeEvent`
- **MDN文档**: [HashChangeEvent.HashChangeEvent](https://developer.mozilla.org/docs/Web/API/HashChangeEvent/HashChangeEvent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-hashchangeevent-interface)
- **标签**: `web-features:hashchange`
- **描述**: `HashChangeEvent()` constructor

## 使用示例

### 基本用法

```javascript
// HashChangeEvent.HashChangeEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('HashChangeEvent.HashChangeEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 16 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 11 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 16

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 11

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查HashChangeEvent.HashChangeEvent是否支持
function isHashChangeEventHashChangeEventSupported() {
    return 'HashChangeEvent' in hashchangeevent && typeof hashchangeevent.HashChangeEvent === 'function';
}

if (isHashChangeEventHashChangeEventSupported()) {
    console.log('HashChangeEvent.HashChangeEvent 支持');
    // 使用HashChangeEvent.HashChangeEvent
} else {
    console.log('HashChangeEvent.HashChangeEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HashChangeEvent.HashChangeEvent polyfill
if (!hashchangeevent.HashChangeEvent) {
    // 在这里添加polyfill实现
    console.log('加载HashChangeEvent.HashChangeEvent polyfill');
}
```

