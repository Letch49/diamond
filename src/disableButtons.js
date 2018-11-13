const disableButtons = (elements) => {
    elements.forEach((el) => {
        el.disabled = true;
    });
};

export default disableButtons;