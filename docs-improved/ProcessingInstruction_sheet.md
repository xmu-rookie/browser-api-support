# ProcessingInstruction.sheet API 兼容性数据

## 基本信息

- **API名称**: `ProcessingInstruction.sheet`
- **MDN文档**: [ProcessingInstruction.sheet](https://developer.mozilla.org/docs/Web/API/ProcessingInstruction/sheet)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-linkstyle-sheet)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// ProcessingInstruction.sheet 使用示例
// 请查阅MDN文档了解具体用法
console.log('ProcessingInstruction.sheet API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Firefox

- **支持版本**: 1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ProcessingInstruction.sheet是否支持
function isProcessingInstructionSheetSupported() {
    return 'sheet' in processinginstruction && typeof processinginstruction.sheet === 'function';
}

if (isProcessingInstructionSheetSupported()) {
    console.log('ProcessingInstruction.sheet 支持');
    // 使用ProcessingInstruction.sheet
} else {
    console.log('ProcessingInstruction.sheet 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ProcessingInstruction.sheet polyfill
if (!processinginstruction.sheet) {
    // 在这里添加polyfill实现
    console.log('加载ProcessingInstruction.sheet polyfill');
}
```

