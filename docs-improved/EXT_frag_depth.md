# EXT_frag_depth API 兼容性数据

## 基本信息

- **API名称**: `EXT_frag_depth`
- **MDN文档**: [EXT_frag_depth](https://developer.mozilla.org/docs/Web/API/EXT_frag_depth)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/EXT_frag_depth/)
- **标签**: `web-features:ext-frag-depth`

## 使用示例

### 基本用法

```javascript
// EXT_frag_depth 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_frag_depth API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Edge | 93 |  |
| Firefox | 47 |  |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 15 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Edge

- **支持版本**: 93
- **支持版本**: 17
- **移除版本**: 79

### Firefox

- **支持版本**: 47

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 9

### Safari iOS

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查EXT_frag_depth是否支持
function isEXT_frag_depthSupported() {
    return 'EXT_frag_depth' in window || typeof EXT_frag_depth !== 'undefined';
}

if (isEXT_frag_depthSupported()) {
    console.log('EXT_frag_depth 支持');
    // 使用EXT_frag_depth
} else {
    console.log('EXT_frag_depth 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_frag_depth polyfill
if (!window.EXT_frag_depth) {
    // 在这里添加polyfill实现
    console.log('加载EXT_frag_depth polyfill');
}
```

