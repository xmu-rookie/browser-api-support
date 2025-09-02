# DynamicsCompressorNode.attack API 兼容性数据

## 基本信息

- **API名称**: `DynamicsCompressorNode.attack`
- **MDN文档**: [DynamicsCompressorNode.attack](https://developer.mozilla.org/docs/Web/API/DynamicsCompressorNode/attack)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-dynamicscompressornode-attack)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// DynamicsCompressorNode.attack 使用示例
// 请查阅MDN文档了解具体用法
console.log('DynamicsCompressorNode.attack API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 19 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 19

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查DynamicsCompressorNode.attack是否支持
function isDynamicsCompressorNodeAttackSupported() {
    return 'attack' in dynamicscompressornode && typeof dynamicscompressornode.attack === 'function';
}

if (isDynamicsCompressorNodeAttackSupported()) {
    console.log('DynamicsCompressorNode.attack 支持');
    // 使用DynamicsCompressorNode.attack
} else {
    console.log('DynamicsCompressorNode.attack 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DynamicsCompressorNode.attack polyfill
if (!dynamicscompressornode.attack) {
    // 在这里添加polyfill实现
    console.log('加载DynamicsCompressorNode.attack polyfill');
}
```

