# DOMTokenList.replace.boolean_value API 兼容性数据

## 基本信息

- **API名称**: `DOMTokenList.replace.boolean_value`
- **标签**: `web-features:dom`
- **描述**: `return()`'s value is a boolean, not void as it used to be.

## 使用示例

### 基本用法

```javascript
// DOMTokenList.replace.boolean_value 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMTokenList.replace.boolean_value API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 67 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 67

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 61

### Safari

- **支持版本**: 12

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMTokenList.replace.boolean_value是否支持
function isDOMTokenListReplaceSupported() {
    return 'replace' in domtokenlist && typeof domtokenlist.replace === 'function';
}

if (isDOMTokenListReplaceSupported()) {
    console.log('DOMTokenList.replace.boolean_value 支持');
    // 使用DOMTokenList.replace.boolean_value
} else {
    console.log('DOMTokenList.replace.boolean_value 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMTokenList.replace.boolean_value polyfill
if (!domtokenlist.replace) {
    // 在这里添加polyfill实现
    console.log('加载DOMTokenList.replace.boolean_value polyfill');
}
```

