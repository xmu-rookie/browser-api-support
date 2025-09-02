# WorkerNavigator.hardwareConcurrency API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.hardwareConcurrency`
- **MDN文档**: [WorkerNavigator.hardwareConcurrency](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/hardwareConcurrency)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#dom-navigator-hardwareconcurrency-dev)
- **标签**: `web-features:hardware-concurrency`

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.hardwareConcurrency 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.hardwareConcurrency API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.13 |  |
| Edge | 15 |  |
| Firefox | 48 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 | The value of this property is clamped to 4 or 8 cores, to prevent device fingerprinting. See [bug 23... |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37

### Deno

- **支持版本**: 1.13

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 48

### Safari

- **支持版本**: 15.4
- **注意事项**:
  - The value of this property is clamped to 4 or 8 cores, to prevent device fingerprinting. See [bug 233381](https://webkit.org/b/233381).
- **支持版本**: 10.1
- **移除版本**: 11

