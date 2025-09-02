# GravitySensor API 兼容性数据

## 基本信息

- **API名称**: `GravitySensor`
- **MDN文档**: [GravitySensor](https://developer.mozilla.org/docs/Web/API/GravitySensor)
- **规范文档**: [查看规范](https://w3c.github.io/accelerometer/#gravitysensor-interface)
- **标签**: `web-features:accelerometer`

## 使用示例

### 基本用法

```javascript
// GravitySensor 使用示例
// 请查阅MDN文档了解具体用法
console.log('GravitySensor API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 91 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 91

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GravitySensor是否支持
function isGravitySensorSupported() {
    return 'GravitySensor' in window || typeof GravitySensor !== 'undefined';
}

if (isGravitySensorSupported()) {
    console.log('GravitySensor 支持');
    // 使用GravitySensor
} else {
    console.log('GravitySensor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GravitySensor polyfill
if (!window.GravitySensor) {
    // 在这里添加polyfill实现
    console.log('加载GravitySensor polyfill');
}
```

