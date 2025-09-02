# Worker.Worker API 兼容性数据

## 基本信息

- **API名称**: `Worker.Worker`
- **MDN文档**: [Worker.Worker](https://developer.mozilla.org/docs/Web/API/Worker/Worker)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#dom-worker-dev)
- **标签**: `web-features:dedicated-workers`
- **描述**: `Worker()` constructor

## 使用示例

### 基本用法

```javascript
// Worker.Worker 使用示例
// 请查阅MDN文档了解具体用法
console.log('Worker.Worker API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 11.7.0 | Takes entirely different options parameters. |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 4

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 11.7.0
- **部分实现**: 是
- **注意事项**:
  - Takes entirely different options parameters.

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

## 相关子API

该API包含以下子功能：

- **ecmascript_modules**: Support for ECMAScript modules
- **mime_checks**: Strict MIME type checks for worker scripts
- **options_name_parameter**: `options.name` parameter
- **options_type_parameter**: `options.type` parameter

