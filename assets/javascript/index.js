document.addEventListener('DOMContentLoaded', function() {


    let params = coDesExtract();
    let id = params.id;
    console.log(id);

    
    // let bbbb = params['id']
    // console.log(bbbb)
    // let categories = document.querySelectorAll(".cat-link");
    // let categoryImages = document.querySelectorAll(".Projeto-img");

    // categories.forEach(category => {
    //   for (let cat_name in db.portfolio){
    //     if (category.innerHTML == cat_name) {
    //       category.setAttribute("href", `${cat_name}.html`);
    //       // console.log(cat_name);
    //     }
    //   }
    // });

    // categoryImages.forEach(div => {
    //   console.log(div.setAttribute('src', "lorem"));
    //   console.log(div)

    // });

    coDesReplace('.menu-desktop', db);
    coDesReplace('.dropdown', db);
    coDesReplace('.projetos', db);
    coDesReplace('.projetos-1',db['portfolio'][id]);
    coDesReplace('.projeto-item',db['id'])
    coDesReplace('body', params);

});


// console.log(db);