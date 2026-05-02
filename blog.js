async function blogList() {
	try {
		console.log("helleo");
		const list = await fetch('./blog.json');
		if (!list) {
			console.log("this is the list");
		}

		const list_result = await list.json();
		const template_list = document.querySelector('.blog-index-list-element');
		const template_list_container = document.querySelector('.blog-index-list');

		list_result.forEach((list_card) => {
			const clone_list = template_list.cloneNode(true);
			clone_list.querySelector('.blog_heading').textContent = list_card.title;
			clone_list.querySelector('.date').textContent = list_card.date;
			clone_list.querySelector('.blog-excerpt').textContent = list_card.content_excerpt;

			clone_list.addEventListener('click', () => {
				window.location.href = `post.html?id=${list_card.id}`
			});

			template_list_container.appendChild(clone_list);


		});
		template_list.remove();
	}

	catch (err) {
		console.log("Error:", err);
	}
}


blogList();

