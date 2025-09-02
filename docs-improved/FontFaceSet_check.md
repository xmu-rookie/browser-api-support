# FontFaceSet.check API 兼容性数据

## 基本信息

- **API名称**: `FontFaceSet.check`
- **MDN文档**: [FontFaceSet.check](https://developer.mozilla.org/docs/Web/API/FontFaceSet/check)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-font-loading/#dom-fontfaceset-check)
- **标签**: `web-features:font-loading`

## 使用示例

### 基本用法

```javascript
// FontFaceSet.check 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontFaceSet.check API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 120 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 41 |  |
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

- **支持版本**: 120
- **支持版本**: 35
- **移除版本**: 120
- **部分实现**: 是
- **注意事项**:
  - Prior to version 120, this method returned `false` instead of `true` for nonexistent or locally installed fonts. See [bug 40893726](https://crbug.com/40893726).

### Firefox

- **支持版本**: 41

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查FontFaceSet.check是否支持
function isFontFaceSetCheckSupported() {
    return 'check' in fontfaceset && typeof fontfaceset.check === 'function';
}

if (isFontFaceSetCheckSupported()) {
    console.log('FontFaceSet.check 支持');
    // 使用FontFaceSet.check
} else {
    console.log('FontFaceSet.check 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontFaceSet.check polyfill
if (!fontfaceset.check) {
    // 在这里添加polyfill实现
    console.log('加载FontFaceSet.check polyfill');
}
```

