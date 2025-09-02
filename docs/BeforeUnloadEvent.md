# BeforeUnloadEvent API 兼容性数据

## 基本信息

- **API名称**: `BeforeUnloadEvent`
- **MDN文档**: [BeforeUnloadEvent](https://developer.mozilla.org/docs/Web/API/BeforeUnloadEvent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-beforeunloadevent-interface)
- **标签**: `web-features:beforeunload`

## 使用示例

### 基本用法

```javascript
// BeforeUnloadEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('BeforeUnloadEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 30 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.24 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 3.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 30

### deno

- **支持版本**: 1.24

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 4

### Safari

- **支持版本**: 7

### Samsung Internet

- **支持版本**: 3.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查BeforeUnloadEvent是否支持
function isBeforeUnloadEventSupported() {
    return 'BeforeUnloadEvent' in window || typeof BeforeUnloadEvent !== 'undefined';
}

if (isBeforeUnloadEventSupported()) {
    console.log('BeforeUnloadEvent 支持');
    // 使用BeforeUnloadEvent
} else {
    console.log('BeforeUnloadEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BeforeUnloadEvent polyfill
if (!window.BeforeUnloadEvent) {
    // 在这里添加polyfill实现
    console.log('加载BeforeUnloadEvent polyfill');
}
```

