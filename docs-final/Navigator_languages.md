# Navigator.languages API 兼容性数据

## 基本信息

- **API名称**: `Navigator.languages`
- **MDN文档**: [Navigator.languages](https://developer.mozilla.org/docs/Web/API/Navigator/languages)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-languages-dev)
- **标签**: `web-features:language`

## 使用示例

### 基本用法

```javascript
// Navigator.languages 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.languages API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 | Before Chrome 65, `navigator.languages[0]` is not guaranteed to equal `navigator.language`. |
| Chrome Android | 同主版本 |  |
| Deno | 1.27 |  |
| Edge | 16 |  |
| Firefox | 32 | In Firefox, the `navigator.languages` property's value is taken from the `intl.accept_languages` pre... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 不支持 | Closest available (non-standard) properties are `userLanguage` and `browserLanguage`. |
| Node.js | 21.2.0 |  |
| Oculus | 同主版本 |  |
| Opera | 24 |  |
| Opera Android | 24 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 3.0 |  |
| WebView Android | 37 | Before version 65, `navigator.languages[0]` is not guaranteed to equal `navigator.language`. |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37
- **注意事项**:
  - Before Chrome 65, `navigator.languages[0]` is not guaranteed to equal `navigator.language`.

### Deno

- **支持版本**: 1.27

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 32
- **注意事项**:
  - In Firefox, the `navigator.languages` property's value is taken from the `intl.accept_languages` preference.

### Internet Explorer

- **支持版本**: 不支持
- **注意事项**:
  - Closest available (non-standard) properties are `userLanguage` and `browserLanguage`.

### Node.js

- **支持版本**: 21.2.0

### Opera

- **支持版本**: 24

### Opera Android

- **支持版本**: 24

### Safari

- **支持版本**: 10.1

### Samsung Internet

- **支持版本**: 3.0

### WebView Android

- **支持版本**: 37
- **注意事项**:
  - Before version 65, `navigator.languages[0]` is not guaranteed to equal `navigator.language`.

