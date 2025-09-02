# Permissions.permission_geolocation API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_geolocation`
- **标签**: `web-features:geolocation`
- **描述**: `geolocation` permission

## 使用示例

### 基本用法

```javascript
// 获取地理位置
navigator.geolocation.getCurrentPosition(
    function(position) {
        console.log('纬度:', position.coords.latitude);
        console.log('经度:', position.coords.longitude);
    },
    function(error) {
        console.error('获取位置失败:', error);
    }
);
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 46 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 43

### Firefox

- **支持版本**: 46

### Safari

- **支持版本**: 16

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

