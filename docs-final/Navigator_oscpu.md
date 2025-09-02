# Navigator.oscpu API 兼容性数据

## 基本信息

- **API名称**: `Navigator.oscpu`
- **MDN文档**: [Navigator.oscpu](https://developer.mozilla.org/docs/Web/API/Navigator/oscpu)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-oscpu)

## 使用示例

### 基本用法

```javascript
// Navigator.oscpu 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.oscpu API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1 | The preference `"general.oscpu.override"` can be used to set a value to be returned instead of the t... |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 1
- **注意事项**:
  - The preference `"general.oscpu.override"` can be used to set a value to be returned instead of the true CPU description. The preference setting is ignored for calls made by privileged code, which continue to get the actual CPU description.

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

