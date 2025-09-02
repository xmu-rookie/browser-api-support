# console.timeLog_static API 兼容性数据

## 基本信息

- **API名称**: `console.timeLog_static`
- **MDN文档**: [console.timeLog_static](https://developer.mozilla.org/docs/Web/API/console/timeLog_static)
- **规范文档**: [查看规范](https://console.spec.whatwg.org/#timelog)
- **标签**: `web-features:console`
- **描述**: `timeLog()` static method

## 使用示例

### 基本用法

```javascript
// console.timeLog_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.timeLog_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 71 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 62 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 10.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | 60 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 71

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 62

### Node.js

- **支持版本**: 10.7.0

### Opera

- **支持版本**: 60

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.timeLog_static是否支持
function isconsoleTimeLog_staticSupported() {
    return 'timeLog_static' in console && typeof console.timeLog_static === 'function';
}

if (isconsoleTimeLog_staticSupported()) {
    console.log('console.timeLog_static 支持');
    // 使用console.timeLog_static
} else {
    console.log('console.timeLog_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.timeLog_static polyfill
if (!console.timeLog_static) {
    // 在这里添加polyfill实现
    console.log('加载console.timeLog_static polyfill');
}
```

