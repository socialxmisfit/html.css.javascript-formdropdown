const checkFormElementsExist = () => {
    const formElementTags = ['form', 'input', 'label', 'select', 'option'];
    let formElementsExist = true;
  
    formElementTags.forEach(tag => {
      const element = document.querySelector(tag);
      if (!element) {
        console.error(`The ${tag} element does NOT exist on the DOM.`);
        formElementsExist = false;
      } else {
        console.log(`The ${tag} element exists on the DOM.`);
      }
    });
  
    return formElementsExist;
}
  
checkFormElementsExist();