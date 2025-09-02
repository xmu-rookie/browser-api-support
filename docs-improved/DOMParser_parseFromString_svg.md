# DOMParser.parseFromString.svg API 兼容性数据

## 基本信息

- **API名称**: `DOMParser.parseFromString.svg`
- **标签**: `web-features:svg`
- **描述**: SVG (`image/svg+xml`) support

## 使用示例

### 基本用法

```javascript
// DOMParser.parseFromString.svg 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMParser.parseFromString.svg API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 10 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 10

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMParser.parseFromString.svg是否支持
function isDOMParserParseFromStringSupported() {
    return 'parseFromString' in domparser && typeof domparser.parseFromString === 'function';
}

if (isDOMParserParseFromStringSupported()) {
    console.log('DOMParser.parseFromString.svg 支持');
    // 使用DOMParser.parseFromString.svg
} else {
    console.log('DOMParser.parseFromString.svg 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMParser.parseFromString.svg polyfill
if (!domparser.parseFromString) {
    // 在这里添加polyfill实现
    console.log('加载DOMParser.parseFromString.svg polyfill');
}
```

