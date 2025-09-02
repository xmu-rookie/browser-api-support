# HTMLInputElement.search_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.search_event`
- **MDN文档**: [HTMLInputElement.search_event](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/search_event)
- **描述**: `search` event

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.search_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.search_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 2
- **移除版本**: 17.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.search_event是否支持
function isHTMLInputElementSearch_eventSupported() {
    return 'search_event' in htmlinputelement && typeof htmlinputelement.search_event === 'function';
}

if (isHTMLInputElementSearch_eventSupported()) {
    console.log('HTMLInputElement.search_event 支持');
    // 使用HTMLInputElement.search_event
} else {
    console.log('HTMLInputElement.search_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.search_event polyfill
if (!htmlinputelement.search_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.search_event polyfill');
}
```

