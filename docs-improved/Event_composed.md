# Event.composed API 兼容性数据

## 基本信息

- **API名称**: `Event.composed`
- **MDN文档**: [Event.composed](https://developer.mozilla.org/docs/Web/API/Event/composed)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-event-composed①)
- **标签**: `web-features:shadow-dom`

## 使用示例

### 基本用法

```javascript
// Event.composed 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.composed API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 52 | Before Firefox 95, this property was incorrectly set to `false` on `<select>` and `<input type='chec... |
| Firefox Android | 同主版本 |  |
| Node.js | 14.5.0 | This is not used in Node.js and is provided purely for completeness. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 53

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 52
- **注意事项**:
  - Before Firefox 95, this property was incorrectly set to `false` on `<select>` and `<input type='checkbox'>` elements.

### Node.js

- **支持版本**: 14.5.0
- **注意事项**:
  - This is not used in Node.js and is provided purely for completeness.

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查Event.composed是否支持
function isEventComposedSupported() {
    return 'composed' in event && typeof event.composed === 'function';
}

if (isEventComposedSupported()) {
    console.log('Event.composed 支持');
    // 使用Event.composed
} else {
    console.log('Event.composed 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Event.composed polyfill
if (!event.composed) {
    // 在这里添加polyfill实现
    console.log('加载Event.composed polyfill');
}
```

