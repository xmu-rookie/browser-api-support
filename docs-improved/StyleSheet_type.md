# StyleSheet.type API 兼容性数据

## 基本信息

- **API名称**: `StyleSheet.type`
- **MDN文档**: [StyleSheet.type](https://developer.mozilla.org/docs/Web/API/StyleSheet/type)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-stylesheet-type)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// StyleSheet.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('StyleSheet.type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查StyleSheet.type是否支持
function isStyleSheetTypeSupported() {
    return 'type' in stylesheet && typeof stylesheet.type === 'function';
}

if (isStyleSheetTypeSupported()) {
    console.log('StyleSheet.type 支持');
    // 使用StyleSheet.type
} else {
    console.log('StyleSheet.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StyleSheet.type polyfill
if (!stylesheet.type) {
    // 在这里添加polyfill实现
    console.log('加载StyleSheet.type polyfill');
}
```

