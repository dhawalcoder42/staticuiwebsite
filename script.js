document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        const question = faq.querySelector(".question");
        const answer = faq.querySelector(".answer");
        const arrow = faq.querySelector(".arrow");

        question.addEventListener("click", () => {
            // Close all other open answers
            document.querySelectorAll(".faq .answer").forEach(item => {
                if (item !== answer) item.style.display = "none";
            });

            document.querySelectorAll(".faq .arrow").forEach(item => {
                if (item !== arrow) item.style.transform = "rotate(45deg)";
            });

            // Toggle current answer
            const isOpen = answer.style.display === "block";
            answer.style.display = isOpen ? "none" : "block";
            arrow.style.transform = isOpen ? "rotate(45deg)" : "rotate(-135deg)";
        });
    });
});
