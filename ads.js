function injectAds() {
    // نص الإعلان (يمكنك استبداله بكود أدسنس لاحقاً)
    const adHTML = `
        <div class="my-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-dashed border-indigo-200 rounded-xl text-center">
            <p class="text-indigo-400 font-bold text-sm mb-2">إعلان تجريبي</p>
            <p class="text-gray-600">هذا الإعلان يتم جلبه تلقائياً بواسطة ads.js</p>
        </div>
    `;

    const article = document.querySelector('article');
    if (article) {
        // إضافة إعلان فوق المقال
        article.insertAdjacentHTML('afterbegin', adHTML);
        // إضافة إعلان تحت المقال
        article.insertAdjacentHTML('beforeend', adHTML);
    }
}

// تشغيل الدالة بعد تحميل الصفحة
window.addEventListener('DOMContentLoaded', injectAds);
