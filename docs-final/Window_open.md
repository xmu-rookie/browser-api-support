# Window.open API 兼容性数据

## 基本信息

- **API名称**: `Window.open`
- **MDN文档**: [Window.open](https://developer.mozilla.org/docs/Web/API/Window/open)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-open-dev,https://drafts.csswg.org/cssom-view/#the-features-argument-to-the-open()-method)
- **标签**: `web-features:window`

## 使用示例

### 基本用法

```javascript
// Window.open 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.open API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 3 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 1 | This method will not function if the `target` parameter is unspecified or set to `_blank`. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 3

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

### Safari iOS

- **支持版本**: 1
- **部分实现**: 是
- **注意事项**:
  - This method will not function if the `target` parameter is unspecified or set to `_blank`.

## 相关子API

该API包含以下子功能：

- **features_parameter_attributionsrc**: `features` parameter accepts `"attributionsrc"` value
- **features_parameter_popup**: `features` parameter accepts `"popup"` value
- **once_per_event**: One `Window.open()` call per event
- **relative-multi-screen**: Opened relative to the [Multi-screen origin](https://developer.mozilla.org/docs/Web/API/Window_Management_API/Multi-screen_origin)

