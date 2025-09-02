# DOMParser.parseFromString.html API 兼容性数据

## 基本信息

- **API名称**: `DOMParser.parseFromString.html`
- **标签**: `web-features:domparser`
- **描述**: HTML (`text/html`) support

## 使用示例

### 基本用法

```javascript
// DOMParser.parseFromString.html 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMParser.parseFromString.html API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 12 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 17 |  |
| Opera Android | 同主版本 |  |
| Safari | 9.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 3.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 31

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 12

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 17

### Safari

- **支持版本**: 9.1

### Samsung Internet

- **支持版本**: 3.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMParser.parseFromString.html是否支持
function isDOMParserParseFromStringSupported() {
    return 'parseFromString' in domparser && typeof domparser.parseFromString === 'function';
}

if (isDOMParserParseFromStringSupported()) {
    console.log('DOMParser.parseFromString.html 支持');
    // 使用DOMParser.parseFromString.html
} else {
    console.log('DOMParser.parseFromString.html 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMParser.parseFromString.html polyfill
if (!domparser.parseFromString) {
    // 在这里添加polyfill实现
    console.log('加载DOMParser.parseFromString.html polyfill');
}
```

