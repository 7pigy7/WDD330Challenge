export async function loadHeaderFooter() {
    const headerTemplateFn = loadTemplate("/particals/header.html");
    const footerTemplateFn = loadTemplate("/particals/footer.html");
    const headerEl = document.querySelector("#header");
    const footerEl = document.querySelector("#footer");
  
    await renderWithTemplate(headerTemplateFn, headerEl);
    renderWithTemplate(footerTemplateFn, footerEl);
}

function loadTemplate(path) {
  return async function() {
    const response = await fetch(path);
    if (response.ok){
      const html = await response.text();
      return html;
    }
  };
}

export async function renderWithTemplate(templateFn, parentElement, data, callback, position = "afterbegin", clear = true) {
    if(clear) {
      parentElement.innerHTML = "";
    }
    const htmlString = await templateFn(data);
    parentElement.insertAdjacentHTML(position, htmlString);
    if(callback) {
      callback(data);
    }
}