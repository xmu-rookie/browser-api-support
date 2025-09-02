# WorkerNavigator.language API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.language`
- **MDN文档**: [WorkerNavigator.language](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/language)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-language-dev)
- **标签**: `web-features:language`

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.language 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.language API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 | Before Firefox 4, this property's value was also part of the user agent string, as reported by `navi... |
| Firefox Android | 4 |  |
| Internet Explorer | 11 | Closest available (non-standard) properties are `userLanguage` and `browserLanguage`. |
| Oculus | 同主版本 |  |
| Opera | 4 |  |
| Opera Android | 10.1 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5
- **注意事项**:
  - Before Firefox 4, this property's value was also part of the user agent string, as reported by `navigator.userAgent`. Starting in Firefox 5, this property's value is based on the value of the `Accept-Language` [HTTP header](https://developer.mozilla.org/docs/Web/HTTP/Headers).

### Firefox Android

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Closest available (non-standard) properties are `userLanguage` and `browserLanguage`.

### Opera

- **支持版本**: 4

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerNavigator.language是否支持
function isWorkerNavigatorLanguageSupported() {
    return 'language' in workernavigator && typeof workernavigator.language === 'function';
}

if (isWorkerNavigatorLanguageSupported()) {
    console.log('WorkerNavigator.language 支持');
    // 使用WorkerNavigator.language
} else {
    console.log('WorkerNavigator.language 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.language polyfill
if (!workernavigator.language) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.language polyfill');
}
```

