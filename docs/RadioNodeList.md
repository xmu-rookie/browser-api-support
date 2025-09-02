# RadioNodeList API 兼容性数据

## 基本信息

- **API名称**: `RadioNodeList`
- **MDN文档**: [RadioNodeList](https://developer.mozilla.org/docs/Web/API/RadioNodeList)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist)

## 使用示例

### 基本用法

```javascript
// RadioNodeList 使用示例
// 请查阅MDN文档了解具体用法
console.log('RadioNodeList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 21 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 33 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 21

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 33

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查RadioNodeList是否支持
function isRadioNodeListSupported() {
    return 'RadioNodeList' in window || typeof RadioNodeList !== 'undefined';
}

if (isRadioNodeListSupported()) {
    console.log('RadioNodeList 支持');
    // 使用RadioNodeList
} else {
    console.log('RadioNodeList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RadioNodeList polyfill
if (!window.RadioNodeList) {
    // 在这里添加polyfill实现
    console.log('加载RadioNodeList polyfill');
}
```

