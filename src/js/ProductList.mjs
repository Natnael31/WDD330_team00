
function productCardTemplate(product){
    return `<li class="product-card">
            <a href="product_pages/?product=880RR">
              <img
                src="images/tents/marmot-ajax-tent-3-person-3-season-in-pale-pumpkin-terracotta~p~880rr_01~320.jpg"
                alt="Marmot Ajax tent"
              />
              <h3 class="card__brand">Marmot</h3>
              <h2 class="card__name">Ajax Tent - 3-Person, 3-Season</h2>
              <p class="product-card__price">$199.99</p>
            </a>
          </li>`;
}


export default class ProductDetails{
    constructor(category, dataSource, listElement){
        this.dataSource = dataSource;
        this.category = category;
        this.listElement = listElement
    }

    async init(){
        // the dataSource will return a Promise...so you can use await to resolve it.
        const list = await this.dataSource.getData();
    // next, render the list – ** future **
    }
    renderList(list) {
        const htmlStrings = list.map(productCardTemplate);
        this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
      }

}