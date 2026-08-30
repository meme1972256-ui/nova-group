// السنة الحالية
document.querySelectorAll(".current-year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
});


// ظهور العناصر عند النزول في الصفحة
const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(".animate").forEach(function (element) {
    observer.observe(element);
});


// الأسئلة الشائعة
document.querySelectorAll(".faq-question").forEach(function (question) {

    question.addEventListener("click", function () {

        const item = this.parentElement;

        item.classList.toggle("active");

    });

});


// رسالة نموذج التواصل
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const message = document.getElementById("formMessage");

        message.textContent =
            "تم استلام رسالتك بنجاح. سنتواصل معك قريبًا.";

        contactForm.reset();

    });

}
