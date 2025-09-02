# console API 兼容性数据

## 基本信息

- **API名称**: `console`
- **MDN文档**: [console](https://developer.mozilla.org/docs/Web/API/console)
- **规范文档**: [查看规范](https://console.spec.whatwg.org/#console-namespace)
- **标签**: `web-features:console`

## 使用示例

### 基本用法

```javascript
// console 使用示例
// 请查阅MDN文档了解具体用法
console.log('console API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 8 | In Internet Explorer 8 and 9, the `console` object is `undefined` when the developer tools are not open. This behavior was fixed in Internet Explorer 10. |
| Node.js | 0.10.0 |  |
| oculus | 同主版本 |  |
| Opera | 10.5 |  |
| Opera Android | 11 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
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

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 8
- **注意事项**:
  - In Internet Explorer 8 and 9, the `console` object is `undefined` when the developer tools are not open. This behavior was fixed in Internet Explorer 10.

### Node.js

- **支持版本**: 0.10.0

### Opera

- **支持版本**: 10.5

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查console是否支持
function isconsoleSupported() {
    return 'console' in window || typeof console !== 'undefined';
}

if (isconsoleSupported()) {
    console.log('console 支持');
    // 使用console
} else {
    console.log('console 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console polyfill
if (!window.console) {
    // 在这里添加polyfill实现
    console.log('加载console polyfill');
}
```

