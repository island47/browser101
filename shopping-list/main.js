const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
	// 1. 사용자가 입력한 텍스트를 받아온다.
	const text = input.value;
	// 2. 새로운 아이템을 만든다.(텍스트 + 삭제 버튼)
	const item = createItem(text);
	// 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
	text === '' ? 'return' : items.append(item);
	// if (text === '') {
	// 	return;
	// } else {
	// 	items.append(item);
	// }
	// 4. 새로 추가된 아이템으로 스크롤이 이동.
	item.scrollIntoView({ block: 'center' });
	// 5. 인풋을 초기화 한다.
	input.value = '';
	input.focus();
}

let id = 0; // UUID
function createItem(text) {
	const itemRow = document.createElement('li');
	itemRow.setAttribute('class', 'item__row');
	itemRow.setAttribute('data-id', id);
	itemRow.innerHTML = `    
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__delete">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>`;
	id++;
	return itemRow;
}

items.addEventListener('click', e => {
	const id = e.target.dataset.id;
	if (id) {
		const toBeDelete = document.querySelector(`.item__row[data-id="${id}"]`);
		toBeDelete.remove();
	}
	// const toBeDelete = document.querySelector(`.item__row[data-id="${id}"]`);
	// id ? toBeDelete.remove() : 'return';
});

addBtn.addEventListener('click', onAdd);
input.addEventListener('keypress', e => {
	e.key === 'Enter' ? onAdd() : 'return';
});
// input.addEventListener('change', onAdd);
