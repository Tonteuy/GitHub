// สร้าง Shortcode สำหรับ HTML ของป๊อปอัพ
function custom_popup_html() {
ob_start(); // เริ่มการจับเอาต์พุต
?>
<div class="container">
      <button id="openPopupBtn" class="open-popup-btn">Open Popup</button>
</div>

<div class="popup" id="popup">
      <div class="popup-content">
            <span class="close-btn" id="closeBtn">&times;</span>
            <h2>Popup Title</h2>
            <p>This is the content of the popup.</p>
      </div>
</div>

}



<?php
return ob_get_clean(); // ส่งเอาต์พุตที่จับไว้เป็นผลลัพธ์
add_shortcode('custom_popup', 'custom_popup_html');

// แทรก CSS และ JavaScript เฉพาะเมื่อมีการใช้ Shortcode
function custom_popup_assets()
{
      // ตรวจสอบว่ามีการใช้ Shortcode [custom_popup] ในโพสต์หรือหน้า
      global $post;
      if (has_shortcode($post->post_content, 'custom_popup')) {
            // Enqueue the CSS file
            wp_enqueue_style('custom-popup-style', get_template_directory_uri() . '/css/popup.css');

            // Enqueue the JavaScript file
            wp_enqueue_script('custom-popup-script', get_template_directory_uri() . '/js/popup.js', array('jquery'), null, true);
      }
}

add_action('wp_enqueue_scripts', 'custom_popup_assets');
