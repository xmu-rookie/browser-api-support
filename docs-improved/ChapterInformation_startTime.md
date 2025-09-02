# ChapterInformation.startTime API 兼容性数据

## 基本信息

- **API名称**: `ChapterInformation.startTime`
- **MDN文档**: [ChapterInformation.startTime](https://developer.mozilla.org/docs/Web/API/ChapterInformation/startTime)
- **规范文档**: [查看规范](https://w3c.github.io/mediasession/#dom-chapterinformation-starttime)
- **标签**: `web-features:media-session`

## 使用示例

### 基本用法

```javascript
// ChapterInformation.startTime 使用示例
// 请查阅MDN文档了解具体用法
console.log('ChapterInformation.startTime API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 127 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 127

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ChapterInformation.startTime是否支持
function isChapterInformationStartTimeSupported() {
    return 'startTime' in chapterinformation && typeof chapterinformation.startTime === 'function';
}

if (isChapterInformationStartTimeSupported()) {
    console.log('ChapterInformation.startTime 支持');
    // 使用ChapterInformation.startTime
} else {
    console.log('ChapterInformation.startTime 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ChapterInformation.startTime polyfill
if (!chapterinformation.startTime) {
    // 在这里添加polyfill实现
    console.log('加载ChapterInformation.startTime polyfill');
}
```

