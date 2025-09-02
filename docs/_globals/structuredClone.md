# structuredClone API 兼容性数据

## 基本信息

- **API名称**: `structuredClone`
- **MDN文档**: [structuredClone](https://developer.mozilla.org/docs/Web/API/Window/structuredClone)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone)
- **标签**: `web-features:structured-clone`

## 使用示例

### 基本用法

```javascript
// structuredClone 使用示例
// 请查阅MDN文档了解具体用法
console.log('structuredClone API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 98 |  |
| Chrome Android | 同主版本 |  |
| deno | 未知 |  |
| Edge | 同主版本 |  |
| Firefox | 94 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 17.0.0 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 98

### deno


### Firefox

- **支持版本**: 94

### Node.js

- **支持版本**: 17.0.0

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查structuredClone是否支持
function isstructuredCloneSupported() {
    return 'structuredClone' in window || typeof structuredClone !== 'undefined';
}

if (isstructuredCloneSupported()) {
    console.log('structuredClone 支持');
    // 使用structuredClone
} else {
    console.log('structuredClone 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// structuredClone polyfill
if (!window.structuredClone) {
    // 在这里添加polyfill实现
    console.log('加载structuredClone polyfill');
}
```

