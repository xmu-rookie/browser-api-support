# HTMLHRElement.color API 兼容性数据

## 基本信息

- **API名称**: `HTMLHRElement.color`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/obsolete.html#dom-hr-color)

## 使用示例

### 基本用法

```javascript
// HTMLHRElement.color 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLHRElement.color API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 6

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLHRElement.color是否支持
function isHTMLHRElementColorSupported() {
    return 'color' in htmlhrelement && typeof htmlhrelement.color === 'function';
}

if (isHTMLHRElementColorSupported()) {
    console.log('HTMLHRElement.color 支持');
    // 使用HTMLHRElement.color
} else {
    console.log('HTMLHRElement.color 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLHRElement.color polyfill
if (!htmlhrelement.color) {
    // 在这里添加polyfill实现
    console.log('加载HTMLHRElement.color polyfill');
}
```

