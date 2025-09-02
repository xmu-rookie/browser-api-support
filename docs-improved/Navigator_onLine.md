# Navigator.onLine API 兼容性数据

## 基本信息

- **API名称**: `Navigator.onLine`
- **MDN文档**: [Navigator.onLine](https://developer.mozilla.org/docs/Web/API/Navigator/onLine)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-online-dev)
- **标签**: `web-features:online`

## 使用示例

### 基本用法

```javascript
// Navigator.onLine 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.onLine API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 | Earlier versions of Chrome incorrectly return true when a tab is first opened, but it starts reporti... |
| Chrome Android | 18 |  |
| Edge | 12 |  |
| Firefox | 1.5 | Since Firefox 4 the browser returns `true` when 'Work Offline' mode is disabled and `false` when it ... |
| Firefox Android | 4 |  |
| Internet Explorer | 4 | in Internet Explorer 8 'online' and 'offline' events are raised on the `document.body`; under IE 9 t... |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 3 | From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled an... |
| Opera Android | 10.1 | From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled an... |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4 | Can incorrectly return true, see [bug 41369933](https://crbug.com/41369933). |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2
- **注意事项**:
  - Earlier versions of Chrome incorrectly return true when a tab is first opened, but it starts reporting the correct connectivity status after the first network event. Windows: 11, macOS: 14, ChromeOS: 13, Linux: Always returns `true`. For history, see [bug 40530968](https://crbug.com/40530968).

### Chrome Android

- **支持版本**: 18

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5
- **注意事项**:
  - Since Firefox 4 the browser returns `true` when 'Work Offline' mode is disabled and `false` when it is enabled, regardless of actual connectivity. Since Firefox 41, on OS X and Windows, the returned values follow the actual network connectivity, unless 'Work offline' mode is selected (where it will always return `false`).

### Firefox Android

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 4
- **注意事项**:
  - in Internet Explorer 8 'online' and 'offline' events are raised on the `document.body`; under IE 9 they are raised on both `document.body` and `window`.

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: 3
- **注意事项**:
  - From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled and `false` when it is enabled, regardless of actual connectivity.

### Opera Android

- **支持版本**: 10.1
- **注意事项**:
  - From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled and `false` when it is enabled, regardless of actual connectivity.

### Safari

- **支持版本**: 4

### WebView Android

- **支持版本**: 4.4
- **部分实现**: 是
- **注意事项**:
  - Can incorrectly return true, see [bug 41369933](https://crbug.com/41369933).

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.onLine是否支持
function isNavigatorOnLineSupported() {
    return 'onLine' in navigator && typeof navigator.onLine === 'function';
}

if (isNavigatorOnLineSupported()) {
    console.log('Navigator.onLine 支持');
    // 使用Navigator.onLine
} else {
    console.log('Navigator.onLine 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.onLine polyfill
if (!navigator.onLine) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.onLine polyfill');
}
```

