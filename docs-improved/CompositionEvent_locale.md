# CompositionEvent.locale API 兼容性数据

## 基本信息

- **API名称**: `CompositionEvent.locale`
- **MDN文档**: [CompositionEvent.locale](https://developer.mozilla.org/docs/Web/API/CompositionEvent/locale)

## 使用示例

### 基本用法

```javascript
// CompositionEvent.locale 使用示例
// 请查阅MDN文档了解具体用法
console.log('CompositionEvent.locale API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

- **支持版本**: 不支持

### Edge

- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 9
- **移除版本**: 143

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CompositionEvent.locale是否支持
function isCompositionEventLocaleSupported() {
    return 'locale' in compositionevent && typeof compositionevent.locale === 'function';
}

if (isCompositionEventLocaleSupported()) {
    console.log('CompositionEvent.locale 支持');
    // 使用CompositionEvent.locale
} else {
    console.log('CompositionEvent.locale 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CompositionEvent.locale polyfill
if (!compositionevent.locale) {
    // 在这里添加polyfill实现
    console.log('加载CompositionEvent.locale polyfill');
}
```

