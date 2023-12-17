import "./index.pug";
import "./index.scss";

const contentItem = document.querySelector(".content__list");
const originalContent = contentItem.innerHTML;
const contentTexts = [
  "Skype аудит",
  "30 виджетов",
  "Dashboard",
  "Месяц аmoCRM",
];

const overwritingItem = (text) => {
  return `	
  			<li class="content__item">
				<span></span>
				<span>${text}</span>
			</li>
		`;
};

const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.contentRect.width < 480) {
      contentItem.innerHTML = contentTexts
        .map((text) => overwritingItem(text))
        .join("");
    }
    if (entry.contentRect.width >= 480) {
      contentItem.innerHTML = originalContent;
    }
  });
});

resizeObserver.observe(document.body);
