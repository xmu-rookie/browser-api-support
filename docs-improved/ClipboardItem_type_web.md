# ClipboardItem.type_web API 兼容性数据

## 基本信息

- **API名称**: `ClipboardItem.type_web`
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#optional-data-types)
- **标签**: `web-features:clipboard-custom-format`
- **描述**: Support for custom formats starting with `web `.

## 使用示例

### 基本用法

```javascript
// ClipboardItem.type_web 使用示例
// 请查阅MDN文档了解具体用法
console.log('ClipboardItem.type_web API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 104 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 104

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ClipboardItem.type_web是否支持
function isClipboardItemType_webSupported() {
    return 'type_web' in clipboarditem && typeof clipboarditem.type_web === 'function';
}

if (isClipboardItemType_webSupported()) {
    console.log('ClipboardItem.type_web 支持');
    // 使用ClipboardItem.type_web
} else {
    console.log('ClipboardItem.type_web 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ClipboardItem.type_web polyfill
if (!clipboarditem.type_web) {
    // 在这里添加polyfill实现
    console.log('加载ClipboardItem.type_web polyfill');
}
```

