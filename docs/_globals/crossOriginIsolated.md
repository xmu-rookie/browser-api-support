# crossOriginIsolated API 兼容性数据

## 基本信息

- **API名称**: `crossOriginIsolated`
- **MDN文档**: [crossOriginIsolated](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#dom-crossoriginisolated-dev)

## 使用示例

### 基本用法

```javascript
// crossOriginIsolated 使用示例
// 请查阅MDN文档了解具体用法
console.log('crossOriginIsolated API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 87 |  |
| Chrome Android | 同主版本 |  |
| deno | ❌ 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 72 |  |
| Firefox Android | 同主版本 |  |
| Node.js | ❌ 不支持 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 87

### deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 72

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 15.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查crossOriginIsolated是否支持
function iscrossOriginIsolatedSupported() {
    return 'crossOriginIsolated' in window || typeof crossOriginIsolated !== 'undefined';
}

if (iscrossOriginIsolatedSupported()) {
    console.log('crossOriginIsolated 支持');
    // 使用crossOriginIsolated
} else {
    console.log('crossOriginIsolated 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// crossOriginIsolated polyfill
if (!window.crossOriginIsolated) {
    // 在这里添加polyfill实现
    console.log('加载crossOriginIsolated polyfill');
}
```

