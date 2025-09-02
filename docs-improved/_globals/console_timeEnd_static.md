# console.timeEnd_static API 兼容性数据

## 基本信息

- **API名称**: `console.timeEnd_static`
- **MDN文档**: [console.timeEnd_static](https://developer.mozilla.org/docs/Web/API/console/timeEnd_static)
- **规范文档**: [查看规范](https://console.spec.whatwg.org/#timeend)
- **标签**: `web-features:console`
- **描述**: `timeEnd()` static method

## 使用示例

### 基本用法

```javascript
// console.timeEnd_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.timeEnd_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 10 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Node.js | 0.10.0 |  |
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 2

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 10

### Internet Explorer

- **支持版本**: 11

### Node.js

- **支持版本**: 0.10.0

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.timeEnd_static是否支持
function isconsoleTimeEnd_staticSupported() {
    return 'timeEnd_static' in console && typeof console.timeEnd_static === 'function';
}

if (isconsoleTimeEnd_staticSupported()) {
    console.log('console.timeEnd_static 支持');
    // 使用console.timeEnd_static
} else {
    console.log('console.timeEnd_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.timeEnd_static polyfill
if (!console.timeEnd_static) {
    // 在这里添加polyfill实现
    console.log('加载console.timeEnd_static polyfill');
}
```

