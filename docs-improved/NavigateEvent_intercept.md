# NavigateEvent.intercept API 兼容性数据

## 基本信息

- **API名称**: `NavigateEvent.intercept`
- **MDN文档**: [NavigateEvent.intercept](https://developer.mozilla.org/docs/Web/API/NavigateEvent/intercept)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-navigateevent-intercept-dev)
- **标签**: `web-features:navigation`

## 使用示例

### 基本用法

```javascript
// NavigateEvent.intercept 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigateEvent.intercept API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 105 |  |
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

- **支持版本**: 105
- **支持版本**: 102
- **移除版本**: 108

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NavigateEvent.intercept是否支持
function isNavigateEventInterceptSupported() {
    return 'intercept' in navigateevent && typeof navigateevent.intercept === 'function';
}

if (isNavigateEventInterceptSupported()) {
    console.log('NavigateEvent.intercept 支持');
    // 使用NavigateEvent.intercept
} else {
    console.log('NavigateEvent.intercept 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigateEvent.intercept polyfill
if (!navigateevent.intercept) {
    // 在这里添加polyfill实现
    console.log('加载NavigateEvent.intercept polyfill');
}
```

