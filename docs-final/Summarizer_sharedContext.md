# Summarizer.sharedContext API 兼容性数据

## 基本信息

- **API名称**: `Summarizer.sharedContext`
- **MDN文档**: [Summarizer.sharedContext](https://developer.mozilla.org/docs/Web/API/Summarizer/sharedContext)
- **规范文档**: [查看规范](https://webmachinelearning.github.io/writing-assistance-apis/#dom-summarizer-sharedcontext)
- **标签**: `web-features:summarizer`
- **描述**: `sharedContext` property

## 使用示例

### 基本用法

```javascript
// 使用Web Share API
navigator.share({
    title: '分享标题',
    text: '分享内容',
    url: 'https://example.com'
}).then(() => {
    console.log('分享成功');
}).catch(err => {
    console.error('分享失败:', err);
});
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 | Availability may be subject to geographical restrictions. |
| Chrome Android | 不支持 |  |
| Deno | 不支持 |  |
| Edge | 138 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 138
- **注意事项**:
  - Availability may be subject to geographical restrictions.

### Chrome Android

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 138
- **需要标志**: 
  - #edge-llm-summarization-api-for-phi-mini: Enabled

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

