# NavigateEvent.NavigateEvent API 兼容性数据

## 基本信息

- **API名称**: `NavigateEvent.NavigateEvent`
- **MDN文档**: [NavigateEvent.NavigateEvent](https://developer.mozilla.org/docs/Web/API/NavigateEvent/NavigateEvent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-navigateevent-interface)
- **标签**: `web-features:navigation`
- **描述**: `NavigateEvent()` constructor

## 使用示例

### 基本用法

```javascript
// NavigateEvent.NavigateEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigateEvent.NavigateEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 102

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NavigateEvent.NavigateEvent是否支持
function isNavigateEventNavigateEventSupported() {
    return 'NavigateEvent' in navigateevent && typeof navigateevent.NavigateEvent === 'function';
}

if (isNavigateEventNavigateEventSupported()) {
    console.log('NavigateEvent.NavigateEvent 支持');
    // 使用NavigateEvent.NavigateEvent
} else {
    console.log('NavigateEvent.NavigateEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigateEvent.NavigateEvent polyfill
if (!navigateevent.NavigateEvent) {
    // 在这里添加polyfill实现
    console.log('加载NavigateEvent.NavigateEvent polyfill');
}
```

