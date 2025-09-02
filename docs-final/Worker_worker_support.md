# Worker.worker_support API 兼容性数据

## 基本信息

- **API名称**: `Worker.worker_support`
- **标签**: `web-features:dedicated-workers`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// Worker.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('Worker.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 | Not available in Shared Workers. See [bug 40695450](https://crbug.com/40695450). |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 11.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 | Not available in Shared Workers. See [bug 265263](https://webkit.org/b/265263). |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69
- **部分实现**: 是
- **注意事项**:
  - Not available in Shared Workers. See [bug 40695450](https://crbug.com/40695450).

### Firefox

- **支持版本**: 34

### Node.js

- **支持版本**: 11.7.0

### Safari

- **支持版本**: 16.4
- **部分实现**: 是
- **注意事项**:
  - Not available in Shared Workers. See [bug 265263](https://webkit.org/b/265263).

