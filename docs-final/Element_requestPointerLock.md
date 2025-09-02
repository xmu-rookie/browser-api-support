# Element.requestPointerLock API 兼容性数据

## 基本信息

- **API名称**: `Element.requestPointerLock`
- **MDN文档**: [Element.requestPointerLock](https://developer.mozilla.org/docs/Web/API/Element/requestPointerLock)
- **规范文档**: [查看规范](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock)
- **标签**: `web-features:pointer-lock`

## 使用示例

### 基本用法

```javascript
// Element.requestPointerLock 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.requestPointerLock API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 | From version 92, returns a promise instead of `undefined`. The behavior reflects [a specification ch... |
| Chrome Android | 不支持 |  |
| Edge | 13 | From version 92, returns a promise instead of `undefined`. The behavior reflects [a specification ch... |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 | From version 18.4, returns a promise instead of `undefined`. The behavior reflects [a specification ... |
| Safari iOS | 不支持 |  |
| Samsung Internet | 3.0 | From version 16, returns a promise instead of `undefined`. The behavior reflects [a specification ch... |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37
- **注意事项**:
  - From version 92, returns a promise instead of `undefined`. The behavior reflects [a specification change](https://github.com/w3c/pointerlock/commit/0e99fcf3daa23269bf2b019f5269a154088d2347).
- **支持版本**: 22
- **移除版本**: 38
- **前缀**: webkit

### Chrome Android

- **支持版本**: 不支持

### Edge

- **支持版本**: 13
- **注意事项**:
  - From version 92, returns a promise instead of `undefined`. The behavior reflects [a specification change](https://github.com/w3c/pointerlock/commit/0e99fcf3daa23269bf2b019f5269a154088d2347).

### Firefox

- **支持版本**: 50
- **支持版本**: 14
- **移除版本**: 50
- **前缀**: moz

### Safari

- **支持版本**: 10.1
- **注意事项**:
  - From version 18.4, returns a promise instead of `undefined`. The behavior reflects [a specification change](https://github.com/w3c/pointerlock/commit/0e99fcf3daa23269bf2b019f5269a154088d2347).

### Safari iOS

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 3.0
- **注意事项**:
  - From version 16, returns a promise instead of `undefined`. The behavior reflects [a specification change](https://github.com/w3c/pointerlock/commit/0e99fcf3daa23269bf2b019f5269a154088d2347).
- **支持版本**: 1.5
- **移除版本**: 3.0
- **前缀**: webkit

## 相关子API

该API包含以下子功能：

- **options_unadjustedMovement_parameter**: `options.unadjustedMovement` parameter

