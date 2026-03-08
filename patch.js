/* ============================================================
   patch.js · Nâng cấp JavaScript (Micro-interactions)
   Tự động chạy, tương thích hoàn toàn với script.js
   ============================================================ */

(function initChiikawaPatch() {
    'use strict';

    // ─────────────────────────────────────────────────────────
    // 1. HOVER MICRO-INTERACTIONS (Lá/Tim bay lơ lửng)
    // ─────────────────────────────────────────────────────────
    let lastParticleTime = 0;
    const hoverIcons = ['🌿', '💚', '🌸', '✨', '🍃', '💕'];

    document.addEventListener('mousemove', (e) => {
        // Chỉ kích hoạt khi chuột lướt qua các thẻ nút hoặc option
        const targetBtn = e.target.closest('button, .opt-btn, .btn-ghost, .btn-start');
        if (!targetBtn) return;

        const now = Date.now();
        // Giới hạn tần suất tạo hạt (throttle 100ms) để không gây lag
        if (now - lastParticleTime < 100) return;
        lastParticleTime = now;

        spawnHoverParticle(e.clientX, e.clientY);
    });

    function spawnHoverParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'patch-hover-particle';
        particle.textContent = hoverIcons[Math.floor(Math.random() * hoverIcons.length)];

        // Random hướng bay và góc xoay
        const dx = (Math.random() - 0.5) * 80 + 'px'; // Trái/Phải
        const dy = (Math.random() - 1) * 60 + 'px';   // Ưu tiên bay lên trên
        const rot = (Math.random() * 90 - 45) + 'deg'; // Xoay nghiêng

        particle.style.setProperty('--dx', dx);
        particle.style.setProperty('--dy', dy);
        particle.style.setProperty('--rot', rot);

        particle.style.left = x + 'px';
        particle.style.top = y + 'px';

        document.body.appendChild(particle);

        // Dọn dẹp DOM sau khi animation kết thúc
        setTimeout(() => particle.remove(), 800);
    }

    // ─────────────────────────────────────────────────────────
    // 2. CLICK OPTION BOUNCE (Option nảy lên khi click)
    // ─────────────────────────────────────────────────────────
    document.addEventListener('click', (e) => {
        const opt = e.target.closest('.opt-btn');
        if (!opt) return;

        // Xóa class cũ nếu nhấn liên tục
        opt.classList.remove('patch-bounce-active');
        
        // Buộc trình duyệt vẽ lại (reflow) để animation có thể chạy lại
        void opt.offsetWidth; 

        // Gắn class kích hoạt animation nảy
        opt.classList.add('patch-bounce-active');

        // Gỡ class sau khi xong (trùng với thời gian keyframes 0.4s)
        setTimeout(() => {
            if (opt) opt.classList.remove('patch-bounce-active');
        }, 400);
    });

    // ─────────────────────────────────────────────────────────
    // 3. TYPING INDICATOR (Bong bóng chat ở Loading Screen)
    // ─────────────────────────────────────────────────────────
    function injectTypingIndicator() {
        const loadingWrap = document.querySelector('.loading-wrap');
        const loadingFlavor = document.getElementById('loading-flavor');
        
        if (!loadingWrap) return;

        // Tránh inject trùng lặp
        if (document.querySelector('.patch-typing-bubble')) return;

        // Tạo cấu trúc bong bóng chat
        const bubble = document.createElement('div');
        bubble.className = 'patch-typing-bubble';
        bubble.setAttribute('aria-hidden', 'true');
        bubble.innerHTML = `
            <div class="patch-typing-dot"></div>
            <div class="patch-typing-dot"></div>
            <div class="patch-typing-dot"></div>
        `;

        // Chèn vào giữa hình (loading-gif) và dòng text (loading-flavor)
        if (loadingFlavor) {
            loadingWrap.insertBefore(bubble, loadingFlavor);
        } else {
            loadingWrap.appendChild(bubble);
        }
    }

    // Đảm bảo DOM đã load xong mới chèn bong bóng chat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectTypingIndicator);
    } else {
        injectTypingIndicator();
    }

})();
// ─────────────────────────────────────────────────────────
    // 4. HIỆU ỨNG KÝ TÊN (GIÁM SÁT KHI BỨC THƯ GÕ XONG)
    // ─────────────────────────────────────────────────────────
    function initSignatureEffect() {
        const signBlock = document.querySelector('.paper-sign-block');
        const signName = document.getElementById('sign-name');
        
        if (!signBlock || !signName) return;

        // Tạo một "người giám sát" để theo dõi CSS của khối chữ ký
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'style') {
                    const opacity = signBlock.style.opacity;
                    if (opacity === '1') {
                        // Thư gõ xong -> JS gốc đổi opacity thành 1 -> Kích hoạt hiệu ứng ký!
                        signName.classList.add('patch-writing-active');
                    } else if (opacity === '0' || opacity === '') {
                        // Người dùng bấm "Chơi lại từ đầu" -> Xóa class để lần sau ký lại
                        signName.classList.remove('patch-writing-active');
                    }
                }
            });
        });

        // Bắt đầu giám sát thuộc tính 'style' của signBlock
        observer.observe(signBlock, { attributes: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSignatureEffect);
    } else {
        initSignatureEffect();
    }
    // ─────────────────────────────────────────────────────────
    // 5. THÔNG BÁO THEO 12 KHUNG GIỜ (THAY THẾ CHỮ & TOAST)
    // ─────────────────────────────────────────────────────────
    function checkTimeOfDay() {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();

        let toastIcon = '';
        let toastText = '';
        let taglineText = '';

        // 1. Khuya muộn (00:00 - 01:59)
        if (hour === 0 || hour === 1) {
    toastIcon = '🦉';
    toastText = 'Muộn lắm rồi kìa, đi ngủ nha!!!!';
    taglineText = 'late af! · go bed! · zzz rn!';
}
        // 2. Rạng sáng (02:00 - 04:59)
       else if (hour >= 2 && hour <= 4) {
    toastIcon = '😵';
    toastText = 'Giờ này mà còn thức thì chịu luôn bạn lun á!!!!!!!';
    taglineText = '2am?! · still up?! · sleep now?!';
}
        // 3. Sáng sớm (05:00 - 06:59)
else if (hour >= 5 && hour <= 6) {
    toastIcon = '🌅';
    toastText = 'Chào buổi sáng! Dậy sớm thế, ngày mới năng lượng nha~';
    taglineText = 'gm early · rise n shine · hru bby';
}


       // 4. Sáng (07:00 - 08:59)
else if (hour >= 7 && hour <= 8) {
    toastIcon = '🍳';
    toastText = 'Bạn sáng chưa? Nhớ nạp năng lượng đầy đủ nha';
    taglineText = 'brekkie yet? · eat up? · hagd cutie?';
}
        // 5. Nửa buổi sáng (09:00 - 10:59)
        else if (hour >= 9 && hour <= 10) {
            toastIcon = '🌿';
            toastText = 'Bạn đậy chưa đó? trời gần trưa rui';
            taglineText = 'ily · imy · xoxo';
        }
        // 6. Trưa (11:00 - 12:59)
else if (hour >= 11 && hour <= 12) {
    toastIcon = '🍱';
    toastText = 'Trưa rồi, nhớ ăn uống đầy đủ rồi chợp mắt một xíu nha';
    taglineText = 'lunch? · ate yet? · nap soon?';
}
        // 7. Đầu giờ chiều (13:00 - 14:59)
        else if (hour >= 13 && hour <= 14) {
            toastIcon = '☕';
            toastText = 'Đầu giờ chiều dễ buồn ngủ lắm á';
            taglineText = 'sleepy? · dying? · need a nap';
        }
       // 8. Giữa chiều (15:00 - 16:59)
else if (hour >= 15 && hour <= 16) {
    toastIcon = '🐰';
    toastText = 'Sắp hết ngày rồi, cố lên nào, sắp được nghỉ ngơi rùi đó';
    taglineText = 'arvo grind · push thru · almost free';
}
        // 9. Chiều muộn / Tan tầm (17:00 - 18:59)
else if (hour >= 17 && hour <= 18) {
    toastIcon = '🌇';
    toastText = 'Chiều rùi, đi tắm rửa nghỉ ngơi thôi, hôm nay vất vả rồi';
    taglineText = 'sunset! · unwind! · u slayed!';
}
        // 10. Tối (19:00 - 20:59)
        else if (hour >= 19 && hour <= 20) {
            toastIcon = '🎧';
            toastText = 'Buổi tối an lành nhé!';
            taglineText = 'ate yet? · hru? · wud?';
        }
        // 11. Tối muộn (21:00 - 22:29)
        else if (hour === 21 || (hour === 22 && minute < 30)) {
            toastIcon = '🌙';
            toastText = 'Sắp tơi giờ ngủ rồi, nhớ đừng căn thẳng quá để có một giấc ngủ ngon nhé!';
            taglineText = '3207778 · 6314 · 93110';
        }
        // 12. Khuya (22:30 - 23:59)
       else {
    toastIcon = '💤';
    toastText = 'Khuya rồi nhớ ngủ sớm nha!';
    taglineText = 'late af · gud nai · luv u';
}

        // Đổi nội dung Tagline dưới tiêu đề
        const tagline = document.querySelector('.landing-tagline');
        if (tagline) {
            tagline.innerHTML = taglineText;
        }

        // Đợi 0.5s sau khi load trang mới trượt thông báo xuống cho mượt
        setTimeout(() => {
            // Không hiện thông báo nếu đã lướt đi trang khác (không còn ở landing)
            if (document.getElementById('screen-landing').classList.contains('active')) {
                const toast = document.createElement('div');
                toast.className = 'patch-time-toast';
                toast.innerHTML = `<span class="patch-time-toast-icon">${toastIcon}</span> ${toastText}`;
                
                document.body.appendChild(toast);

                // Tự động xóa element sau 7s (đã trừ thời gian CSS animation chạy xong)
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 7000);
            }
        }, 500);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkTimeOfDay);
    } else {
        checkTimeOfDay();
    }

    /* ============================================================
   8. LOGIC PHẢN HỒI THƯ CỦA BÍP BÍP (TRẢ LỜI & GỬI MAIL)
   ============================================================ */
