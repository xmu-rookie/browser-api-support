# Element.getElementsByTagName.all_elements_selector API 兼容性数据

## 基本信息

- **API名称**: `Element.getElementsByTagName.all_elements_selector`
- **标签**: `web-features:dom`
- **描述**: `getElementsByTagName("*")`

## 使用示例

### 基本用法

```javascript
// Element.getElementsByTagName.all_elements_selector 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.getElementsByTagName.all_elements_selector API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
| Oculus | 同主版本 |  |
| Opera | ≤15 |  |
| Opera Android | ≤14 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 6

### Opera

- **支持版本**: ≤15

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.getElementsByTagName.all_elements_selector是否支持
function isElementGetElementsByTagNameSupported() {
    return 'getElementsByTagName' in element && typeof element.getElementsByTagName === 'function';
}

if (isElementGetElementsByTagNameSupported()) {
    console.log('Element.getElementsByTagName.all_elements_selector 支持');
    // 使用Element.getElementsByTagName.all_elements_selector
} else {
    console.log('Element.getElementsByTagName.all_elements_selector 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.getElementsByTagName.all_elements_selector polyfill
if (!element.getElementsByTagName) {
    // 在这里添加polyfill实现
    console.log('加载Element.getElementsByTagName.all_elements_selector polyfill');
}
```

