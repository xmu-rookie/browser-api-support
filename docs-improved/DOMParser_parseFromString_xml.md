# DOMParser.parseFromString.xml API 兼容性数据

## 基本信息

- **API名称**: `DOMParser.parseFromString.xml`
- **标签**: `web-features:domparser`
- **描述**: XML (`application/xml`) support

## 使用示例

### 基本用法

```javascript
// DOMParser.parseFromString.xml 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMParser.parseFromString.xml API');
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
// 检查DOMParser.parseFromString.xml是否支持
function isDOMParserParseFromStringSupported() {
    return 'parseFromString' in domparser && typeof domparser.parseFromString === 'function';
}

if (isDOMParserParseFromStringSupported()) {
    console.log('DOMParser.parseFromString.xml 支持');
    // 使用DOMParser.parseFromString.xml
} else {
    console.log('DOMParser.parseFromString.xml 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMParser.parseFromString.xml polyfill
if (!domparser.parseFromString) {
    // 在这里添加polyfill实现
    console.log('加载DOMParser.parseFromString.xml polyfill');
}
```

