async function htmlPutter() {
	try {
		const data = await fetch('./project.json');
		const result = await data.json();
		const template = document.querySelector(".a");
		const container = document.querySelector(".project_showcase");

		// const project_showcase_left_header = document.querySelector(".title_card_box_left");
		// const project_showcase_right_header = document.querySelector(".title_card_box_right");
		// const project_showcase_image = document.querySelector(".project-image");

		result.forEach((result_card, index) => {
			clone = template.cloneNode(true);

			clone.querySelector('.title_card_box_left').textContent = result_card.title.left_title;
			clone.querySelector(".title_card_box_right").textContent = result_card.title.right_title;
			clone.querySelector(".project-image").src = result_card.image;
			clone.querySelector("p").textContent = result_card.body;

			const project_showcase_footer = clone.querySelector(".title_card_footer");
			result_card.tags.forEach(tag => {
				const span = document.createElement("span");
				span.classList.add("title_card_footer_box");
				span.textContent = tag;
				project_showcase_footer.appendChild(span);
			});

			const project_showcase_footer_link = clone.querySelector(".title_card_footer_link");
			result_card.links.forEach(link => {
				const a = document.createElement("a");
				a.classList.add("title_card_footer_box_link");
				a.textContent = link.text;
				a.href = link.url;
				a.target = "_blank";
				a.rel = "noopener noreferrer";
				project_showcase_footer_link.appendChild(a);
				// const span = document.createElement("span");
				// span.classList.add("title_card_footer_box_link");
				// span.textContent = link;
				// project_showcase_footer_link.appendChild(span);
			});


			container.appendChild(clone);

		});

		template.remove();

	}

	catch (err) {
		console.log("Error in fetching data", err);
	}
}

htmlPutter();
