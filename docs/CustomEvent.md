# CustomEvent API 兼容性数据

## 基本信息

- **API名称**: `CustomEvent`
- **MDN文档**: [CustomEvent](https://developer.mozilla.org/docs/Web/API/CustomEvent)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#interface-customevent)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// CustomEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('CustomEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 19.0.0 |  |
| oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 5

### deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 9

### Node.js

- **支持版本**: 19.0.0

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查CustomEvent是否支持
function isCustomEventSupported() {
    return 'CustomEvent' in window || typeof CustomEvent !== 'undefined';
}

if (isCustomEventSupported()) {
    console.log('CustomEvent 支持');
    // 使用CustomEvent
} else {
    console.log('CustomEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CustomEvent polyfill
if (!window.CustomEvent) {
    // 在这里添加polyfill实现
    console.log('加载CustomEvent polyfill');
}
```

