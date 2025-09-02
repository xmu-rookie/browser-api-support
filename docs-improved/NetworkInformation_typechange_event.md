# NetworkInformation.typechange_event API 兼容性数据

## 基本信息

- **API名称**: `NetworkInformation.typechange_event`
- **描述**: `typechange` event

## 使用示例

### 基本用法

```javascript
// NetworkInformation.typechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('NetworkInformation.typechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 38 | Removal proposed in [bug 40509974](https://crbug.com/40509974). |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
| Firefox Android | 31 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 50 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Chrome Android

- **支持版本**: 38
- **注意事项**:
  - Removal proposed in [bug 40509974](https://crbug.com/40509974).

### Firefox

- **支持版本**: 31
- **移除版本**: 32

### Firefox Android

- **支持版本**: 31
- **移除版本**: 99

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 50

## 兼容性检查代码

### 特性检测

```javascript
// 检查NetworkInformation.typechange_event是否支持
function isNetworkInformationTypechange_eventSupported() {
    return 'typechange_event' in networkinformation && typeof networkinformation.typechange_event === 'function';
}

if (isNetworkInformationTypechange_eventSupported()) {
    console.log('NetworkInformation.typechange_event 支持');
    // 使用NetworkInformation.typechange_event
} else {
    console.log('NetworkInformation.typechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NetworkInformation.typechange_event polyfill
if (!networkinformation.typechange_event) {
    // 在这里添加polyfill实现
    console.log('加载NetworkInformation.typechange_event polyfill');
}
```

