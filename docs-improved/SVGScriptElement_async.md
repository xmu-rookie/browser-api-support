# SVGScriptElement.async API 兼容性数据

## 基本信息

- **API名称**: `SVGScriptElement.async`
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGScriptElement.async 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGScriptElement.async API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 117 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 117

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGScriptElement.async是否支持
function isSVGScriptElementAsyncSupported() {
    return 'async' in svgscriptelement && typeof svgscriptelement.async === 'function';
}

if (isSVGScriptElementAsyncSupported()) {
    console.log('SVGScriptElement.async 支持');
    // 使用SVGScriptElement.async
} else {
    console.log('SVGScriptElement.async 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGScriptElement.async polyfill
if (!svgscriptelement.async) {
    // 在这里添加polyfill实现
    console.log('加载SVGScriptElement.async polyfill');
}
```

