# FontData.postscriptName API 兼容性数据

## 基本信息

- **API名称**: `FontData.postscriptName`
- **MDN文档**: [FontData.postscriptName](https://developer.mozilla.org/docs/Web/API/FontData/postscriptName)
- **规范文档**: [查看规范](https://wicg.github.io/local-font-access/#dom-fontdata-postscriptname)
- **标签**: `web-features:local-fonts`

## 使用示例

### 基本用法

```javascript
// FontData.postscriptName 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontData.postscriptName API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 103 |  |
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

- **支持版本**: 103

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FontData.postscriptName是否支持
function isFontDataPostscriptNameSupported() {
    return 'postscriptName' in fontdata && typeof fontdata.postscriptName === 'function';
}

if (isFontDataPostscriptNameSupported()) {
    console.log('FontData.postscriptName 支持');
    // 使用FontData.postscriptName
} else {
    console.log('FontData.postscriptName 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontData.postscriptName polyfill
if (!fontdata.postscriptName) {
    // 在这里添加polyfill实现
    console.log('加载FontData.postscriptName polyfill');
}
```

