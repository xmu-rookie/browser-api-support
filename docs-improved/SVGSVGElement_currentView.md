# SVGSVGElement.currentView API 兼容性数据

## 基本信息

- **API名称**: `SVGSVGElement.currentView`
- **标签**: `web-features:svg-discouraged`

## 使用示例

### 基本用法

```javascript
// SVGSVGElement.currentView 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGSVGElement.currentView API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 21 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
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
- **移除版本**: 56

### Firefox

- **支持版本**: 1.5
- **移除版本**: 21

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGSVGElement.currentView是否支持
function isSVGSVGElementCurrentViewSupported() {
    return 'currentView' in svgsvgelement && typeof svgsvgelement.currentView === 'function';
}

if (isSVGSVGElementCurrentViewSupported()) {
    console.log('SVGSVGElement.currentView 支持');
    // 使用SVGSVGElement.currentView
} else {
    console.log('SVGSVGElement.currentView 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGSVGElement.currentView polyfill
if (!svgsvgelement.currentView) {
    // 在这里添加polyfill实现
    console.log('加载SVGSVGElement.currentView polyfill');
}
```

