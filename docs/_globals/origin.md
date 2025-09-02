# origin API 兼容性数据

## 基本信息

- **API名称**: `origin`
- **MDN文档**: [origin](https://developer.mozilla.org/docs/Web/API/Window/origin)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#dom-origin-dev)

## 使用示例

### 基本用法

```javascript
// origin 使用示例
// 请查阅MDN文档了解具体用法
console.log('origin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| deno | ❌ 不支持 |  |
| Edge | 18 |  |
| Firefox | 54 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 59

### deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 54

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查origin是否支持
function isoriginSupported() {
    return 'origin' in window || typeof origin !== 'undefined';
}

if (isoriginSupported()) {
    console.log('origin 支持');
    // 使用origin
} else {
    console.log('origin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// origin polyfill
if (!window.origin) {
    // 在这里添加polyfill实现
    console.log('加载origin polyfill');
}
```

