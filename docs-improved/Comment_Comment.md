# Comment.Comment API 兼容性数据

## 基本信息

- **API名称**: `Comment.Comment`
- **MDN文档**: [Comment.Comment](https://developer.mozilla.org/docs/Web/API/Comment/Comment)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-comment-comment①)
- **标签**: `web-features:dom`
- **描述**: `Comment()` constructor

## 使用示例

### 基本用法

```javascript
// Comment.Comment 使用示例
// 请查阅MDN文档了解具体用法
console.log('Comment.Comment API');
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
// 检查Comment.Comment是否支持
function isCommentCommentSupported() {
    return 'Comment' in comment && typeof comment.Comment === 'function';
}

if (isCommentCommentSupported()) {
    console.log('Comment.Comment 支持');
    // 使用Comment.Comment
} else {
    console.log('Comment.Comment 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Comment.Comment polyfill
if (!comment.Comment) {
    // 在这里添加polyfill实现
    console.log('加载Comment.Comment polyfill');
}
```

