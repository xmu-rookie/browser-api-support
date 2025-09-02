# Document.execCommand API 兼容性数据

## 基本信息

- **API名称**: `Document.execCommand`
- **MDN文档**: [Document.execCommand](https://developer.mozilla.org/docs/Web/API/Document/execCommand)
- **标签**: `web-features:execcommand`

## 使用示例

### 基本用法

```javascript
// Document.execCommand 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.execCommand API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 69 | From Firefox 82, nested calls are not supported (return `false`). See [bug 1634262](https://bugzil.l... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 1.3 |  |
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

- **支持版本**: 69
- **注意事项**:
  - From Firefox 82, nested calls are not supported (return `false`). See [bug 1634262](https://bugzil.la/1634262).
  - Before Firefox 89, manipulating the content of `<input>` and `<textarea>` elements using `Document.execCommand()` commands requires workarounds (see [bug 1220696](https://bugzil.la/1220696)).
- **支持版本**: 1
- **移除版本**: 69
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.execCommand是否支持
function isDocumentExecCommandSupported() {
    return 'execCommand' in document && typeof document.execCommand === 'function';
}

if (isDocumentExecCommandSupported()) {
    console.log('Document.execCommand 支持');
    // 使用Document.execCommand
} else {
    console.log('Document.execCommand 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.execCommand polyfill
if (!document.execCommand) {
    // 在这里添加polyfill实现
    console.log('加载Document.execCommand polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **copy**: `copy` command
- **cut**: `cut` command
- **defaultParagraphSeparator**: `defaultParagraphSeparator` command
- **insertBrOnReturn**: `insertBrOnReturn` command

