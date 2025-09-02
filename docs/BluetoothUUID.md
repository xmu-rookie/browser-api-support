# BluetoothUUID API 兼容性数据

## 基本信息

- **API名称**: `BluetoothUUID`
- **MDN文档**: [BluetoothUUID](https://developer.mozilla.org/docs/Web/API/BluetoothUUID)
- **规范文档**: [查看规范](https://webbluetoothcg.github.io/web-bluetooth/#bluetoothuuid)
- **标签**: `web-features:web-bluetooth`

## 使用示例

### 基本用法

```javascript
// BluetoothUUID 使用示例
// 请查阅MDN文档了解具体用法
console.log('BluetoothUUID API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 56 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | ❌ 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Chrome Android

- **支持版本**: 56

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查BluetoothUUID是否支持
function isBluetoothUUIDSupported() {
    return 'BluetoothUUID' in window || typeof BluetoothUUID !== 'undefined';
}

if (isBluetoothUUIDSupported()) {
    console.log('BluetoothUUID 支持');
    // 使用BluetoothUUID
} else {
    console.log('BluetoothUUID 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BluetoothUUID polyfill
if (!window.BluetoothUUID) {
    // 在这里添加polyfill实现
    console.log('加载BluetoothUUID polyfill');
}
```

