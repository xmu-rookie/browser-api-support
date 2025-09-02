# setInterval API 兼容性数据

## 基本信息

- **API名称**: `setInterval`
- **MDN文档**: [setInterval](https://developer.mozilla.org/docs/Web/API/Window/setInterval)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval-dev)
- **标签**: `web-features:setinterval`

## 使用示例

### 基本用法

```javascript
// 设置延时执行
const timeoutId = setTimeout(() => {
    console.log('延时执行的代码');
}, 1000);

// 清除延时
clearTimeout(timeoutId);
```

### 高级用法

```javascript
// 传递参数
setTimeout((message, count) => {
    console.log(`${message} - 第${count}次`);
}, 2000, 'Hello World', 1);

// 返回Promise的封装
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 使用async/await
async function example() {
    console.log('开始');
    await delay(1000);
    console.log('1秒后执行');
}
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
| Internet Explorer | 4 |  |
| Node.js | 0.10.0 (部分支持) | Returns a `Timeout` object instead of the `intervalID`.; Does not support passing a `code` string and throws when the first parameter is not a function. |
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

### Node.js

- **支持版本**: 0.10.0
- **部分实现**: 是
- **注意事项**:
  - Returns a `Timeout` object instead of the `intervalID`.
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
// 检查setInterval是否支持
function issetIntervalSupported() {
    return typeof setInterval === 'function';
}

if (issetIntervalSupported()) {
    console.log('setInterval 支持');
    // 使用setInterval
} else {
    console.log('setInterval 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// setInterval polyfill
if (!window.setInterval) {
    // 在这里添加polyfill实现
    console.log('加载setInterval polyfill');
}
```