(function initReplySection() {
    let noClickCount = 0;
    let yesFontSize = 1; // Đơn vị rem
    let yesPaddingV = 10; // Đơn vị px
    let yesPaddingH = 30; // Đơn vị px

    const replySection = document.getElementById('reply-section');
    const replyQuestion = document.getElementById('reply-question');
    const replyButtons = document.getElementById('reply-buttons');
    const btnYes = document.getElementById('btn-reply-yes');
    const btnNo = document.getElementById('btn-reply-no');
    const replyBoxWrap = document.getElementById('reply-box-wrap');
    const btnSend = document.getElementById('btn-send-reply');
    const replyTextarea = document.getElementById('reply-textarea');
    const successMsg = document.getElementById('reply-success-msg');

    if (!replySection || !btnYes || !btnNo) return;

    // 1. Tự động hiện phần phản hồi sau khi chữ ký ký xong
    const signName = document.getElementById('sign-name');
    if (signName) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class' && signName.classList.contains('patch-writing-active')) {
                    // Chữ ký bắt đầu ký mất 2.5s, delay thêm 1.5s rồi mới hiện ra cho bất ngờ
                    setTimeout(() => {
                        replySection.style.display = 'block';
                        setTimeout(() => replySection.style.opacity = '1', 50);
                    }, 4000); 
                }
            });
        });
        observer.observe(signName, { attributes: true });
    }

    // 2. Mở khung soạn thảo
    function openTextarea() {
        replyButtons.style.display = 'none';
        replyQuestion.innerText = "Hãy viết những gì bạn muốn nói nhé ✨";
        replyBoxWrap.style.display = 'block';
        replyBoxWrap.style.animation = 'popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        setTimeout(() => replyTextarea.focus(), 500);
    }

    // 3. Xử lý khi nhấn nút CÓ
    btnYes.addEventListener('click', () => {
        // Âm thanh dễ thương (dùng lại hàm sfx của script.js)
        if (typeof sfx === 'function') sfx('audio/pop-select.mp3', 0.5);
        openTextarea();
    });

    // 4. Xử lý khi nhấn nút KHÔNG (Nghịch ngợm)
    btnNo.addEventListener('click', function handleNoClick() {
        if (typeof sfx === 'function') sfx('audio/clicksound.mp3', 0.4);
        
        noClickCount++;
        
        // Đổi text dỗi hờn nhẹ
        const noTexts = ["Không", "Bạn nhấm nhầm đúng hông?", "Nghĩ lại đi mờ 🥺", "Thật sự không luôn? 😭", "....🥺"];
        if (noClickCount < 5) {
            btnNo.innerText = noTexts[noClickCount] || "Không";
            
            // Nút Có to lên từ từ
            yesFontSize += 0.2;
            yesPaddingV += 4;
            yesPaddingH += 8;
            btnYes.style.fontSize = `${yesFontSize}rem`;
            btnYes.style.padding = `${yesPaddingV}px ${yesPaddingH}px`;
            
            // Nút Không bé lại
            btnNo.style.transform = `scale(${1 - (noClickCount * 0.1)})`;
        } else {
            // Lần thứ 5: Ép buộc thành Có
            btnNo.innerText = "Có 💚";
            btnNo.style.background = "linear-gradient(135deg, var(--green), var(--green-deep))";
            btnNo.style.color = "white";
            btnNo.style.border = "none";
            btnNo.style.transform = "scale(1)";
            btnNo.style.boxShadow = "var(--glow-green)";
            
            // Thay đổi sự kiện của nút Không thành mở form
            btnNo.removeEventListener('click', handleNoClick);
            btnNo.addEventListener('click', () => {
                if (typeof sfx === 'function') sfx('audio/pop-select.mp3', 0.5);
                openTextarea();
            });
        }
    });

    // 5. Gửi thư (Sử dụng chung cấu hình EmailJS đã có)
    btnSend.addEventListener('click', async () => {
        const message = replyTextarea.value.trim();
        if (!message) {
            alert("Bạn chưa viết gì kìa 🥺");
            replyTextarea.focus();
            return;
        }

        if (typeof sfx === 'function') sfx('audio/sparkle-reveal.mp3', 0.6);
        btnSend.innerText = "Đang buộc thư vào chim bồ câu... 🕊️";
        btnSend.disabled = true;

        const templateParams = {
            winner_badge: "💌 CÓ THƯ PHẢN HỒI TỪ BÍP BÍP",
            score_summary: "Bíp Bíp đã đọc thư 8/3 và gửi lại lời nhắn:",
            answer_details: message,
            to_name: "Phú"
        };

        try {
            // Sử dụng chính service_id và template_id bạn đang dùng ở script.js
            await emailjs.send('service_na5ced4', 'template_dlcv5sd', templateParams);
            
            replyBoxWrap.style.display = 'none';
            replyQuestion.style.display = 'none';
            successMsg.style.display = 'block';
            
            // Bắn pháo giấy chúc mừng
            if (typeof launchConfetti === 'function') launchConfetti();
        } catch (err) {
            console.error("Lỗi gửi thư phản hồi:", err);
            alert("Úi, bồ câu bị lạc đường rồi. Bíp Bíp chụp màn hình gửi trực tiếp cho Phú nha 🥺");
            btnSend.innerText = "Thử gửi lại 💌";
            btnSend.disabled = false;
        }
    });
})();
