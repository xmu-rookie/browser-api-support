# UIEvent.detail API 兼容性数据

## 基本信息

- **API名称**: `UIEvent.detail`
- **MDN文档**: [UIEvent.detail](https://developer.mozilla.org/docs/Web/API/UIEvent/detail)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-uievent-detail)

## 使用示例

### 基本用法

```javascript
// UIEvent.detail 使用示例
// 请查阅MDN文档了解具体用法
console.log('UIEvent.detail API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | Always `0` on `click` and `dblclick` events. On `mousedown` and `mouseup` events, the count is not u... |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9
- **部分实现**: 是
- **注意事项**:
  - Always `0` on `click` and `dblclick` events. On `mousedown` and `mouseup` events, the count is not unique to the element, but is rather the global click count for the current document -- even across refreshes.

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查UIEvent.detail是否支持
function isUIEventDetailSupported() {
    return 'detail' in uievent && typeof uievent.detail === 'function';
}

if (isUIEventDetailSupported()) {
    console.log('UIEvent.detail 支持');
    // 使用UIEvent.detail
} else {
    console.log('UIEvent.detail 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// UIEvent.detail polyfill
if (!uievent.detail) {
    // 在这里添加polyfill实现
    console.log('加载UIEvent.detail polyfill');
}
```

