# HTMLMarqueeElement.finish_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLMarqueeElement.finish_event`
- **描述**: `finish` event

## 使用示例

### 基本用法

```javascript
// HTMLMarqueeElement.finish_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMarqueeElement.finish_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
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

- **支持版本**: 不支持

### Edge

- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 65
- **移除版本**: 126

### Internet Explorer

- **支持版本**: 5.5

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMarqueeElement.finish_event是否支持
function isHTMLMarqueeElementFinish_eventSupported() {
    return 'finish_event' in htmlmarqueeelement && typeof htmlmarqueeelement.finish_event === 'function';
}

if (isHTMLMarqueeElementFinish_eventSupported()) {
    console.log('HTMLMarqueeElement.finish_event 支持');
    // 使用HTMLMarqueeElement.finish_event
} else {
    console.log('HTMLMarqueeElement.finish_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMarqueeElement.finish_event polyfill
if (!htmlmarqueeelement.finish_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMarqueeElement.finish_event polyfill');
}
```

