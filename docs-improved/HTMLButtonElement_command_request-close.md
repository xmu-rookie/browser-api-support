# HTMLButtonElement.command.request-close API 兼容性数据

## 基本信息

- **API名称**: `HTMLButtonElement.command.request-close`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-command-request-close)
- **标签**: `web-features:invoker-commands`
- **描述**: `request-close` value

## 使用示例

### 基本用法

```javascript
// HTMLButtonElement.command.request-close 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLButtonElement.command.request-close API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 139 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | preview |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | preview |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 139

### Firefox

- **支持版本**: preview
- **需要标志**: 
  - dom.element.commandfor.enabled: true

### Safari

- **支持版本**: preview

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLButtonElement.command.request-close是否支持
function isHTMLButtonElementCommandSupported() {
    return 'command' in htmlbuttonelement && typeof htmlbuttonelement.command === 'function';
}

if (isHTMLButtonElementCommandSupported()) {
    console.log('HTMLButtonElement.command.request-close 支持');
    // 使用HTMLButtonElement.command.request-close
} else {
    console.log('HTMLButtonElement.command.request-close 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLButtonElement.command.request-close polyfill
if (!htmlbuttonelement.command) {
    // 在这里添加polyfill实现
    console.log('加载HTMLButtonElement.command.request-close polyfill');
}
```

