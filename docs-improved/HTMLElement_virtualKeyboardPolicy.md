# HTMLElement.virtualKeyboardPolicy API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.virtualKeyboardPolicy`
- **MDN文档**: [HTMLElement.virtualKeyboardPolicy](https://developer.mozilla.org/docs/Web/API/HTMLElement/virtualKeyboardPolicy)
- **规范文档**: [查看规范](https://w3c.github.io/virtual-keyboard/#dom-elementcontenteditable-virtualkeyboardpolicy)
- **标签**: `web-features:virtual-keyboard`

## 使用示例

### 基本用法

```javascript
// HTMLElement.virtualKeyboardPolicy 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.virtualKeyboardPolicy API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
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

- **支持版本**: 94

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.virtualKeyboardPolicy是否支持
function isHTMLElementVirtualKeyboardPolicySupported() {
    return 'virtualKeyboardPolicy' in htmlelement && typeof htmlelement.virtualKeyboardPolicy === 'function';
}

if (isHTMLElementVirtualKeyboardPolicySupported()) {
    console.log('HTMLElement.virtualKeyboardPolicy 支持');
    // 使用HTMLElement.virtualKeyboardPolicy
} else {
    console.log('HTMLElement.virtualKeyboardPolicy 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.virtualKeyboardPolicy polyfill
if (!htmlelement.virtualKeyboardPolicy) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.virtualKeyboardPolicy polyfill');
}
```

