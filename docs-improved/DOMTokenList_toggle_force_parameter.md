# DOMTokenList.toggle.force_parameter API 兼容性数据

## 基本信息

- **API名称**: `DOMTokenList.toggle.force_parameter`
- **标签**: `web-features:dom`
- **描述**: `force` parameter

## 使用示例

### 基本用法

```javascript
// DOMTokenList.toggle.force_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMTokenList.toggle.force_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 24 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 24

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMTokenList.toggle.force_parameter是否支持
function isDOMTokenListToggleSupported() {
    return 'toggle' in domtokenlist && typeof domtokenlist.toggle === 'function';
}

if (isDOMTokenListToggleSupported()) {
    console.log('DOMTokenList.toggle.force_parameter 支持');
    // 使用DOMTokenList.toggle.force_parameter
} else {
    console.log('DOMTokenList.toggle.force_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMTokenList.toggle.force_parameter polyfill
if (!domtokenlist.toggle) {
    // 在这里添加polyfill实现
    console.log('加载DOMTokenList.toggle.force_parameter polyfill');
}
```

