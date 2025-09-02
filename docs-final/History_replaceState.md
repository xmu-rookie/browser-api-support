# History.replaceState API 兼容性数据

## 基本信息

- **API名称**: `History.replaceState`
- **MDN文档**: [History.replaceState](https://developer.mozilla.org/docs/Web/API/History/replaceState)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-history-replacestate-dev)
- **标签**: `web-features:history`

## 使用示例

### 基本用法

```javascript
// History.replaceState 使用示例
// 请查阅MDN文档了解具体用法
console.log('History.replaceState API');
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

## 相关子API

该API包含以下子功能：

- **unused_parameter**: Whether the `unused` parameter is used

