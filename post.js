async function loadPost() {
	const params = new URLSearchParams(window.location.search);
	const id = params.get('id');

	const res = await fetch('./blog.json');
	const posts = await res.json();

	const postMeta = posts.find(p => p.id === id);
	if (!postMeta) {
		document.body.innerHTML = "<h3>Post not Found</h3>";
		return;
	}

	const mdRes = await fetch(postMeta.file);
	const mdText = await mdRes.text();
	const html = marked.parse(mdText);

	document.querySelector(".post-title").textContent = postMeta.title;
	document.querySelector(".post-date").textContent = postMeta.date;
	document.querySelector(".post-content").innerHTML = html;



}

loadPost();
