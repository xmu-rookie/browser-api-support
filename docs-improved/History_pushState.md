# History.pushState API 兼容性数据

## 基本信息

- **API名称**: `History.pushState`
- **MDN文档**: [History.pushState](https://developer.mozilla.org/docs/Web/API/History/pushState)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-history-pushstate-dev)
- **标签**: `web-features:history`

## 使用示例

### 基本用法

```javascript
// History.pushState 使用示例
// 请查阅MDN文档了解具体用法
console.log('History.pushState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 | Until Firefox 5, the passed object is serialized using JSON. Starting in Firefox 6, the object is se... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 11.5 |  |
| Opera Android | 11.5 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4
- **注意事项**:
  - Until Firefox 5, the passed object is serialized using JSON. Starting in Firefox 6, the object is serialized using [the structured clone algorithm](https://developer.mozilla.org/docs/DOM/The_structured_clone_algorithm). This allows a wider variety of objects to be safely passed.

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 11.5

### Opera Android

- **支持版本**: 11.5

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查History.pushState是否支持
function isHistoryPushStateSupported() {
    return 'pushState' in history && typeof history.pushState === 'function';
}

if (isHistoryPushStateSupported()) {
    console.log('History.pushState 支持');
    // 使用History.pushState
} else {
    console.log('History.pushState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// History.pushState polyfill
if (!history.pushState) {
    // 在这里添加polyfill实现
    console.log('加载History.pushState polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **unused_parameter**: Whether the `unused` parameter is used

