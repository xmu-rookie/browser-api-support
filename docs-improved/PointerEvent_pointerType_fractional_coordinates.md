# PointerEvent.pointerType.fractional_coordinates API 兼容性数据

## 基本信息

- **API名称**: `PointerEvent.pointerType.fractional_coordinates`
- **标签**: `web-features:pointer-events-api`
- **描述**: Fractional coordinates for `mouse`.

## 使用示例

### 基本用法

```javascript
// PointerEvent.pointerType.fractional_coordinates 使用示例
// 请查阅MDN文档了解具体用法
console.log('PointerEvent.pointerType.fractional_coordinates API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 | `movementX` and `movementY` are not fractional, see [bug 41364801](https://crbug.com/41364801). |
| Chrome Android | 同主版本 |  |
| Edge | 79 | `movementX` and `movementY` are not fractional, see [bug 41364801](https://crbug.com/41364801). |
| Firefox | 135 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Only `clientX`, `clientY`, `pageX` and `pageY` are fractional. |
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

- **支持版本**: 64
- **部分实现**: 是
- **注意事项**:
  - `movementX` and `movementY` are not fractional, see [bug 41364801](https://crbug.com/41364801).

### Edge

- **支持版本**: 79
- **部分实现**: 是
- **注意事项**:
  - `movementX` and `movementY` are not fractional, see [bug 41364801](https://crbug.com/41364801).
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Only `clientX`, `clientY`, `pageX` and `pageY` are fractional.

### Firefox

- **支持版本**: 135

### Internet Explorer

- **支持版本**: 11
- **部分实现**: 是
- **注意事项**:
  - Only `clientX`, `clientY`, `pageX` and `pageY` are fractional.

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PointerEvent.pointerType.fractional_coordinates是否支持
function isPointerEventPointerTypeSupported() {
    return 'pointerType' in pointerevent && typeof pointerevent.pointerType === 'function';
}

if (isPointerEventPointerTypeSupported()) {
    console.log('PointerEvent.pointerType.fractional_coordinates 支持');
    // 使用PointerEvent.pointerType.fractional_coordinates
} else {
    console.log('PointerEvent.pointerType.fractional_coordinates 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PointerEvent.pointerType.fractional_coordinates polyfill
if (!pointerevent.pointerType) {
    // 在这里添加polyfill实现
    console.log('加载PointerEvent.pointerType.fractional_coordinates polyfill');
}
```

