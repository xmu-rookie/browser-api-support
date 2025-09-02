# ANGLE_instanced_arrays.vertexAttribDivisorANGLE API 兼容性数据

## 基本信息

- **API名称**: `ANGLE_instanced_arrays.vertexAttribDivisorANGLE`
- **MDN文档**: [ANGLE_instanced_arrays.vertexAttribDivisorANGLE](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/ANGLE_instanced_arrays/)
- **标签**: `web-features:angle-instanced-arrays`

## 使用示例

### 基本用法

```javascript
// ANGLE_instanced_arrays.vertexAttribDivisorANGLE 使用示例
// 请查阅MDN文档了解具体用法
console.log('ANGLE_instanced_arrays.vertexAttribDivisorANGLE API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 30 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 47 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
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

- **支持版本**: 30

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 47

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查ANGLE_instanced_arrays.vertexAttribDivisorANGLE是否支持
function isANGLE_instanced_arraysVertexAttribDivisorANGLESupported() {
    return 'vertexAttribDivisorANGLE' in angle_instanced_arrays && typeof angle_instanced_arrays.vertexAttribDivisorANGLE === 'function';
}

if (isANGLE_instanced_arraysVertexAttribDivisorANGLESupported()) {
    console.log('ANGLE_instanced_arrays.vertexAttribDivisorANGLE 支持');
    // 使用ANGLE_instanced_arrays.vertexAttribDivisorANGLE
} else {
    console.log('ANGLE_instanced_arrays.vertexAttribDivisorANGLE 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ANGLE_instanced_arrays.vertexAttribDivisorANGLE polyfill
if (!angle_instanced_arrays.vertexAttribDivisorANGLE) {
    // 在这里添加polyfill实现
    console.log('加载ANGLE_instanced_arrays.vertexAttribDivisorANGLE polyfill');
}
```

