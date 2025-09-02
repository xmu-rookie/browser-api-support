# HTMLElement.dragexit_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.dragexit_event`
- **描述**: `dragexit` event

## 使用示例

### 基本用法

```javascript
// HTMLElement.dragexit_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.dragexit_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 同主版本 |  |
| Safari | 3.1 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Edge

- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12

### Safari

- **支持版本**: 3.1

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.dragexit_event是否支持
function isHTMLElementDragexit_eventSupported() {
    return 'dragexit_event' in htmlelement && typeof htmlelement.dragexit_event === 'function';
}

if (isHTMLElementDragexit_eventSupported()) {
    console.log('HTMLElement.dragexit_event 支持');
    // 使用HTMLElement.dragexit_event
} else {
    console.log('HTMLElement.dragexit_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.dragexit_event polyfill
if (!htmlelement.dragexit_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.dragexit_event polyfill');
}
```

