# HTMLButtonElement.popoverTargetElement.implicit_anchor_reference API 兼容性数据

## 基本信息

- **API名称**: `HTMLButtonElement.popoverTargetElement.implicit_anchor_reference`
- **标签**: `web-features:anchor-positioning`
- **描述**: Implicit anchor reference via `popoverTargetElement`

## 使用示例

### 基本用法

```javascript
// HTMLButtonElement.popoverTargetElement.implicit_anchor_reference 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLButtonElement.popoverTargetElement.implicit_anchor_reference API');
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
// 检查HTMLButtonElement.popoverTargetElement.implicit_anchor_reference是否支持
function isHTMLButtonElementPopoverTargetElementSupported() {
    return 'popoverTargetElement' in htmlbuttonelement && typeof htmlbuttonelement.popoverTargetElement === 'function';
}

if (isHTMLButtonElementPopoverTargetElementSupported()) {
    console.log('HTMLButtonElement.popoverTargetElement.implicit_anchor_reference 支持');
    // 使用HTMLButtonElement.popoverTargetElement.implicit_anchor_reference
} else {
    console.log('HTMLButtonElement.popoverTargetElement.implicit_anchor_reference 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLButtonElement.popoverTargetElement.implicit_anchor_reference polyfill
if (!htmlbuttonelement.popoverTargetElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLButtonElement.popoverTargetElement.implicit_anchor_reference polyfill');
}
```

