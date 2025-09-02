# OrientationSensor.populateMatrix API 兼容性数据

## 基本信息

- **API名称**: `OrientationSensor.populateMatrix`
- **MDN文档**: [OrientationSensor.populateMatrix](https://developer.mozilla.org/docs/Web/API/OrientationSensor/populateMatrix)
- **规范文档**: [查看规范](https://w3c.github.io/orientation-sensor/#orientationsensor-populatematrix)
- **标签**: `web-features:orientation-sensor`

## 使用示例

### 基本用法

```javascript
// OrientationSensor.populateMatrix 使用示例
// 请查阅MDN文档了解具体用法
console.log('OrientationSensor.populateMatrix API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 67 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 67

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查OrientationSensor.populateMatrix是否支持
function isOrientationSensorPopulateMatrixSupported() {
    return 'populateMatrix' in orientationsensor && typeof orientationsensor.populateMatrix === 'function';
}

if (isOrientationSensorPopulateMatrixSupported()) {
    console.log('OrientationSensor.populateMatrix 支持');
    // 使用OrientationSensor.populateMatrix
} else {
    console.log('OrientationSensor.populateMatrix 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OrientationSensor.populateMatrix polyfill
if (!orientationsensor.populateMatrix) {
    // 在这里添加polyfill实现
    console.log('加载OrientationSensor.populateMatrix polyfill');
}
```

