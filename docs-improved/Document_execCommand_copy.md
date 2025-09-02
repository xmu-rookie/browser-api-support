# Document.execCommand.copy API 兼容性数据

## 基本信息

- **API名称**: `Document.execCommand.copy`
- **标签**: `web-features:execcommand`
- **描述**: `copy` command

## 使用示例

### 基本用法

```javascript
// Document.execCommand.copy 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.execCommand.copy API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 41 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 42

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 41

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.execCommand.copy是否支持
function isDocumentExecCommandSupported() {
    return 'execCommand' in document && typeof document.execCommand === 'function';
}

if (isDocumentExecCommandSupported()) {
    console.log('Document.execCommand.copy 支持');
    // 使用Document.execCommand.copy
} else {
    console.log('Document.execCommand.copy 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.execCommand.copy polyfill
if (!document.execCommand) {
    // 在这里添加polyfill实现
    console.log('加载Document.execCommand.copy polyfill');
}
```

