# RestrictionTarget.fromElement_static API 兼容性数据

## 基本信息

- **API名称**: `RestrictionTarget.fromElement_static`
- **MDN文档**: [RestrictionTarget.fromElement_static](https://developer.mozilla.org/docs/Web/API/RestrictionTarget/fromElement_static)
- **规范文档**: [查看规范](https://screen-share.github.io/element-capture/#dom-restrictiontarget-fromelement)
- **标签**: `web-features:element-capture`
- **描述**: `fromElement()` static method

## 使用示例

### 基本用法

```javascript
// RestrictionTarget.fromElement_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('RestrictionTarget.fromElement_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 132 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 132

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RestrictionTarget.fromElement_static是否支持
function isRestrictionTargetFromElement_staticSupported() {
    return 'fromElement_static' in restrictiontarget && typeof restrictiontarget.fromElement_static === 'function';
}

if (isRestrictionTargetFromElement_staticSupported()) {
    console.log('RestrictionTarget.fromElement_static 支持');
    // 使用RestrictionTarget.fromElement_static
} else {
    console.log('RestrictionTarget.fromElement_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RestrictionTarget.fromElement_static polyfill
if (!restrictiontarget.fromElement_static) {
    // 在这里添加polyfill实现
    console.log('加载RestrictionTarget.fromElement_static polyfill');
}
```

