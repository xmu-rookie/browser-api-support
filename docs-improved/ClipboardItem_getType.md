# ClipboardItem.getType API 兼容性数据

## 基本信息

- **API名称**: `ClipboardItem.getType`
- **MDN文档**: [ClipboardItem.getType](https://developer.mozilla.org/docs/Web/API/ClipboardItem/getType)
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#dom-clipboarditem-gettype)
- **标签**: `web-features:async-clipboard`
- **描述**: `getType()` method

## 使用示例

### 基本用法

```javascript
// ClipboardItem.getType 使用示例
// 请查阅MDN文档了解具体用法
console.log('ClipboardItem.getType API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 76 |  |
| Chrome Android | 84 |  |
| Edge | 同主版本 |  |
| Firefox | 127 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 76

### Chrome Android

- **支持版本**: 84

### Firefox

- **支持版本**: 127

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ClipboardItem.getType是否支持
function isClipboardItemGetTypeSupported() {
    return 'getType' in clipboarditem && typeof clipboarditem.getType === 'function';
}

if (isClipboardItemGetTypeSupported()) {
    console.log('ClipboardItem.getType 支持');
    // 使用ClipboardItem.getType
} else {
    console.log('ClipboardItem.getType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ClipboardItem.getType polyfill
if (!clipboarditem.getType) {
    // 在这里添加polyfill实现
    console.log('加载ClipboardItem.getType polyfill');
}
```

