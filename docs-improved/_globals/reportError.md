# reportError API 兼容性数据

## 基本信息

- **API名称**: `reportError`
- **MDN文档**: [reportError](https://developer.mozilla.org/docs/Web/API/Window/reportError)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#runtime-script-errors)

## 使用示例

### 基本用法

```javascript
// reportError 使用示例
// 请查阅MDN文档了解具体用法
console.log('reportError API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 95 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.21 |  |
| Edge | 同主版本 |  |
| Firefox | 93 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 95

### Deno

- **支持版本**: 1.21

### Firefox

- **支持版本**: 93

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查reportError是否支持
function isreportErrorSupported() {
    return 'reportError' in window || typeof reportError !== 'undefined';
}

if (isreportErrorSupported()) {
    console.log('reportError 支持');
    // 使用reportError
} else {
    console.log('reportError 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// reportError polyfill
if (!window.reportError) {
    // 在这里添加polyfill实现
    console.log('加载reportError polyfill');
}
```

