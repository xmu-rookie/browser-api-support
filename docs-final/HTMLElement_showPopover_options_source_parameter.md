# HTMLElement.showPopover.options_source_parameter API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.showPopover.options_source_parameter`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-showpopoveroptions-source)
- **标签**: `web-features:popover`
- **描述**: `options.source` parameter

## 使用示例

### 基本用法

```javascript
// HTMLElement.showPopover.options_source_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.showPopover.options_source_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 133 | When using this option, the focus order doesn't change, so the popover does not become the next focu... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 141 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | preview | When using this option, the focus order doesn't change, so the popover does not become the next focu... |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 133
- **部分实现**: 是
- **注意事项**:
  - When using this option, the focus order doesn't change, so the popover does not become the next focus element. See [bug 383343310](https://crbug.com/383343310).

### Firefox

- **支持版本**: 141

### Safari

- **支持版本**: preview
- **部分实现**: 是
- **注意事项**:
  - When using this option, the focus order doesn't change, so the popover does not become the next focus element. See [bug 286575](https://webkit.org/b/286575).

## 相关子API

该API包含以下子功能：

- **implicit_anchor_reference**: Implicit anchor reference via `source`

