# HTMLSlotElement.assign API 兼容性数据

## 基本信息

- **API名称**: `HTMLSlotElement.assign`
- **MDN文档**: [HTMLSlotElement.assign](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/assign)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/scripting.html#dom-slot-assign)
- **标签**: `web-features:slot-assign`

## 使用示例

### 基本用法

```javascript
// HTMLSlotElement.assign 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSlotElement.assign API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 92 | Before Chrome 95, the method accepted any `Node` instead of just `Element` and `Text`. |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 92 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 92
- **注意事项**:
  - Before Chrome 95, the method accepted any `Node` instead of just `Element` and `Text`.
- **支持版本**: 86
- **移除版本**: 92
- **部分实现**: 是
- **注意事项**:
  - Accepted `sequence<Node>` instead of `(Element or Text)...`.

### Firefox

- **支持版本**: 92

### Safari

- **支持版本**: 16.4

