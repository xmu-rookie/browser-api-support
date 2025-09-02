# CSSScopeRule API 兼容性数据

## 基本信息

- **API名称**: `CSSScopeRule`
- **MDN文档**: [CSSScopeRule](https://developer.mozilla.org/docs/Web/API/CSSScopeRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-cascade-6/#cssscoperule)
- **标签**: `web-features:scope`

## 使用示例

### 基本用法

```javascript
// CSSScopeRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSScopeRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 118 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 128 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 118

### Firefox

- **支持版本**: 128
- **需要标志**: 
  - layout.css.at-scope.enabled: true

### Safari

- **支持版本**: 17.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSScopeRule是否支持
function isCSSScopeRuleSupported() {
    return 'CSSScopeRule' in window || typeof CSSScopeRule !== 'undefined';
}

if (isCSSScopeRuleSupported()) {
    console.log('CSSScopeRule 支持');
    // 使用CSSScopeRule
} else {
    console.log('CSSScopeRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSScopeRule polyfill
if (!window.CSSScopeRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSScopeRule polyfill');
}
```

