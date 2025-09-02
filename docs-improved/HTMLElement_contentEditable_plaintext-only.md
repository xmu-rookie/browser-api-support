# HTMLElement.contentEditable.plaintext-only API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.contentEditable.plaintext-only`
- **标签**: `web-features:contenteditable-plaintextonly`
- **描述**: `plaintext-only` as a value

## 使用示例

### 基本用法

```javascript
// HTMLElement.contentEditable.plaintext-only 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.contentEditable.plaintext-only API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 136 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 51

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 136

### Safari

- **支持版本**: 5.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.contentEditable.plaintext-only是否支持
function isHTMLElementContentEditableSupported() {
    return 'contentEditable' in htmlelement && typeof htmlelement.contentEditable === 'function';
}

if (isHTMLElementContentEditableSupported()) {
    console.log('HTMLElement.contentEditable.plaintext-only 支持');
    // 使用HTMLElement.contentEditable.plaintext-only
} else {
    console.log('HTMLElement.contentEditable.plaintext-only 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.contentEditable.plaintext-only polyfill
if (!htmlelement.contentEditable) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.contentEditable.plaintext-only polyfill');
}
```

