# HTMLAnchorElement.hrefTranslate API 兼容性数据

## 基本信息

- **API名称**: `HTMLAnchorElement.hrefTranslate`

## 使用示例

### 基本用法

```javascript
// HTMLAnchorElement.hrefTranslate 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAnchorElement.hrefTranslate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 |  |
| Chrome Android | 同主版本 |  |
| Edge | 不支持 |  |
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

- **支持版本**: 81

### Edge

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAnchorElement.hrefTranslate是否支持
function isHTMLAnchorElementHrefTranslateSupported() {
    return 'hrefTranslate' in htmlanchorelement && typeof htmlanchorelement.hrefTranslate === 'function';
}

if (isHTMLAnchorElementHrefTranslateSupported()) {
    console.log('HTMLAnchorElement.hrefTranslate 支持');
    // 使用HTMLAnchorElement.hrefTranslate
} else {
    console.log('HTMLAnchorElement.hrefTranslate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAnchorElement.hrefTranslate polyfill
if (!htmlanchorelement.hrefTranslate) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAnchorElement.hrefTranslate polyfill');
}
```

