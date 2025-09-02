# MimeType.suffixes API 兼容性数据

## 基本信息

- **API名称**: `MimeType.suffixes`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-mimetype-suffixes)

## 使用示例

### 基本用法

```javascript
// MimeType.suffixes 使用示例
// 请查阅MDN文档了解具体用法
console.log('MimeType.suffixes API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 1 |  |
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

- **支持版本**: 11

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

### Safari iOS

- **支持版本**: 1
- **移除版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查MimeType.suffixes是否支持
function isMimeTypeSuffixesSupported() {
    return 'suffixes' in mimetype && typeof mimetype.suffixes === 'function';
}

if (isMimeTypeSuffixesSupported()) {
    console.log('MimeType.suffixes 支持');
    // 使用MimeType.suffixes
} else {
    console.log('MimeType.suffixes 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MimeType.suffixes polyfill
if (!mimetype.suffixes) {
    // 在这里添加polyfill实现
    console.log('加载MimeType.suffixes polyfill');
}
```

