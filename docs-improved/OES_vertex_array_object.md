# OES_vertex_array_object API 兼容性数据

## 基本信息

- **API名称**: `OES_vertex_array_object`
- **MDN文档**: [OES_vertex_array_object](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/OES_vertex_array_object/)
- **标签**: `web-features:oes-vertex-array-object`

## 使用示例

### 基本用法

```javascript
// OES_vertex_array_object 使用示例
// 请查阅MDN文档了解具体用法
console.log('OES_vertex_array_object API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查OES_vertex_array_object是否支持
function isOES_vertex_array_objectSupported() {
    return 'OES_vertex_array_object' in window || typeof OES_vertex_array_object !== 'undefined';
}

if (isOES_vertex_array_objectSupported()) {
    console.log('OES_vertex_array_object 支持');
    // 使用OES_vertex_array_object
} else {
    console.log('OES_vertex_array_object 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OES_vertex_array_object polyfill
if (!window.OES_vertex_array_object) {
    // 在这里添加polyfill实现
    console.log('加载OES_vertex_array_object polyfill');
}
```

