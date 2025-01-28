const keyLocal = "notes";

const setDataToStorage = (key, data) => {
    const dataJson = JSON.stringify(data);
    localStorage.setItem(key, dataJson);
};

const getDataFromStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};

const setDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });
};

const setId = (statusNote) => {
    let newId = null;
    if (statusNote) {
        newId = data.favoritesNotes.length + "favorite";
    } else if (!statusNote) {
        newId = data.regularNotes.length + "regular";
    }
    return newId;
};

const formDataHandler = (event, formElement) => {
    const formData = new FormData(formElement);
    const newNote = {
        title: formData.get("title").trim(),
        textarea: formData.get("textarea")?.trim(),
        checkbox: formData.get("checkbox"),
        id: "",
        date: "",
        isChanged: false,
    };

    const formId = formElement.dataset.id;

    if (formId) {
        const oldNote = findNoteObject(formId);

        if (oldNote) {
            const titleChanged = oldNote.title !== newNote.title;
            const textChanged = oldNote.textarea !== newNote.textarea;
            const favoriteChanged = oldNote.checkbox !== newNote.checkbox;

            if (titleChanged || textChanged || favoriteChanged) {
                newNote.isChanged = true;
                removeNote(oldNote.id);
                newNote.id = setId(newNote.isFavorite);
                newNote.date = setDate();
                if (newNote.isFavorite) {
                    data.favoritesNotes.push(newNote);
                } else {
                    data.regularNotes.push(newNote);
                }
                setDataToStorage(keyLocal, data);
                return;
            }
        }
    } else {
        newNote.id = setId(newNote.isFavorite);
        newNote.date = setDate();
        if (newNote.isFavorite) {
            data.favoritesNotes.push(newNote);
        } else {
            data.regularNotes.push(newNote);
        }
        setDataToStorage(keyLocal, data);
    }
};

const initData = () => {
    const isData = getDataFromStorage(keyLocal);
    let data = null;
    if (isData) {
        data = isData;
    } else {
        const dataNotes = {
            favoritesNotes: [],
            regularNotes: [],
        };
        setDataToStorage(keyLocal, dataNotes);
        data = dataNotes;
    }
    return data;
};

const findNoteObject = (id) => {
    if (id) {
        const isFavoriteId = id.endsWith("favorite");
        const currentArray = isFavoriteId
            ? data.favoritesNotes
            : data.regularNotes;
        let currentNoteObject = null;
        currentArray.forEach((element) => {
            if (id === element.id) {
                currentNoteObject = element;
            }
        });
        return currentNoteObject;
    }
};

const decreaseId = (index, array, mode) => {
    for (let i = index; i < array.length; i++) {
        array[i].id = parseInt(array[i].id) - 1 + mode;
    }
};

const removeNote = (id) => {
    if (id) {
        const isFavoriteId = id.endsWith("favorite");

        const [currentArray, arrayMode] = isFavoriteId
            ? [data.favoritesNotes, "favorite"]
            : [data.regularNotes, "regular"];

        const currentIndex = currentArray.findIndex((el) => el.id == id);

        currentArray.splice(currentIndex, 1);

        decreaseId(currentIndex, currentArray, arrayMode);

        setDataToStorage(keyLocal, data);
    }
};

const data = initData();

export { data, formDataHandler, removeNote, findNoteObject };

// 1. если заметка не была измена, дату не менять и подписи к ней тоже
