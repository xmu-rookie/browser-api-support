# clearInterval API 兼容性数据

## 基本信息

- **API名称**: `clearInterval`
- **MDN文档**: [clearInterval](https://developer.mozilla.org/docs/Web/API/Window/clearInterval)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-clearinterval-dev)
- **标签**: `web-features:setinterval`

## 使用示例

### 基本用法

```javascript
// clearInterval 使用示例
// 请查阅MDN文档了解具体用法
console.log('clearInterval API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 | From Internet Explorer 4 through 8, `clearInterval` is an Object rather than a Function. This behavior was fixed in Internet Explorer 9. |
| Node.js | 0.10.0 (部分支持) | Takes a `Timeout` object instead of the `intervalID`. |
| oculus | 同主版本 |  |
| Opera | 4 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 1

### deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4
- **注意事项**:
  - From Internet Explorer 4 through 8, `clearInterval` is an Object rather than a Function. This behavior was fixed in Internet Explorer 9.

### Node.js

- **支持版本**: 0.10.0
- **部分实现**: 是
- **注意事项**:
  - Takes a `Timeout` object instead of the `intervalID`.

### Opera

- **支持版本**: 4

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查clearInterval是否支持
function isclearIntervalSupported() {
    return 'clearInterval' in window || typeof clearInterval !== 'undefined';
}

if (isclearIntervalSupported()) {
    console.log('clearInterval 支持');
    // 使用clearInterval
} else {
    console.log('clearInterval 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// clearInterval polyfill
if (!window.clearInterval) {
    // 在这里添加polyfill实现
    console.log('加载clearInterval polyfill');
}
```

