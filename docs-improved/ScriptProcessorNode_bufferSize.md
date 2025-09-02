# ScriptProcessorNode.bufferSize API 兼容性数据

## 基本信息

- **API名称**: `ScriptProcessorNode.bufferSize`
- **MDN文档**: [ScriptProcessorNode.bufferSize](https://developer.mozilla.org/docs/Web/API/ScriptProcessorNode/bufferSize)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-scriptprocessornode-buffersize)

## 使用示例

### 基本用法

```javascript
// ScriptProcessorNode.bufferSize 使用示例
// 请查阅MDN文档了解具体用法
console.log('ScriptProcessorNode.bufferSize API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
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

- **支持版本**: 24

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查ScriptProcessorNode.bufferSize是否支持
function isScriptProcessorNodeBufferSizeSupported() {
    return 'bufferSize' in scriptprocessornode && typeof scriptprocessornode.bufferSize === 'function';
}

if (isScriptProcessorNodeBufferSizeSupported()) {
    console.log('ScriptProcessorNode.bufferSize 支持');
    // 使用ScriptProcessorNode.bufferSize
} else {
    console.log('ScriptProcessorNode.bufferSize 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ScriptProcessorNode.bufferSize polyfill
if (!scriptprocessornode.bufferSize) {
    // 在这里添加polyfill实现
    console.log('加载ScriptProcessorNode.bufferSize polyfill');
}
```

