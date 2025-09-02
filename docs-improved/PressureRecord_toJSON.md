# PressureRecord.toJSON API 兼容性数据

## 基本信息

- **API名称**: `PressureRecord.toJSON`
- **MDN文档**: [PressureRecord.toJSON](https://developer.mozilla.org/docs/Web/API/PressureRecord/toJSON)
- **规范文档**: [查看规范](https://w3c.github.io/compute-pressure/#the-tojson-member)
- **标签**: `web-features:compute-pressure`

## 使用示例

### 基本用法

```javascript
// PressureRecord.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('PressureRecord.toJSON API');
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
// 检查PressureRecord.toJSON是否支持
function isPressureRecordToJSONSupported() {
    return 'toJSON' in pressurerecord && typeof pressurerecord.toJSON === 'function';
}

if (isPressureRecordToJSONSupported()) {
    console.log('PressureRecord.toJSON 支持');
    // 使用PressureRecord.toJSON
} else {
    console.log('PressureRecord.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PressureRecord.toJSON polyfill
if (!pressurerecord.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载PressureRecord.toJSON polyfill');
}
```

