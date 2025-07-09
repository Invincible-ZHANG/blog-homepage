document.addEventListener("DOMContentLoaded", () => {
	const lines = document.querySelectorAll(".line");
	let current = 0;

	function typeLine(line, text, i = 0) {
		if (i < text.length) {
			line.textContent += text.charAt(i);
			setTimeout(() => typeLine(line, text, i + 1), 30); // 打字速度可调
		} else {
			current++;
			if (current < lines.length) {
				setTimeout(() => startTyping(lines[current]), 300);
			}
		}
	}

	function startTyping(line) {
		const text = line.dataset.text;
		line.textContent = ""; // 清空原内容
		typeLine(line, text);
	}

	if (lines.length > 0) {
		startTyping(lines[current]);
	}
});
