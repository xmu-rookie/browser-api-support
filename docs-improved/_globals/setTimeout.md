# setTimeout API 兼容性数据

## 基本信息

- **API名称**: `setTimeout`
- **MDN文档**: [setTimeout](https://developer.mozilla.org/docs/Web/API/Window/setTimeout)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout-dev)
- **标签**: `web-features:settimeout`

## 使用示例

### 基本用法

```javascript
// setTimeout 使用示例
// 请查阅MDN文档了解具体用法
console.log('setTimeout API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Node.js | 0.10.0 | Returns a `Timeout` object instead of the `timeoutID`.; Does not support passing a `code` string and... |
| Oculus | 同主版本 |  |
| Opera | 4 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Node.js

- **支持版本**: 0.10.0
- **部分实现**: 是
- **注意事项**:
  - Returns a `Timeout` object instead of the `timeoutID`.
  - Does not support passing a `code` string and throws when the first parameter is not a function.

### Opera

- **支持版本**: 4

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查setTimeout是否支持
function issetTimeoutSupported() {
    return 'setTimeout' in window || typeof setTimeout !== 'undefined';
}

if (issetTimeoutSupported()) {
    console.log('setTimeout 支持');
    // 使用setTimeout
} else {
    console.log('setTimeout 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// setTimeout polyfill
if (!window.setTimeout) {
    // 在这里添加polyfill实现
    console.log('加载setTimeout polyfill');
}
```

