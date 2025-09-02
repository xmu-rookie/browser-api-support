# CropTarget.fromElement_static API 兼容性数据

## 基本信息

- **API名称**: `CropTarget.fromElement_static`
- **MDN文档**: [CropTarget.fromElement_static](https://developer.mozilla.org/docs/Web/API/CropTarget/fromElement_static)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-region/#dom-croptarget-fromelement)
- **标签**: `web-features:region-capture`
- **描述**: `fromElement()` static method

## 使用示例

### 基本用法

```javascript
// CropTarget.fromElement_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('CropTarget.fromElement_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 104 |  |
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

- **支持版本**: 104

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CropTarget.fromElement_static是否支持
function isCropTargetFromElement_staticSupported() {
    return 'fromElement_static' in croptarget && typeof croptarget.fromElement_static === 'function';
}

if (isCropTargetFromElement_staticSupported()) {
    console.log('CropTarget.fromElement_static 支持');
    // 使用CropTarget.fromElement_static
} else {
    console.log('CropTarget.fromElement_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CropTarget.fromElement_static polyfill
if (!croptarget.fromElement_static) {
    // 在这里添加polyfill实现
    console.log('加载CropTarget.fromElement_static polyfill');
}
```

