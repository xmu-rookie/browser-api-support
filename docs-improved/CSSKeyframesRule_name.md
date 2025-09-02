# CSSKeyframesRule.name API 兼容性数据

## 基本信息

- **API名称**: `CSSKeyframesRule.name`
- **MDN文档**: [CSSKeyframesRule.name](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule/name)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations/#dom-csskeyframesrule-name)
- **标签**: `web-features:animations-css`

## 使用示例

### 基本用法

```javascript
// CSSKeyframesRule.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSKeyframesRule.name API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSKeyframesRule.name是否支持
function isCSSKeyframesRuleNameSupported() {
    return 'name' in csskeyframesrule && typeof csskeyframesrule.name === 'function';
}

if (isCSSKeyframesRuleNameSupported()) {
    console.log('CSSKeyframesRule.name 支持');
    // 使用CSSKeyframesRule.name
} else {
    console.log('CSSKeyframesRule.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSKeyframesRule.name polyfill
if (!csskeyframesrule.name) {
    // 在这里添加polyfill实现
    console.log('加载CSSKeyframesRule.name polyfill');
}
```

