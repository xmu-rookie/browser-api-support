# MLOperand API 兼容性数据

## 基本信息

- **API名称**: `MLOperand`
- **规范文档**: [查看规范](https://www.w3.org/TR/webnn/#api-mloperand)
- **标签**: `web-features:webnn`

## 使用示例

### 基本用法

```javascript
// MLOperand 使用示例
// 请查阅MDN文档了解具体用法
console.log('MLOperand API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 112 |  |
| Chrome Android | 不支持 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 112
- **需要标志**: 
  - #web-machine-learning-neural-network: Enabled

### Chrome Android

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MLOperand是否支持
function isMLOperandSupported() {
    return 'MLOperand' in window || typeof MLOperand !== 'undefined';
}

if (isMLOperandSupported()) {
    console.log('MLOperand 支持');
    // 使用MLOperand
} else {
    console.log('MLOperand 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MLOperand polyfill
if (!window.MLOperand) {
    // 在这里添加polyfill实现
    console.log('加载MLOperand polyfill');
}
```

