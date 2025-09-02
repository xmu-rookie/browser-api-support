# WebGL2RenderingContext.getQueryParameter API 兼容性数据

## 基本信息

- **API名称**: `WebGL2RenderingContext.getQueryParameter`
- **MDN文档**: [WebGL2RenderingContext.getQueryParameter](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getQueryParameter)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/specs/latest/2.0/#3.7.12)
- **标签**: `web-features:webgl2`

## 使用示例

### 基本用法

```javascript
// WebGL2RenderingContext.getQueryParameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebGL2RenderingContext.getQueryParameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 |  |
| Chrome Android | 58 |  |
| Edge | 同主版本 |  |
| Firefox | 51 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 56

### Chrome Android

- **支持版本**: 58

### Firefox

- **支持版本**: 51

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebGL2RenderingContext.getQueryParameter是否支持
function isWebGL2RenderingContextGetQueryParameterSupported() {
    return 'getQueryParameter' in webgl2renderingcontext && typeof webgl2renderingcontext.getQueryParameter === 'function';
}

if (isWebGL2RenderingContextGetQueryParameterSupported()) {
    console.log('WebGL2RenderingContext.getQueryParameter 支持');
    // 使用WebGL2RenderingContext.getQueryParameter
} else {
    console.log('WebGL2RenderingContext.getQueryParameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebGL2RenderingContext.getQueryParameter polyfill
if (!webgl2renderingcontext.getQueryParameter) {
    // 在这里添加polyfill实现
    console.log('加载WebGL2RenderingContext.getQueryParameter polyfill');
}
```

