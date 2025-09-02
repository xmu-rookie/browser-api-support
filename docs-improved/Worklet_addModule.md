# Worklet.addModule API 兼容性数据

## 基本信息

- **API名称**: `Worklet.addModule`
- **MDN文档**: [Worklet.addModule](https://developer.mozilla.org/docs/Web/API/Worklet/addModule)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/worklets.html#dom-worklet-addmodule-dev)
- **标签**: `web-features:audio-worklet`

## 使用示例

### 基本用法

```javascript
// Worklet.addModule 使用示例
// 请查阅MDN文档了解具体用法
console.log('Worklet.addModule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 76 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 65

### Firefox

- **支持版本**: 76

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Worklet.addModule是否支持
function isWorkletAddModuleSupported() {
    return 'addModule' in worklet && typeof worklet.addModule === 'function';
}

if (isWorkletAddModuleSupported()) {
    console.log('Worklet.addModule 支持');
    // 使用Worklet.addModule
} else {
    console.log('Worklet.addModule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Worklet.addModule polyfill
if (!worklet.addModule) {
    // 在这里添加polyfill实现
    console.log('加载Worklet.addModule polyfill');
}
```

