# Window.getComputedStyle API 兼容性数据

## 基本信息

- **API名称**: `Window.getComputedStyle`
- **MDN文档**: [Window.getComputedStyle](https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle)
- **标签**: `web-features:get-computed-style`

## 使用示例

### 基本用法

```javascript
// Window.getComputedStyle 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.getComputedStyle API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 1 | Before version 62 this function returned `null` when called on a Window with no presentation (e.g. a... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 7.2 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
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
- **注意事项**:
  - Before version 62 this function returned `null` when called on a Window with no presentation (e.g. an iframe with `display: none;` set). Since 62 it returns a `CSSStyleDeclaration` object with `length` 0, containing empty strings ([bug 1467722](https://bugzil.la/1467722); also see [bug 1471231](https://bugzil.la/1471231) for further work).

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 7.2

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 相关子API

该API包含以下子功能：

- **pseudo_element_support**: Pseudo-element support

