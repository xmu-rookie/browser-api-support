# AbortSignal.any_static API 兼容性数据

## 基本信息

- **API名称**: `AbortSignal.any_static`
- **MDN文档**: [AbortSignal.any_static](https://developer.mozilla.org/docs/Web/API/AbortSignal/any_static)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-abortsignal-any)
- **标签**: `web-features:abortsignal-any`
- **描述**: `any()` static method

## 使用示例

### 基本用法

```javascript
// AbortSignal.any_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('AbortSignal.any_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.1.4 |  |
| Chrome | 116 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.39 |  |
| Edge | 同主版本 |  |
| Firefox | 124 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 20.3.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.1.4

### Chrome

- **支持版本**: 116

### Deno

- **支持版本**: 1.39

### Firefox

- **支持版本**: 124

### Node.js

- **支持版本**: 20.3.0
- **支持版本**: 18.17.0
- **移除版本**: 19.0.0

### Safari

- **支持版本**: 17.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查AbortSignal.any_static是否支持
function isAbortSignalAny_staticSupported() {
    return 'any_static' in abortsignal && typeof abortsignal.any_static === 'function';
}

if (isAbortSignalAny_staticSupported()) {
    console.log('AbortSignal.any_static 支持');
    // 使用AbortSignal.any_static
} else {
    console.log('AbortSignal.any_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AbortSignal.any_static polyfill
if (!abortsignal.any_static) {
    // 在这里添加polyfill实现
    console.log('加载AbortSignal.any_static polyfill');
}
```

