# DOMTokenList.@@iterator API 兼容性数据

## 基本信息

- **API名称**: `DOMTokenList.@@iterator`
- **标签**: `web-features:dom`
- **描述**: [Symbol.iterator]

## 使用示例

### 基本用法

```javascript
// DOMTokenList.@@iterator 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMTokenList.@@iterator API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 16 |  |
| Firefox | 36 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 42

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 36

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMTokenList.@@iterator是否支持
function isDOMTokenList@@iteratorSupported() {
    return '@@iterator' in domtokenlist && typeof domtokenlist.@@iterator === 'function';
}

if (isDOMTokenList@@iteratorSupported()) {
    console.log('DOMTokenList.@@iterator 支持');
    // 使用DOMTokenList.@@iterator
} else {
    console.log('DOMTokenList.@@iterator 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMTokenList.@@iterator polyfill
if (!domtokenlist.@@iterator) {
    // 在这里添加polyfill实现
    console.log('加载DOMTokenList.@@iterator polyfill');
}
```

