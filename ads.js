
// ads.js - هذا الملف يضيف الإعلانات تلقائياً في الصفحات
function injectAds() {
    const adHTML = `
        <div class="my-6 p-4 bg-yellow-50 border-2 border-dashed border-yellow-400 rounded-xl text-center">
            <span class="text-xs font-bold text-yellow-600 uppercase">مساحة إعلانية تجريبية</span>
            <p class="text-gray-700 text-sm mt-1">هذا الإعلان يتم جلبه من ملف ads.js تلقائياً</p>
        </div>
    `;

    // إضافة الإعلان قبل المحتوى
    const article = document.querySelector('article');
    if (article) {
        // إضافة إعلان في الأعلى
        article.insertAdjacentHTML('afterbegin', adHTML);
        // إضافة إعلان في الأسفل
        article.insertAdjacentHTML('beforeend', adHTML);
    }
}

// تنفيذ الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', injectAds);
