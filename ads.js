// كود الإعلانات الموحد
function loadAds() {
    // يمكنك إضافة كود إعلان أدسنس هنا
    const adCode = `
        <div class="my-8 p-4 bg-gray-100 rounded-lg text-center border border-dashed border-gray-400">
            <p class="text-sm text-gray-500 mb-2">إعلان</p>
            <!-- ضع كود إعلان أدسنس هنا بين التعليقات -->
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-XXXXXXXXXXXX"
                 data-ad-slot="XXXXXXXXXX"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
    `;
    
    // إدراج الإعلان في أماكن محددة
    const targetElement = document.querySelector('article');
    if (targetElement) {
        targetElement.insertAdjacentHTML('beforeend', adCode);
    }
}

window.onload = loadAds;
```
