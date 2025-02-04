import creatorModal from "../modal/creator-modal.js";
import {
    changeStatus,
    data,
    findNoteObject,
    removeNote,
} from "./data-handler.js";

const clearRender = () => {
    const isList = document.querySelector("#list");

    if (isList) {
        isList.innerHTML = "";
    }
};

const eventHandler = (e) => {
    const isTrashButton = e.target.closest("[data-btn-remove]");
    const isEditBtn = e.target.closest("[data-btn-edit]");
    const isStatusBtn = e.target.closest("[data-btn-status]");

    if (isTrashButton) {
        const idFromNote = e.target.closest("[data-note-item]").id;
        removeNote(idFromNote);
        clearRender();
        render(data.favoritesNotes);
        render(data.regularNotes);
    } else if (isEditBtn) {
        const isEdit = true;
        const idFromNote = e.target.closest("[data-note-item]").id;
        creatorModal(isEdit, findNoteObject(idFromNote));
    } else if (isStatusBtn) {
        // 1. Найти id заметки +
        // 2. Запустить findNoteObject +
        // 3. Сменить статус заметки и избранность +
        // 4. Заменить id найденной заметки через setId +
        // 5. Вызвать изменение даты +
        // 6. Удалить заметку из старого массива +
        // 7. Добавить заметку в новый массив
        // 8. Сохранить обновленные данные в локалку
        // 9. clearRender & render
        const idFromNote = e.target.closest("[data-note-item]").id;
        changeStatus(idFromNote);
    }
};

const render = (arrNotes) => {
    let isList = document.querySelector("#list");
    if (!isList) {
        isList = document.createElement("ul");
        isList.id = "list";
        isList.addEventListener("click", (e) => eventHandler(e));
        document.body.append(isList);
    }

    const listWrapper = document.createDocumentFragment();

    arrNotes.forEach((note) => {
        const template = document.createElement("li");
        template.className = "my-4 max-w-4xl mx-auto";
        if (note.id) {
            template.id = note.id;
        }
        template.setAttribute("data-note-item", "");

        const isChangeStatusString = note.isChanged ? "изменена" : "создана";
        const iconClass = note.checkbox ? "icon-star-gold" : "icon-star-btn";
        const dateString = note.date.substring(0, 10);
        const timeString = note.date.substring(12, note.date.length);

        const noteElement = `
        <article class="border-2 border-cyan-600 rounded-md dark:border-white">
            <div class="flex justify-between pl-2">
                <div class="flex">
                    <h2 class="text-2xl text-cyan-700 mr-4 font-semibold dark:text-cyan-500">${note.title}</h2>
                    <p class="my-auto text-sm text-slate-500 font-semibold dark:text-white">Заметка ${isChangeStatusString} ${dateString} в ${timeString}</p>
                </div>
                <div class= "flex gap-2 pt-1 pr-2">
                    <button class="${iconClass} w-6 h-6 bg-cover bg-no-repeat" data-btn-status></button>
                    <button class="bg-[url('/edit-btn.svg')] w-6 h-6 bg-cover bg-no-repeat dark:bg-[url('/edit-btn-dark.svg')]" data-btn-edit></button>
                    <button class="bg-[url('/trash-btn.svg')] w-6 h-6 bg-cover bg-no-repeat dark:bg-[url('/trash-btn-dark.svg')]" data-btn-remove></button>
                </div>
            </div>

            <p class="pl-2 dark:text-white mb-1">${note.textarea}</p>
        </article>
        `;
        template.innerHTML = noteElement;
        listWrapper.appendChild(template);
    });

    isList.appendChild(listWrapper);
};

export { render, clearRender };
