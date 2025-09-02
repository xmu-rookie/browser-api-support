# SourceBuffer.removeAsync API 兼容性数据

## 基本信息

- **API名称**: `SourceBuffer.removeAsync`
- **MDN文档**: [SourceBuffer.removeAsync](https://developer.mozilla.org/docs/Web/API/SourceBuffer/removeAsync)

## 使用示例

### 基本用法

```javascript
// SourceBuffer.removeAsync 使用示例
// 请查阅MDN文档了解具体用法
console.log('SourceBuffer.removeAsync API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 62 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 62
- **需要标志**: 
  - media.mediasource.experimental.enabled: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SourceBuffer.removeAsync是否支持
function isSourceBufferRemoveAsyncSupported() {
    return 'removeAsync' in sourcebuffer && typeof sourcebuffer.removeAsync === 'function';
}

if (isSourceBufferRemoveAsyncSupported()) {
    console.log('SourceBuffer.removeAsync 支持');
    // 使用SourceBuffer.removeAsync
} else {
    console.log('SourceBuffer.removeAsync 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SourceBuffer.removeAsync polyfill
if (!sourcebuffer.removeAsync) {
    // 在这里添加polyfill实现
    console.log('加载SourceBuffer.removeAsync polyfill');
}
```

