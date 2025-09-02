# FontFaceSet.entries API 兼容性数据

## 基本信息

- **API名称**: `FontFaceSet.entries`
- **MDN文档**: [FontFaceSet.entries](https://developer.mozilla.org/docs/Web/API/FontFaceSet/entries)
- **标签**: `web-features:font-loading`

## 使用示例

### 基本用法

```javascript
// FontFaceSet.entries 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontFaceSet.entries API');
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
// 检查FontFaceSet.entries是否支持
function isFontFaceSetEntriesSupported() {
    return 'entries' in fontfaceset && typeof fontfaceset.entries === 'function';
}

if (isFontFaceSetEntriesSupported()) {
    console.log('FontFaceSet.entries 支持');
    // 使用FontFaceSet.entries
} else {
    console.log('FontFaceSet.entries 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontFaceSet.entries polyfill
if (!fontfaceset.entries) {
    // 在这里添加polyfill实现
    console.log('加载FontFaceSet.entries polyfill');
}
```

