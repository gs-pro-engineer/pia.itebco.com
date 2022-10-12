const stripHtml = (value) => {
    let div = document.createElement("div")
    div.innerHTML = value
    return div.textContent || div.innerText || ""
}

export default stripHtml