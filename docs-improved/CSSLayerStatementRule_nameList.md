# CSSLayerStatementRule.nameList API 兼容性数据

## 基本信息

- **API名称**: `CSSLayerStatementRule.nameList`
- **MDN文档**: [CSSLayerStatementRule.nameList](https://developer.mozilla.org/docs/Web/API/CSSLayerStatementRule/nameList)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-cascade-5/#dom-csslayerstatementrule-namelist)
- **标签**: `web-features:cascade-layers`

## 使用示例

### 基本用法

```javascript
// CSSLayerStatementRule.nameList 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSLayerStatementRule.nameList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 99 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 97 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 99

### Firefox

- **支持版本**: 97

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSLayerStatementRule.nameList是否支持
function isCSSLayerStatementRuleNameListSupported() {
    return 'nameList' in csslayerstatementrule && typeof csslayerstatementrule.nameList === 'function';
}

if (isCSSLayerStatementRuleNameListSupported()) {
    console.log('CSSLayerStatementRule.nameList 支持');
    // 使用CSSLayerStatementRule.nameList
} else {
    console.log('CSSLayerStatementRule.nameList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSLayerStatementRule.nameList polyfill
if (!csslayerstatementrule.nameList) {
    // 在这里添加polyfill实现
    console.log('加载CSSLayerStatementRule.nameList polyfill');
}
```

