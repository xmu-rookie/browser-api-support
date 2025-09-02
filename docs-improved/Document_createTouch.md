# Document.createTouch API 兼容性数据

## 基本信息

- **API名称**: `Document.createTouch`
- **MDN文档**: [Document.createTouch](https://developer.mozilla.org/docs/Web/API/Document/createTouch)

## 使用示例

### 基本用法

```javascript
// Document.createTouch 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.createTouch API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 25 | Since Chrome 55, all parameters are optional. |
| Edge | 同主版本 |  |
| Firefox | 18 |  |
| Firefox Android | 6 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 14 | Since Opera Android 42, all parameters are optional. |
| Safari | 不支持 |  |
| Safari iOS | ≤3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Chrome Android

- **支持版本**: 25
- **移除版本**: 68
- **注意事项**:
  - Since Chrome 55, all parameters are optional.

### Firefox

- **支持版本**: 18
- **移除版本**: 67

### Firefox Android

- **支持版本**: 6

### Opera Android

- **支持版本**: 14
- **移除版本**: 48
- **注意事项**:
  - Since Opera Android 42, all parameters are optional.

### Safari

- **支持版本**: 不支持

### Safari iOS

- **支持版本**: ≤3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.createTouch是否支持
function isDocumentCreateTouchSupported() {
    return 'createTouch' in document && typeof document.createTouch === 'function';
}

if (isDocumentCreateTouchSupported()) {
    console.log('Document.createTouch 支持');
    // 使用Document.createTouch
} else {
    console.log('Document.createTouch 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.createTouch polyfill
if (!document.createTouch) {
    // 在这里添加polyfill实现
    console.log('加载Document.createTouch polyfill');
}
```

