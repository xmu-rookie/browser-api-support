# HTMLSelectElement.add.index_before_parameter API 兼容性数据

## 基本信息

- **API名称**: `HTMLSelectElement.add.index_before_parameter`
- **标签**: `web-features:select`
- **描述**: Index as `before` parameter

## 使用示例

### 基本用法

```javascript
// HTMLSelectElement.add.index_before_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSelectElement.add.index_before_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 35 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 8 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 35

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 8

### Internet Explorer

- **支持版本**: 5.5

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLSelectElement.add.index_before_parameter是否支持
function isHTMLSelectElementAddSupported() {
    return 'add' in htmlselectelement && typeof htmlselectelement.add === 'function';
}

if (isHTMLSelectElementAddSupported()) {
    console.log('HTMLSelectElement.add.index_before_parameter 支持');
    // 使用HTMLSelectElement.add.index_before_parameter
} else {
    console.log('HTMLSelectElement.add.index_before_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSelectElement.add.index_before_parameter polyfill
if (!htmlselectelement.add) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSelectElement.add.index_before_parameter polyfill');
}
```

