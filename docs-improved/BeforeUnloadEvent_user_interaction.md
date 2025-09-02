# BeforeUnloadEvent.user_interaction API 兼容性数据

## 基本信息

- **API名称**: `BeforeUnloadEvent.user_interaction`
- **标签**: `web-features:beforeunload`
- **描述**: User interaction required for dialog box

## 使用示例

### 基本用法

```javascript
// BeforeUnloadEvent.user_interaction 使用示例
// 请查阅MDN文档了解具体用法
console.log('BeforeUnloadEvent.user_interaction API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查BeforeUnloadEvent.user_interaction是否支持
function isBeforeUnloadEventUser_interactionSupported() {
    return 'user_interaction' in beforeunloadevent && typeof beforeunloadevent.user_interaction === 'function';
}

if (isBeforeUnloadEventUser_interactionSupported()) {
    console.log('BeforeUnloadEvent.user_interaction 支持');
    // 使用BeforeUnloadEvent.user_interaction
} else {
    console.log('BeforeUnloadEvent.user_interaction 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BeforeUnloadEvent.user_interaction polyfill
if (!beforeunloadevent.user_interaction) {
    // 在这里添加polyfill实现
    console.log('加载BeforeUnloadEvent.user_interaction polyfill');
}
```

