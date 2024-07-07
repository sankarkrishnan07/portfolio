export function keyDownHandler(
  e,
  selectEl,
  itemEls,
  isOpen,
  setIsOpen,
  handleSelection
) {
  if (!itemEls.current) return;

  const KEYS = ["ArrowUp", "ArrowDown", "Space", " ", "Enter", "Tab", "Escape"];
  if (!KEYS.includes(e.key)) return;

  ["ArrowUp", "ArrowDown", "Space", " ", "Enter"].includes(e.key) &&
    e.preventDefault();

  if (
    !isOpen &&
    ["ArrowUp", "ArrowDown", "Space", " ", "Enter"].includes(e.key) &&
    e.target === selectEl.current
  ) {
    setIsOpen(true);

    setTimeout(() => {
      e.key === "ArrowUp"
        ? itemEls?.current[itemEls.current.length - 1]?.focus()
        : itemEls?.current[0]?.focus();
    }, 0);
    return;
  }

  if (e.key === "Enter" && itemEls.current.some((el) => el === e.target)) {
    handleSelection( e.target.value || e.target.innerText);
    setIsOpen(false);
    selectEl.current?.focus();
    return;
  }

  if ((isOpen && e.key === "Space") || e.key === " ") return;
  if (!isOpen && e.key === "Tab") return;

  if (isOpen && (e.key === "Tab" || e.key === "Escape")) {
    setIsOpen(false);
    e.key === "Escape" && selectEl.current?.focus();
    return;
  }

  let focusIndex = itemEls.current.indexOf(e.target);

  if (e.key === "ArrowDown")
    focusIndex = focusIndex++ === itemEls.current.length - 1 ? 0 : focusIndex++;
  if (e.key === "ArrowUp")
    focusIndex = focusIndex-- <= 0 ? itemEls.current.length - 1 : focusIndex--;

  itemEls.current[focusIndex]?.focus();
}
