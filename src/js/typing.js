document.addEventListener("DOMContentLoaded", () => {
	const lines = document.querySelectorAll(".typing");
	let currentLine = 0;

	function typeLine(lineEl, text, index = 0, callback = () => { }) {
		if (typeof text !== "string") return callback(); // 防止 undefined 报错

		if (index < text.length) {
			lineEl.textContent += text.charAt(index);
			setTimeout(() => typeLine(lineEl, text, index + 1, callback), 50);
		} else {
			callback();
		}
	}

	function processNextLine() {
		if (currentLine >= lines.length) return;
		const lineEl = lines[currentLine];
		const text = lineEl.dataset.text || "";

		// 清空内容，避免重复渲染或已有内容
		lineEl.textContent = "";

		typeLine(lineEl, text, 0, () => {
			currentLine++;
			processNextLine();
		});
	}

	processNextLine();
});
