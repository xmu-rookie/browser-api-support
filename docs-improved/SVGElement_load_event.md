# SVGElement.load_event API 兼容性数据

## 基本信息

- **API名称**: `SVGElement.load_event`
- **MDN文档**: [SVGElement.load_event](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/interact.html#LoadEvent)
- **标签**: `web-features:svg`
- **描述**: `load` event

## 使用示例

### 基本用法

```javascript
// SVGElement.load_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGElement.load_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 | See [bug 620002](https://bugzil.la/620002) for implementation status of the standard `load` event. |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4
- **注意事项**:
  - See [bug 620002](https://bugzil.la/620002) for implementation status of the standard `load` event.

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGElement.load_event是否支持
function isSVGElementLoad_eventSupported() {
    return 'load_event' in svgelement && typeof svgelement.load_event === 'function';
}

if (isSVGElementLoad_eventSupported()) {
    console.log('SVGElement.load_event 支持');
    // 使用SVGElement.load_event
} else {
    console.log('SVGElement.load_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGElement.load_event polyfill
if (!svgelement.load_event) {
    // 在这里添加polyfill实现
    console.log('加载SVGElement.load_event polyfill');
}
```

