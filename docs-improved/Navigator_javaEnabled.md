# Navigator.javaEnabled API 兼容性数据

## 基本信息

- **API名称**: `Navigator.javaEnabled`
- **MDN文档**: [Navigator.javaEnabled](https://developer.mozilla.org/docs/Web/API/Navigator/javaEnabled)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-javaenabled)

## 使用示例

### 基本用法

```javascript
// Navigator.javaEnabled 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.javaEnabled API');
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
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
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

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.javaEnabled是否支持
function isNavigatorJavaEnabledSupported() {
    return 'javaEnabled' in navigator && typeof navigator.javaEnabled === 'function';
}

if (isNavigatorJavaEnabledSupported()) {
    console.log('Navigator.javaEnabled 支持');
    // 使用Navigator.javaEnabled
} else {
    console.log('Navigator.javaEnabled 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.javaEnabled polyfill
if (!navigator.javaEnabled) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.javaEnabled polyfill');
}
```

