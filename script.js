const currentYear = document.getElementById("currentYear");
const leftNav = document.getElementById("leftNav");
const rightNav = document.getElementById("rightNav");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (!revealElements.length || !window.IntersectionObserver) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('reveal-visible');
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

window.addEventListener('DOMContentLoaded', initScrollReveal);

// 渲染最近的新项目（如无 JS 则不会显示）
const projects = [
  {
    tag: 'C++',
    title: 'Console UI',
    desc: '一个可用于 C++ 的控制台界面头文件。',
    link: 'https://github.com/kevin-steve772/console-ui'
  },
  {
    tag: '主页',
    title: 'kevin-steve-772.github.io',
    desc: '我的个人主页，完全开源。',
    link: 'https://github.com/kevin-steve772/kevin-steve722.github.io'
  },
  {
    tag: '敬请期待',
    title: '更多好玩开源项目即将来袭！',
    desc: '正在筹备中，尽情期待后续的新项目发布。',
    link: 'https://github.com/kevin-steve772?tab=repositories' // 链接到我的 GitHub 仓库列表
  }
];

const projectsList = document.getElementById('projectsList');
if (projectsList && projects.length) {
  projects.forEach((p, index) => {
    const article = document.createElement('article');
    article.className = `post-card scroll-reveal scroll-delay-${100 + (index * 100)}`;
    article.innerHTML = `
      <span class="post-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a class="post-link" href="${p.link}" target="_blank" rel="noreferrer">跳转至GitHub ↪</a>
    `;
    projectsList.appendChild(article);
  });
}
(function() {
    // 彩蛋触发：左上角圆形头像 (class="nav-icon" 位于 .split-nav-left 内)
    let clickCount = 0;
    let resetTimer = null;
    let isRedirecting = false;       // 防止跳转过程中重复触发

    const avatarBtn = document.querySelector('.split-nav-left .nav-icon');
    if (!avatarBtn) {
        console.warn('未找到头像按钮，彩蛋功能无法绑定');
        return;
    }

    // 可选：轻提示浮层样式 (临时)
    const toastStyle = document.createElement('style');
    toastStyle.textContent = `
        .easter-toast {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.85);
            backdrop-filter: blur(12px);
            color: #7ef0ba;
            padding: 8px 18px;
            border-radius: 40px;
            font-size: 14px;
            font-weight: 500;
            font-family: monospace;
            z-index: 9999;
            pointer-events: none;
            border-left: 3px solid #58a6ff;
            box-shadow: 0 5px 18px rgba(0,0,0,0.3);
            transition: opacity 0.2s;
        }
    `;
    document.head.appendChild(toastStyle);

    function showMessage(msg, duration = 1200) {
        let toast = document.querySelector('.easter-toast');
        if (toast) toast.remove();
        const div = document.createElement('div');
        div.className = 'easter-toast';
        div.textContent = msg;
        document.body.appendChild(div);
        setTimeout(() => {
            if (div && div.remove) div.remove();
        }, duration);
    }

    function resetCounter() {
        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            if (clickCount > 0 && clickCount < 10) {
                clickCount = 0;
            }
            resetTimer = null;
        }, 800);  // 0.8秒内未点则重置计数，符合“狂按”连击设定
    }

    avatarBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isRedirecting) return;

        clickCount++;
        resetCounter();

        const remaining = 10 - clickCount;
        if (clickCount === 10) {
            // 触发彩蛋
            isRedirecting = true;
            showMessage('🎉 彩蛋激活！进入 Linux 桌面... 🐧', 1500);
            // 清除定时器防止跳转后仍重置
            if (resetTimer) clearTimeout(resetTimer);
            setTimeout(() => {
                window.location.href = 'easter-egg.html';
            }, 280);
        }
    });
})();