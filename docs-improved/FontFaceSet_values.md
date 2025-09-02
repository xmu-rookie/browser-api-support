# FontFaceSet.values API 兼容性数据

## 基本信息

- **API名称**: `FontFaceSet.values`
- **MDN文档**: [FontFaceSet.values](https://developer.mozilla.org/docs/Web/API/FontFaceSet/values)
- **标签**: `web-features:font-loading`

## 使用示例

### 基本用法

```javascript
// FontFaceSet.values 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontFaceSet.values API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 48 |  |
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

- **支持版本**: 48

### Firefox

- **支持版本**: 41

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查FontFaceSet.values是否支持
function isFontFaceSetValuesSupported() {
    return 'values' in fontfaceset && typeof fontfaceset.values === 'function';
}

if (isFontFaceSetValuesSupported()) {
    console.log('FontFaceSet.values 支持');
    // 使用FontFaceSet.values
} else {
    console.log('FontFaceSet.values 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontFaceSet.values polyfill
if (!fontfaceset.values) {
    // 在这里添加polyfill实现
    console.log('加载FontFaceSet.values polyfill');
}
```

