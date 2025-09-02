# CSSUnparsedValue.@@iterator API 兼容性数据

## 基本信息

- **API名称**: `CSSUnparsedValue.@@iterator`
- **标签**: `web-features:css-typed-om`
- **描述**: [Symbol.iterator]

## 使用示例

### 基本用法

```javascript
// CSSUnparsedValue.@@iterator 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSUnparsedValue.@@iterator API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSUnparsedValue.@@iterator是否支持
function isCSSUnparsedValue@@iteratorSupported() {
    return '@@iterator' in cssunparsedvalue && typeof cssunparsedvalue.@@iterator === 'function';
}

if (isCSSUnparsedValue@@iteratorSupported()) {
    console.log('CSSUnparsedValue.@@iterator 支持');
    // 使用CSSUnparsedValue.@@iterator
} else {
    console.log('CSSUnparsedValue.@@iterator 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSUnparsedValue.@@iterator polyfill
if (!cssunparsedvalue.@@iterator) {
    // 在这里添加polyfill实现
    console.log('加载CSSUnparsedValue.@@iterator polyfill');
}
```

