# Text.Text API 兼容性数据

## 基本信息

- **API名称**: `Text.Text`
- **MDN文档**: [Text.Text](https://developer.mozilla.org/docs/Web/API/Text/Text)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-text-text①)
- **标签**: `web-features:dom`
- **描述**: `Text()` constructor

## 使用示例

### 基本用法

```javascript
// Text.Text 使用示例
// 请查阅MDN文档了解具体用法
console.log('Text.Text API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 29 |  |
| Chrome Android | 同主版本 |  |
| Edge | 16 |  |
| Firefox | 24 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 29

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 24

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查Text.Text是否支持
function isTextTextSupported() {
    return 'Text' in text && typeof text.Text === 'function';
}

if (isTextTextSupported()) {
    console.log('Text.Text 支持');
    // 使用Text.Text
} else {
    console.log('Text.Text 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Text.Text polyfill
if (!text.Text) {
    // 在这里添加polyfill实现
    console.log('加载Text.Text polyfill');
}
```

