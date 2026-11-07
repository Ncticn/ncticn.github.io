const summaryItemList = document.getElementById("summaryItemList");
const cardResultValue = document.getElementById("cardResultValue");
const DATA_URL = "./data/data.json";

async function getData() {

    try {
        const response = await fetch(DATA_URL);

        if (!response.ok) {
            throw new Error(`Response status ${response.status}`);
        }

        const result = await response.json();
        return Array.isArray(result) ? result : [];
    } catch (error) {
        console.error(error.message);
        return [];
    }
}


function createSummaryItem({ category, icon, score }) {

    const li = document.createElement("li");
    li.className = "summary-item";
    li.dataset.variant = category.toLowerCase();

    const label = document.createElement("div");
    label.className = "summary-item__label";

    const img = document.createElement("img");
    img.className = "summary-item__icon";
    img.src = icon;
    img.alt = "";

    const title = document.createElement("span");
    title.className = "summary-item__title text-sm font-medium";
    title.textContent = category;

    label.append(img, title);

    const scoreBox = document.createElement("span");
    scoreBox.className = "summary-item__score";

    const value = document.createElement("span");
    value.className = "summary-item__value text-sm font-bold";
    value.textContent = score;

    const total = document.createElement("span");
    total.className = "summary-item__total text-sm font-bold";
    total.textContent = "/ 100";

    scoreBox.append(value, total);
    li.append(label, scoreBox);
    return li;

}

function calculateAverage(numbers) {

    if (!Array.isArray(numbers) || numbers.length === 0) return 0;

    if (!numbers.every(Number.isFinite)) {
        console.error("Dizi sadece sayılardan oluşmalıdır.");
        return 0;
    }

    const sum = numbers.reduce((prev, current) => prev + current, 0);
    return Math.round(sum / numbers.length);
}

async function init() {

    const items = await getData();

    if (items.length === 0) {
        summaryItemList.textContent = "Veriler yüklenemedi.";
        return;
    }

    summaryItemList.append(...items.map(createSummaryItem));
    cardResultValue.textContent = calculateAverage(items.map(item => item.score));

}


init();