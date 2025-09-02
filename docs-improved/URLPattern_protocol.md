# URLPattern.protocol API 兼容性数据

## 基本信息

- **API名称**: `URLPattern.protocol`
- **MDN文档**: [URLPattern.protocol](https://developer.mozilla.org/docs/Web/API/URLPattern/protocol)
- **规范文档**: [查看规范](https://urlpattern.spec.whatwg.org/#dom-urlpattern-protocol)
- **标签**: `web-features:urlpattern`

## 使用示例

### 基本用法

```javascript
// URLPattern.protocol 使用示例
// 请查阅MDN文档了解具体用法
console.log('URLPattern.protocol API');
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
// 检查URLPattern.protocol是否支持
function isURLPatternProtocolSupported() {
    return 'protocol' in urlpattern && typeof urlpattern.protocol === 'function';
}

if (isURLPatternProtocolSupported()) {
    console.log('URLPattern.protocol 支持');
    // 使用URLPattern.protocol
} else {
    console.log('URLPattern.protocol 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URLPattern.protocol polyfill
if (!urlpattern.protocol) {
    // 在这里添加polyfill实现
    console.log('加载URLPattern.protocol polyfill');
}
```

