const currentYear = document.getElementById("currentYear");
const leftNav = document.getElementById("leftNav");
const rightNav = document.getElementById("rightNav");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
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
  projects.forEach(p => {
    const article = document.createElement('article');
    article.className = 'post-card';
    article.innerHTML = `
      <span class="post-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a class="post-link" href="${p.link}" target="_blank" rel="noreferrer">跳转至GitHub ↪</a>
    `;
    projectsList.appendChild(article);
  });
}
