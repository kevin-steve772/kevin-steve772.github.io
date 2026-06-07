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

// 确保在 DOM 加载完毕后初始化（处理脚本在 </body> 前的情况）
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}

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
