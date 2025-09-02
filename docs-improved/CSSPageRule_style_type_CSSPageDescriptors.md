# CSSPageRule.style.type_CSSPageDescriptors API 兼容性数据

## 基本信息

- **API名称**: `CSSPageRule.style.type_CSSPageDescriptors`
- **标签**: `web-features:css-object-model`
- **描述**: Type changed to [`CSSPageDescriptors`](https://developer.mozilla.org/docs/Web/API/CSSPageDescriptors)

## 使用示例

### 基本用法

```javascript
// CSSPageRule.style.type_CSSPageDescriptors 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPageRule.style.type_CSSPageDescriptors API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 129 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 129

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSPageRule.style.type_CSSPageDescriptors是否支持
function isCSSPageRuleStyleSupported() {
    return 'style' in csspagerule && typeof csspagerule.style === 'function';
}

if (isCSSPageRuleStyleSupported()) {
    console.log('CSSPageRule.style.type_CSSPageDescriptors 支持');
    // 使用CSSPageRule.style.type_CSSPageDescriptors
} else {
    console.log('CSSPageRule.style.type_CSSPageDescriptors 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPageRule.style.type_CSSPageDescriptors polyfill
if (!csspagerule.style) {
    // 在这里添加polyfill实现
    console.log('加载CSSPageRule.style.type_CSSPageDescriptors polyfill');
}
```

