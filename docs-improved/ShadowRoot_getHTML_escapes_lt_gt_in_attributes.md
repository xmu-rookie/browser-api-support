# ShadowRoot.getHTML.escapes_lt_gt_in_attributes API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.getHTML.escapes_lt_gt_in_attributes`
- **描述**: Serializes `<` and `>` in attributes as `&amp;lt;` and `&amp;gt;` (see [this spec issue](https://github.com/whatwg/html/issues/6235))

## 使用示例

### 基本用法

```javascript
// ShadowRoot.getHTML.escapes_lt_gt_in_attributes 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.getHTML.escapes_lt_gt_in_attributes API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 140 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | preview |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 140

### Safari

- **支持版本**: preview

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.getHTML.escapes_lt_gt_in_attributes是否支持
function isShadowRootGetHTMLSupported() {
    return 'getHTML' in shadowroot && typeof shadowroot.getHTML === 'function';
}

if (isShadowRootGetHTMLSupported()) {
    console.log('ShadowRoot.getHTML.escapes_lt_gt_in_attributes 支持');
    // 使用ShadowRoot.getHTML.escapes_lt_gt_in_attributes
} else {
    console.log('ShadowRoot.getHTML.escapes_lt_gt_in_attributes 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.getHTML.escapes_lt_gt_in_attributes polyfill
if (!shadowroot.getHTML) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.getHTML.escapes_lt_gt_in_attributes polyfill');
}
```

