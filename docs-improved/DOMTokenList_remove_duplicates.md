# DOMTokenList.remove_duplicates API 兼容性数据

## 基本信息

- **API名称**: `DOMTokenList.remove_duplicates`
- **MDN文档**: [DOMTokenList.remove_duplicates](https://developer.mozilla.org/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)
- **标签**: `web-features:dom`
- **描述**: Removes duplicates

## 使用示例

### 基本用法

```javascript
// DOMTokenList.remove_duplicates 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMTokenList.remove_duplicates API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMTokenList.remove_duplicates是否支持
function isDOMTokenListRemove_duplicatesSupported() {
    return 'remove_duplicates' in domtokenlist && typeof domtokenlist.remove_duplicates === 'function';
}

if (isDOMTokenListRemove_duplicatesSupported()) {
    console.log('DOMTokenList.remove_duplicates 支持');
    // 使用DOMTokenList.remove_duplicates
} else {
    console.log('DOMTokenList.remove_duplicates 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMTokenList.remove_duplicates polyfill
if (!domtokenlist.remove_duplicates) {
    // 在这里添加polyfill实现
    console.log('加载DOMTokenList.remove_duplicates polyfill');
}
```

