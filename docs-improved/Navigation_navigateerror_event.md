# Navigation.navigateerror_event API 兼容性数据

## 基本信息

- **API名称**: `Navigation.navigateerror_event`
- **MDN文档**: [Navigation.navigateerror_event](https://developer.mozilla.org/docs/Web/API/Navigation/navigateerror_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-navigateerror)
- **标签**: `web-features:navigation`
- **描述**: `navigateerror` event

## 使用示例

### 基本用法

```javascript
// Navigation.navigateerror_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigation.navigateerror_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
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

- **支持版本**: 102

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigation.navigateerror_event是否支持
function isNavigationNavigateerror_eventSupported() {
    return 'navigateerror_event' in navigation && typeof navigation.navigateerror_event === 'function';
}

if (isNavigationNavigateerror_eventSupported()) {
    console.log('Navigation.navigateerror_event 支持');
    // 使用Navigation.navigateerror_event
} else {
    console.log('Navigation.navigateerror_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigation.navigateerror_event polyfill
if (!navigation.navigateerror_event) {
    // 在这里添加polyfill实现
    console.log('加载Navigation.navigateerror_event polyfill');
}
```

