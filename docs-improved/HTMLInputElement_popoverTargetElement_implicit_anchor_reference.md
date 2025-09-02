# HTMLInputElement.popoverTargetElement.implicit_anchor_reference API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.popoverTargetElement.implicit_anchor_reference`
- **标签**: `web-features:anchor-positioning`
- **描述**: Implicit anchor reference via `popoverTargetElement`

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.popoverTargetElement.implicit_anchor_reference 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.popoverTargetElement.implicit_anchor_reference API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 133 |  |
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

- **支持版本**: 133

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.popoverTargetElement.implicit_anchor_reference是否支持
function isHTMLInputElementPopoverTargetElementSupported() {
    return 'popoverTargetElement' in htmlinputelement && typeof htmlinputelement.popoverTargetElement === 'function';
}

if (isHTMLInputElementPopoverTargetElementSupported()) {
    console.log('HTMLInputElement.popoverTargetElement.implicit_anchor_reference 支持');
    // 使用HTMLInputElement.popoverTargetElement.implicit_anchor_reference
} else {
    console.log('HTMLInputElement.popoverTargetElement.implicit_anchor_reference 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.popoverTargetElement.implicit_anchor_reference polyfill
if (!htmlinputelement.popoverTargetElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.popoverTargetElement.implicit_anchor_reference polyfill');
}
```

