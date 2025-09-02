# CustomStateSet API 兼容性数据

## 基本信息

- **API名称**: `CustomStateSet`
- **MDN文档**: [CustomStateSet](https://developer.mozilla.org/docs/Web/API/CustomStateSet)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/custom-elements.html#customstateset)
- **标签**: `web-features:state`

## 使用示例

### 基本用法

```javascript
// CustomStateSet 使用示例
// 请查阅MDN文档了解具体用法
console.log('CustomStateSet API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 90 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 126 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 90

### Firefox

- **支持版本**: 126

### Safari

- **支持版本**: 17.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CustomStateSet是否支持
function isCustomStateSetSupported() {
    return 'CustomStateSet' in window || typeof CustomStateSet !== 'undefined';
}

if (isCustomStateSetSupported()) {
    console.log('CustomStateSet 支持');
    // 使用CustomStateSet
} else {
    console.log('CustomStateSet 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CustomStateSet polyfill
if (!window.CustomStateSet) {
    // 在这里添加polyfill实现
    console.log('加载CustomStateSet polyfill');
}
```

