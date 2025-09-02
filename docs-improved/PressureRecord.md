# PressureRecord API 兼容性数据

## 基本信息

- **API名称**: `PressureRecord`
- **MDN文档**: [PressureRecord](https://developer.mozilla.org/docs/Web/API/PressureRecord)
- **规范文档**: [查看规范](https://w3c.github.io/compute-pressure/#the-pressurerecord-interface)
- **标签**: `web-features:compute-pressure`

## 使用示例

### 基本用法

```javascript
// PressureRecord 使用示例
// 请查阅MDN文档了解具体用法
console.log('PressureRecord API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
| Chrome Android | 不支持 |  |
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

- **支持版本**: 125

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PressureRecord是否支持
function isPressureRecordSupported() {
    return 'PressureRecord' in window || typeof PressureRecord !== 'undefined';
}

if (isPressureRecordSupported()) {
    console.log('PressureRecord 支持');
    // 使用PressureRecord
} else {
    console.log('PressureRecord 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PressureRecord polyfill
if (!window.PressureRecord) {
    // 在这里添加polyfill实现
    console.log('加载PressureRecord polyfill');
}
```

