function loadNavbar(options = {}) {
	const el = document.getElementById("navbar");

	if (!el) return;
	el.innerHTML = `
    <nav class="nav-bar">
      <ul>
        <li><a href="index.html">Projects</a></li>
        <li><a href="blog.html">Blogs</a></li>
        <li><a href="https://github.com">Github</a></li>
      </ul>
    </nav>
  `;
}

loadNavbar();


