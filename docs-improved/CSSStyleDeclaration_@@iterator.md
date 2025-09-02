# CSSStyleDeclaration.@@iterator API 兼容性数据

## 基本信息

- **API名称**: `CSSStyleDeclaration.@@iterator`
- **标签**: `web-features:css-object-model`
- **描述**: [Symbol.iterator]

## 使用示例

### 基本用法

```javascript
// CSSStyleDeclaration.@@iterator 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSStyleDeclaration.@@iterator API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 36 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 51

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 36

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSStyleDeclaration.@@iterator是否支持
function isCSSStyleDeclaration@@iteratorSupported() {
    return '@@iterator' in cssstyledeclaration && typeof cssstyledeclaration.@@iterator === 'function';
}

if (isCSSStyleDeclaration@@iteratorSupported()) {
    console.log('CSSStyleDeclaration.@@iterator 支持');
    // 使用CSSStyleDeclaration.@@iterator
} else {
    console.log('CSSStyleDeclaration.@@iterator 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSStyleDeclaration.@@iterator polyfill
if (!cssstyledeclaration.@@iterator) {
    // 在这里添加polyfill实现
    console.log('加载CSSStyleDeclaration.@@iterator polyfill');
}
```

