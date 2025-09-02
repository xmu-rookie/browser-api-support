# DOMParser.parseFromString API 兼容性数据

## 基本信息

- **API名称**: `DOMParser.parseFromString`
- **MDN文档**: [DOMParser.parseFromString](https://developer.mozilla.org/docs/Web/API/DOMParser/parseFromString)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring-dev)
- **标签**: `web-features:domparser`

## 使用示例

### 基本用法

```javascript
// DOMParser.parseFromString 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMParser.parseFromString API');
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
| Opera | 8 |  |
| Opera Android | 10.1 |  |
| Safari | 1.3 |  |
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

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMParser.parseFromString是否支持
function isDOMParserParseFromStringSupported() {
    return 'parseFromString' in domparser && typeof domparser.parseFromString === 'function';
}

if (isDOMParserParseFromStringSupported()) {
    console.log('DOMParser.parseFromString 支持');
    // 使用DOMParser.parseFromString
} else {
    console.log('DOMParser.parseFromString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMParser.parseFromString polyfill
if (!domparser.parseFromString) {
    // 在这里添加polyfill实现
    console.log('加载DOMParser.parseFromString polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **enforces_trusted_types**: Requires `TrustedHTML` instance when trusted types are enforced
- **html**: HTML (`text/html`) support
- **svg**: SVG (`image/svg+xml`) support
- **xml**: XML (`application/xml`) support

