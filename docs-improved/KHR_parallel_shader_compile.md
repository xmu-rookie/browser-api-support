# KHR_parallel_shader_compile API 兼容性数据

## 基本信息

- **API名称**: `KHR_parallel_shader_compile`
- **MDN文档**: [KHR_parallel_shader_compile](https://developer.mozilla.org/docs/Web/API/KHR_parallel_shader_compile)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/)
- **标签**: `web-features:khr-parallel-shader-compile`

## 使用示例

### 基本用法

```javascript
// KHR_parallel_shader_compile 使用示例
// 请查阅MDN文档了解具体用法
console.log('KHR_parallel_shader_compile API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 76 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 76

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查KHR_parallel_shader_compile是否支持
function isKHR_parallel_shader_compileSupported() {
    return 'KHR_parallel_shader_compile' in window || typeof KHR_parallel_shader_compile !== 'undefined';
}

if (isKHR_parallel_shader_compileSupported()) {
    console.log('KHR_parallel_shader_compile 支持');
    // 使用KHR_parallel_shader_compile
} else {
    console.log('KHR_parallel_shader_compile 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KHR_parallel_shader_compile polyfill
if (!window.KHR_parallel_shader_compile) {
    // 在这里添加polyfill实现
    console.log('加载KHR_parallel_shader_compile polyfill');
}
```

