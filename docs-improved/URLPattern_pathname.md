# URLPattern.pathname API 兼容性数据

## 基本信息

- **API名称**: `URLPattern.pathname`
- **MDN文档**: [URLPattern.pathname](https://developer.mozilla.org/docs/Web/API/URLPattern/pathname)
- **规范文档**: [查看规范](https://urlpattern.spec.whatwg.org/#dom-urlpattern-pathname)
- **标签**: `web-features:urlpattern`

## 使用示例

### 基本用法

```javascript
// URLPattern.pathname 使用示例
// 请查阅MDN文档了解具体用法
console.log('URLPattern.pathname API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 95 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.15 |  |
| Edge | 同主版本 |  |
| Firefox | 142 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 95

### Deno

- **支持版本**: 1.15

### Firefox

- **支持版本**: 142

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查URLPattern.pathname是否支持
function isURLPatternPathnameSupported() {
    return 'pathname' in urlpattern && typeof urlpattern.pathname === 'function';
}

if (isURLPatternPathnameSupported()) {
    console.log('URLPattern.pathname 支持');
    // 使用URLPattern.pathname
} else {
    console.log('URLPattern.pathname 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URLPattern.pathname polyfill
if (!urlpattern.pathname) {
    // 在这里添加polyfill实现
    console.log('加载URLPattern.pathname polyfill');
}
```

