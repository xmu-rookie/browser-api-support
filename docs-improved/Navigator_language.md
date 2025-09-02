# Navigator.language API 兼容性数据

## 基本信息

- **API名称**: `Navigator.language`
- **MDN文档**: [Navigator.language](https://developer.mozilla.org/docs/Web/API/Navigator/language)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-language-dev)
- **标签**: `web-features:language`

## 使用示例

### 基本用法

```javascript
// Navigator.language 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.language API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.27 |  |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 4, this property's value was also part of the user agent string, as reported by `navi... |
| Firefox Android | 4 |  |
| Internet Explorer | 11 | Closest available (non-standard) properties are `userLanguage` and `browserLanguage`. |
| Node.js | 21.2.0 |  |
| Oculus | 同主版本 |  |
| Opera | 4 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.27

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Before Firefox 4, this property's value was also part of the user agent string, as reported by `navigator.userAgent`. Starting in Firefox 5, this property's value is based on the value of the `Accept-Language` [HTTP header](https://developer.mozilla.org/docs/Web/HTTP/Headers).

### Firefox Android

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Closest available (non-standard) properties are `userLanguage` and `browserLanguage`.

### Node.js

- **支持版本**: 21.2.0

### Opera

- **支持版本**: 4

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.language是否支持
function isNavigatorLanguageSupported() {
    return 'language' in navigator && typeof navigator.language === 'function';
}

if (isNavigatorLanguageSupported()) {
    console.log('Navigator.language 支持');
    // 使用Navigator.language
} else {
    console.log('Navigator.language 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.language polyfill
if (!navigator.language) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.language polyfill');
}
```

