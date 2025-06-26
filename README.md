# 📸 Lightbox Image Viewer Plugin

A simple JavaScript-based lightbox plugin that displays images in a popup view with left/right navigation and close functionality.  
✅ No external libraries required.

---

## 📁 Folder Structure

```bash
lightbox/
├── app.js         # Plugin JavaScript file
├── style.css      # Styles required for the plugin
└── imageslogo/    # Icons used inside the popup (back.png, next.png, cancel.png)

```
🚀 Features
Image click popup
Left and right navigation
Close button
Auto-hide arrows on first and last images
Minimal setup


Include CSS and JS in Your HTML File

```html
<!-- Required CSS -->
<link rel="stylesheet" href="lightbox/style.css" />

<!-- Your image elements -->
<img src="img/img1.jpg" class="pop" />
<img src="img/img2.jpg" class="pop" />
<!-- Add more images with the same class -->

<!-- Required JS -->
<script src="lightbox/app.js"></script>

<!-- Initialize the plugin -->
<script>
  imagePopupInit('pop'); // pass your image class name
</script>

```


🧠 Usage Instructions
* Assign the same class (e.g., pop) to all images you want to use with the plugin.

* Call the imagePopupInit('your-class-name') function after the DOM has loaded.

* Ensure you have these icons inside the imageslogo/ folder:

* back.png – left arrow

* next.png – right arrow

* cancel.png – close icon

📷 Example

```html
<!-- Images -->
<img src="gallery/photo1.jpg" class="pop" />
<img src="gallery/photo2.jpg" class="pop" />
```

```js
<!-- JS Initialization -->
<script>
  imagePopupInit('pop');
</script>
```


📌 Notes
* The popup HTML is automatically injected when imagePopupInit() is called.

* You must include both lightbox/style.css and lightbox/app.js in your page.

* Compatible with any HTML page.

* Fully written in plain JavaScript with no dependencies.
