# Document.execCommand.defaultParagraphSeparator API 兼容性数据

## 基本信息

- **API名称**: `Document.execCommand.defaultParagraphSeparator`
- **标签**: `web-features:execcommand`
- **描述**: `defaultParagraphSeparator` command

## 使用示例

### 基本用法

```javascript
// Document.execCommand.defaultParagraphSeparator 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.execCommand.defaultParagraphSeparator API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | ≤18 |  |
| Firefox | 55 |  |
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

- **支持版本**: 不支持

### Edge

- **支持版本**: ≤18
- **移除版本**: 79

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.execCommand.defaultParagraphSeparator是否支持
function isDocumentExecCommandSupported() {
    return 'execCommand' in document && typeof document.execCommand === 'function';
}

if (isDocumentExecCommandSupported()) {
    console.log('Document.execCommand.defaultParagraphSeparator 支持');
    // 使用Document.execCommand.defaultParagraphSeparator
} else {
    console.log('Document.execCommand.defaultParagraphSeparator 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.execCommand.defaultParagraphSeparator polyfill
if (!document.execCommand) {
    // 在这里添加polyfill实现
    console.log('加载Document.execCommand.defaultParagraphSeparator polyfill');
}
```

